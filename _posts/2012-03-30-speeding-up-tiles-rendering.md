---
title: Speeding up tiles rendering
date: '2012-03-30T10:59:00+02:00'
tags:
- PostGis
- cartodb
- data
- mapnik
categories:
- 'New features'
- 'New hires'
---

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/mapnik_patch.png"/>

Some weeks ago we announced that <a href="http://www.vizzuality.com/team/sandro">Sandro Santilli</a> joined the CartoDB team. He has been working hard on making PostGIS 2.0 and improving CartoDB, looking at queries we are making. Particularly he is been profiling rendering of CartoDB map tiles to find improvements opportunities.

CartoDB data is fetched from PostGIS and rendered by Mapnik. The pipeline hot spot was the rendering part, keeping the CPU pretty busy. How to calm it down ? Reduce the workload!

Mapnik workload is number of input vertices. What options do we have to reduce them? PostGIS has three functions that can be used to reduce the complexity of geometries: ST_SnapToGrid, ST_Simplify and ST_SimplifyPreserveTopology.

ST_SnapToGrid and ST_Simplify are available in PostGIS since 1.0.0 and before (circa 2003) and were implemented specifically to reduce workload of client-side mapping applications (where both browser memory and transfer time are a concern).

ST_SimplifyPreserveTopology was added in 1.3.3 (2008) to avoid the dimensional collapses and the introduction of invalidities in geometries being reduced. This one is implemented in GEOS so has the disadvantage of an overhead in conversion between PostGIS and GEOS geometry structures.

Let's see how these methodologies compared.

The <a href="http://www.istat.it/it/archivio/24580">dataset</a> under examination was a layer of 8,094 Italian municipality boundaries with a total of 4,845,240 vertices. We rendered the layer at 5 different zoom levels over a 600x400 image so that: level0 rendered all of Italy in 24x30 pixels, level1 rendered all Italy in 295x400 pixels, level2 only containd about 1/3 of the country, and level3 contained a single region. Parameters passed to simplifiers were of course dependent on zoom level.

Finally a run was made with pre-simplified vectors to make sure any dynamic simplification would only hit the worst case of having no effect. Timings were taken using &#8216;mapnik-speed-check' running 10 times. They include data fetching (and thus query execution) and rendering.

In the schema below "SimpTP" is ST_SimplifyPreserveTopology, "Simp" is ST_Simplify, "Snap" is ST_SnapToGrid and "vanilla" is no preprocessing. With "v" you have the total number of vertices fetched by the query and "g" gives you number of non-empty geometries over total number of geometries.

In the image above, first map (called "vanilla" in the numbers following) takes more time to render; next image ("SimpTP") loads faster. Here are the most interesting numbers:

**level0 (full extent on 24x30 pixel)**

{% highlight html %}
avg: 10070.ms <- SimpTP   809446390 v 8094/8094 g 
avg: 3190.5ms <- vanilla  4845240 v 8094/8094 g
avg: 645.24ms <- Snap     4164 v 697/8094 g
avg: 640.53ms <-  Simp    27279 v 8094/8094 g 
{% endhighlight %}

**level1 (full extent on 295x400 pixels)**

{% highlight html %}
avg: 10185.ms <- SimpTP   47498 v 8094/8094 g
avg: 3233.2ms <- vanilla  4845240 v 8094/8094 g
avg: 741.77ms <- Snap     106232 v 7889/8094 g [crowded]
avg: 707.78ms <- Simp     34438 v 8094/8094 g ***
{% endhighlight %}

**level2 (1/3 of extent on 600x400 pixels)**

{% highlight html %}
avg: 3335.9ms <- SimpTP   14004 v 2183/2183 g
avg: 945.04ms <- vanilla  1462892 v 2183/2183 g
avg: 476.34ms <- Snap     18282 v 2179/2183 g ***
avg: 230.86ms <- Simp     60761 v 2179/2183 g [crowded]
avg: 216.49ms <- Simp     13299 v 2183/2183 g ***
{% endhighlight %}

**level4 (1/10 of extent on 600x400 pixels)**

{% highlight html %}
avg: 853.96ms <- SimpTP       10476 v 547/547 g
avg: 218.95ms <- vanilla      327660 v 547/547 g
avg: 195.80ms <- Snap,SimpTP  14094 v 547/547 g
avg: 74.150ms <- Simp         10287 v 547/547 g ***
avg: 70.242ms <- Snap         67041 v 547/547 g [spiky]
{% endhighlight %}

**level4 (1/10 of extent on 600x400 pixels - PRESIMPLIFIED!)**

{% highlight html %}
avg: 54.777ms <- Simp     13459 v 545/545 g
avg: 53.419ms <- Snap     13459 v 545/545 g
avg: 52.430ms <- vanilla  13459 v 545/545 g
avg: 49.978ms <- SimpNCD  13459 v 545/545 g
{% endhighlight %}

Generally speaking a simple ST_Simplify() call is what drop most vertices and it's fast enough not to represent a problem even when there's nothign to do for it.

Starting from there we <a href="https://github.com/mapnik/mapnik/issues/1136">contributed a patch</a> to mapnik for exposing a style file parameter to request automatic simplification based on resolution. The patch is strictly for the PostGIS provider.

The patched Mapnik is already running live and it's one of the main improvements of upcoming CartoDB 1.0. Which will be presented at <a href="http://whereconf.com/where2012">Where Conference</a> and <a href="http://foss4g-na.org/">FOSS4G-NA</a>.

Congrats Sandro on this great work. This is not only great news for CartoDB users, but also for Openstreemap users which will potentially see their maps being rendered with Mapnik much faster.
