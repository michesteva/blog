---
layout: post
title: Point clustering using CartoDB
date: '2011-12-18T17:04:00+01:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/14405828478/point-clustering-using-cartodb
---
This week we wrote a few new examples in the CartoDB Gallery. One of the examples was to show off a feature that allows you to set styles through the URL. Until recently, setting Carto styles in CartoDB required the use of the Developer Console, but now with a bit of new functionality and some sweet new caching, it is possible to set styles through your Maps API URL request. For example,
      
On the left tile showing annual precipitation per zip code in California. However, as you zoom in on the map (the tile on the right), those styles become more transparent, allowing you to see map features more clearly. In the process of writing that example, we got the idea that through a pretty simple combination of SQL, Javascript, and Carto stylings we could implement point clustering on a map. Early iterations of this example relied on UNIONS and more SQL trickery, our final version though uses pretty simple JS to reach far nicer results. You can play with the map here.

This is a first stab in a direction we know many of you want, we can’t wait to see what directions you take it! Check out all our galleries online.
