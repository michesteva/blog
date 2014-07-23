---
title: CartoDB makes D3 maps a breeze
date: '2013-01-05T00:57:00+01:00'
tags:
- GeoJSON
- TopoJSON
- D3
- SQL API
categories:
- 'How-to guides'
---

<iframe frameborder="0" height="300" src="http://cartodb.s3.amazonaws.com/tumblr/posts/iframe.html" width="640"></iframe>

Anybody who loves maps and data can't help but notice all the beautiful visualizations people are making with D3 right now. Huge thanks to <a href="http://bost.ocks.org/mike/">Mike Bostock</a> for such a cool technology. 

We have done a lot of client-side rendering expirements over the past year or so and have to say, D3 is totally awesome. This is why we felt it might be helpful to show you how easy it is to use D3 with CartoDB. In the near future, we'll be adding a few tutorials for D3 to our developer pages, but for now, let’s have a look.

**Creating your first map**

Using CartoDB's SQL API, you can load GeoJSON straight from your CartoDB table into your D3 application. CartoDB will turn any of your geometries into valid GeoJSON on the fly through the SQL API. All you have to do is include the format=geojson parameter on your requests. From there, making maps is simple and you can use D3's Ajax support to directly access your data from CartoDB as follows, 

{% highlight javascript %}
d3.json("http://account_name.cartodb.com/api/v2/sql?q=SELECT * FROM table_name WHERE the_geom IS NOT NULL&format=geojson&dp=5", function(collection) {
  svg.select("#layer_id")
    .selectAll("path")
    .data(collection.features)
    .enter().append("path")
    .attr("fill", "violet")
    .attr("d", path.projection(xy));
});
{% endhighlight %}

Paired with <a href="https://github.com/mbostock/d3/wiki/Geo-Paths">d3.geo</a>, you can quickly develop maps. If you are eager to dive in, take a look at a few code examples: basic <a href="http://bl.ocks.org/4448106" title="CartoDB D3 Choropleth">Choropleth</a>, <a href="http://bl.ocks.org/4448162" title="CartoDB D3">Bubble map</a>, and <a href="http://bl.ocks.org/4455569" title="CartoDB D3">Earthquakes</a>.

<img alt="image" height="340" src="http://cartodb.s3.amazonaws.com/tumblr/posts/d3_subway_map.png" width="650"/>

**TopoJSON support**

We are actively working on supporting TopoJSON in CartoDB and when deployed, this will open the door to even faster D3 maps. There are a few good TopoJSON based <a href="http://bost.ocks.org/mike/map/">tutorials on the web</a> already, and as soon as we add support in CartoDB we will add a couple more. 

**Client-side simplification**

Many of you have probably seen some of the cool client-side <a href="http://bost.ocks.org/mike/simplify/">simplification work</a> that is <a href="http://www.jasondavies.com/maps/simplify/">being done</a>. We want to make these sorts of capabilities available easily to CartoDB users as well. To do so will take a bit of work on our end, but in the end we think it will help you create even more amazing maps. 

<img alt="CartoDB D3 Spinning Globe" height="365" src="http://cartodb.s3.amazonaws.com/tumblr/posts/d3_spinning_globe.png" width="650"/>

Use the above examples or any of our <a href="http://vizzuality.github.com/HTML5-experiments/">HTML5 experiments</a> to get started with CartoDB for client-side rendering. You'll have a blast and certainly learn a thing or two. As always, we'd love to see what you come up with, so don't forget to post it over on the CartoDB user thread. Of course, if you need to support the browsers that D3 doesn't, you can still always rely on our tiling services.
