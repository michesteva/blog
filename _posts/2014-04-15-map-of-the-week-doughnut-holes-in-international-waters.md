---
layout: post
title: 'Map of the Week: Doughnut Holes in international waters'
date: '2014-04-15T17:59:00+02:00'
tags:
- donutholes
- cartodb
- how-to
- guide
- map of the week
- examples
tumblr_url: http://blog.cartodb.com/post/82798101453/map-of-the-week-doughnut-holes-in-international-waters
---
We welcome Dmitriy Skougarevskiy who is a doctoral candidate at The Graduate Institute of International and Development Studies in this guest post to let him tell us about his pet project on the loopholes in the Law of the Sea, called donutholes.ch.

It all started with an International Law volume where I glimpsed this illustration:



Source: Cook, Peter J., and Chris M. Carleton, eds. Continental Shelf Limits: The Scientific and Legal Interface. Oxford University Press, 2000, p. 317

Simply put, the 1982 U.N. Convention on the Law of the Sea established that an area stretching 200 nautical miles from a seashore is an Exclusive Economic Zone (EEZ) of the respective state. In practical terms, this convention is important as it grants the state an exclusive right to exploitation of marine life (think fishery) and natural resources (oil and gas).

But what if (a) littoral states are closer than 200 miles (how would they divide the sea?); (b) coastal shelf extends 200 n.m. from the coastline (when would the EEZ end?). An exciting legal loophole emerges when you combine these questions. The figure above shows two states with such seabed profile that area beyond 200 n.m. belongs to neither of them. Who owns this area then? International Law is unequivocal: this is international waters.

Such areas, shaped by nature and human convention, are known as ‘doughnut holes’. And they deserve to be mapped and explored: EEZ wiki page does not illuminate the unique legal-geographical interface they create. Maps in law books are an improvement, but they are static and secondary to the legal reasoning. Luckily, we have CartoDB to tell the story. To make a powerful statement, I need my interactive map to focus on the sea rather than land, showing state borders most people have never seen before. Apparently, CartoDB.js + Mapbox can create quite involved in a series of simple steps.

Bathymetry on base layer

Unless you are from the Wall Street Journal, your map starts with a baselayer. CartoDB offers a selection, but they emphasize land rather than sea. I want my story to unravel in layers, so showing the ocean floor is crucial. Natural Earth provides a beautiful raster image:



(this is the ocean bottom for the first image, in case you did not recognise it)

The easiest way to create your own baselayer for a CartoDB map is to use TileMill. With a bit of CartoCSS magic (the code is available on my GitHub) we get this:



I coloured the ocean, added continents and country borders. Also, I decided to add a touch of green to urban areas in countries. Note that I haven’t added any labels yet - CartoDB will do it. The resulting raster was exported into tiles up to the sixth zoom level (taking 168MB) and uploaded to my Mapbox account. This way, your map tiles are now served from the cloud where CartoDB can access it. So I linked my CartoDB visualization to my Mapbox baselayer with the ‘add yours’ button:



(note that now you will be charged both by Mapbox and CartoDB as the latter requests the former).

Drawing EEZ polygons

The story is all about exclusive economic zones. Therefore, I need accurate and up-to date boundaries. The Flanders Marine Institute offers a very detailed ESRI shapefile that shows both the World EEZs as well as the disputed areas and joint regimes. It is very meticulous and large. Feeding CartoDB a 154MB shapefile will fail unless you have an enterprise account. I dissolved and simplified the polygons in QGIS and mapshaper, reducing the shapefile to 1.8MB. Importing this shapefile to CartoDB is a matter of dragging a zip file with your .dbf, .prj, .shp and .shx files into your Dashboard. Provided that you have an informative .dbf, the attribute table will be populated automatically.

The loaded shapefile and baselayer will give you this:



Great, I can see the doughnut hole (and the Cuban EEZ), but the colors are all the same! CartoCSS comes to rescue. My attributes table has a ‘color’ column that ranges from 1 to 16. Each integer indicates a distinctive color that I manually assigned to each EEZ (Four-colour theorem won’t work here because of the non-contiguous overseas territories). So assigning colours now is a matter of writing the conditional CartoCSS:

https://gist.github.com/furilo/10738710

However, a cursory look at the South China Sea reveals numerous disputed EEZs:

Source: The Economist

How one should colour them? I chose to use stripes: if the dispute is between a yellow-color EEZ and an orange-color EEZ, the contested area will be filled with . My CartoCSS would then specify:

https://gist.github.com/furilo/10739568

for each disputed area.

Telling the story

Now that I have EEZs mapped on top of the seabed, it’s time for doughnut holes to speak up. Each loophole has its own dramatic story to share, so I create a second layer in my visualization, which is linked to a simple attributes table:



Each row is a donut hole with its point-wise location (the_geom), name, description and sources used in the description. I style a custom infowindow:

https://gist.github.com/furilo/10739607

Note the triple mustache in ‘{{{description}}}’ and ‘{{{sources}}}’. This will render the html tags in table cells: The resulting infowindow



If you use the double mustache, all the tags will appear as plaintext in the infowindow.

Interactivity

The user should always know the EEZ sovereignty. Javi Santana developed a nice geometryhover() function I’m using to display sovereign name on hover and emphasize the borders:



Some would also love to explore the complex ocean floor that shapes the doughnut holes. This can be done by setting the #eez [zoom>=0]{polygon-opacity: 0;} on button click. With jQuery UI, it goes along these lines:

https://gist.github.com/furilo/10739623

This code uses setCartoCSS() from CartoDB.js to style the polygons with a given CSS.
Finally, the impatient few might want to jump from one doughnut hole to another, so I provide the list:

https://gist.github.com/furilo/10739657

Clicking on each item will zoom the map there with the aid of the following jQuery UI + CartoDB.js:

https://gist.github.com/furilo/10739694

We’ve come a long way from a paper map to an interactive web application you can explore at http://donutholes.ch.
