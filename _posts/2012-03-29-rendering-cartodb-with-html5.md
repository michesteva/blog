---
layout: post
title: Rendering CartoDB with HTML5
date: '2012-03-29T22:06:00+02:00'
tags:
- cartodb
- veknik
- open source
- mapbox
- carto
- api
- sql api
tumblr_url: http://blog.cartodb.com/post/20128700449/rendering-cartodb-with-html5
---

We are working on the upcoming launching of CartoDB 1.0. Next week we are presenting it at Where Conference in San Francisco. Before the launching, we want to show you in advance some of the new tools we are developing -a glimpse of what’s coming.  
CartoDB has been using Carto as the CSS language from the very beginning. You can always go to the Carto editor and style how your map look like using CSS. The rendering of the maps happen using Mapnik on the server, and you get images that we overlay on the map. That works great for old browsers and mobile devices.
But when you want to animate, colorate dynamically, etc, having to go to the server to refresh the tiles is slow and don’t allow for fully interactive and animated visualizations. Today we are presenting a sneak of what we are looking to do in the future: use the browser to render the maps. 
Introducing Vecnik, a JS library that render features from CartoDB using HTML5 on top of Modestmaps. You can try it here on a map on NY districts (image above). Just change the color of the polygons. 
As usual, Vecnik is Open Source. You can download the library from github.
This project is possible because of lot of other people releasing their source code as Open Source, particularly the Mapbox team who did a great work on Carto.
