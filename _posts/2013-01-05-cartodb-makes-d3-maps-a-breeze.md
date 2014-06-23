---
layout: post
title: CartoDB makes D3 maps a breeze
date: '2013-01-05T00:57:00+01:00'
tags:
- GeoJSON
- TopoJSON
- D3
- SQL API
tumblr_url: http://blog.cartodb.com/post/39680106243/cartodb-makes-d3-maps-a-breeze
---

Anybody who loves maps and data can’t help but notice all the beautiful visualizations people are making with D3 right now. Huge thanks to Mike Bostock for such a cool technology. 
We have done a lot of client-side rendering expirements over the past year or so and have to say, D3 is totally awesome. This is why we felt it might be helpful to show you how easy it is to use D3 with CartoDB. In the near future, we’ll be adding a few tutorials for D3 to our developer pages, but for now, let’s have a look.
Creating your first map
Using CartoDB’s SQL API, you can load GeoJSON straight from your CartoDB table into your D3 application. CartoDB will turn any of your geometries into valid GeoJSON on the fly through the SQL API. All you have to do is include the format=geojson parameter on your requests. From there, making maps is simple and you can use D3’s Ajax support to directly access your data from CartoDB as follows, 
Paired with d3.geo, you can quickly develop maps. If you are eager to dive in, take a look at a few code examples: basic Choropleth, Bubble map, and Earthquakes.

TopoJSON support
We are actively working on supporting TopoJSON in CartoDB and when deployed, this will open the door to even faster D3 maps. There are a few good TopoJSON based tutorials on the web already, and as soon as we add support in CartoDB we will add a couple more. 
Client-side simplification
Many of you have probably seen some of the cool client-side simplification work that is being done. We want to make these sorts of capabilities available easily to CartoDB users as well. To do so will take a bit of work on our end, but in the end we think it will help you create even more amazing maps. 

Use the above examples or any of our HTML5 experiments to get started with CartoDB for client-side rendering. You’ll have a blast and certainly learn a thing or two. As always, we’d love to see what you come up with, so don’t forget to post it over on the CartoDB user thread. Of course, if you need to support the browsers that D3 doesn’t, you can still always rely on our tiling services.
