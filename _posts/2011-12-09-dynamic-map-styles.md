---
layout: post
title: 'Dynamic map styles '
date: '2011-12-09T15:39:00+01:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/13968310966/dynamic-map-styles
---
We’re just putting the finishing touches on a new feature of CartoDB that will let you style your maps on a per tile basis using the Carto map styling language. Many of you have asked for this, and we agree with you - dynamic map styles opens the door to a range of new interactive use cases. Exciting times! 
For an example of this new functionality, lets dynamically style an existing tile from a map of Protected Areas in the UK:

Building a dynamic style
We’re going to keep things simple for this example, but the dynamic styling uses the same Carto map styling language as the CartoDB interface, so your dynamic style can be as creative as you like. 
1. To get started, first define a Carto stylesheet for your map:
#sql_statement{
  polygon-fill:#1F78B4;
}

2. Next, URI encode the style:
  %23sql_statement%7Bpolygon-fill%3A%231F78B4%3B%7D
3. Finally, append the style to the tile request url:
 https://vizzuality.cartodb.com/tiles/sql_statement/6/31/20.png?style=%23sql_statement%7Bpolygon-fill%3A%231F78B4%3B%7D">

OK! When can I play with it?
This functionality is deployed to all paid and free users - enjoy!
We have some pretty great speedups and visualisation enhancements coming in the next few weeks, so stay tuned!
P.S. Thanks to www.protectedplanet.net and UNEP-WCMC for a great dataset!
