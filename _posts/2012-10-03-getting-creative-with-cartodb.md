---
title: Getting creative with CartoDB
date: '2012-10-03T00:00:00+02:00'
tags:
- example
- sql
- styles
categories:
- 'How-to guides'
---

The combination of styling with SQL on CartoDB gives a surprising range of freedom to create data visualizations. I find myself often thinking about creative solutions to mapping data in interesting ways.

Recently I met some of the people from <a href="http://changeadministration.org/" target="_blank">Change Administration</a> and <a href="http://tomorrow-lab.com/" target="_blank">Tomorrow Lab</a> behind a DIY traffic counter. They had already set up a couple traffic counters and were collecting data in a couple areas. They had an interesting challenge, they wanted to create a map of the points that could represent busier areas by interpolation. The data was also going to grow, as they collected new days and added new collection devices over time. 

<img alt="DIY Traffic Counter" height="366" src="http://i.imgur.com/yLqm1.jpg" width="650"/>

So the challenge was, could we interpolate the traffic data over space and create a visual representation of that traffic intenstity? We thought something similar to a contour map, but one that would instantly update as new data were added to the map. I also wanted to do it entirely in SQL and with styles. We came up with this interesting map, where red is the most busy area and each line of the countour represents 10 meters and 10% decay in traffic. Of course it is a simplisitic approximation, but it helps to show what is possible on CartoDB.

<iframe height="350" src="https://viz2.cartodb.com/tables/troparevo_nikulino_1/embed_map?sql=WITH%20%20%09setup%20AS%20(%20%09%09SELECT%20ST_Transform(ST_Buffer(the_geom::geography,n*10)::geometry,3857)%20the_geom_webmercator,%20(cars*(100.0%20-%20n)/100.0)%20as%20cars%20FROM%20troparevo_nikulino_1,%20generate_series(1,99)%20n%20%09),%20%09maxcars%20AS%20(%20%09%09SELECT%20max(cars)::float%20as%20mostcars%20FROM%20setup%20%09)%20(SELECT%20ST_Buffer(ST_Buffer(ST_Union(the_geom_webmercator),400),-400)%20AS%20the_geom_webmercator,%20round((2*cars/mostcars)::numeric,1)/2%20cars,%20'topo'%20as%20layer%20FROM%20setup,maxcars%20GROUP%20BY%20round((2*cars/mostcars)::numeric,1)/2%20ORDER%20BY%20round((2*cars/mostcars)::numeric,1)/2%20DESC)%20UNION%20ALL%20SELECT%20the_geom_webmercator,%20round((cars/mostcars)::numeric,1)%20as%20cars,%20'points'%20as%20layer%20FROM%20troparevo_nikulino_1,%20maxcars" width="650"></iframe>

If you want to see how this procedure could work in other areas, take a look at a map of earthquake magnitude below,

<a href="http://cartodb.s3.amazonaws.com/tumblr/examples/earthquakes.html" title="Earthquake contour lines"><img alt="Earthquake Contour Lines" height="370" src="http://i.imgur.com/T6qmm.png" width="650"/></a>

Here is the SQL used,

<a href="https://gist.github.com/3791208" title="contour sql">https://gist.github.com/3791208</a>

Here is the style,

<a href="https://gist.github.com/3791207" title="contour style">https://gist.github.com/3791207</a>