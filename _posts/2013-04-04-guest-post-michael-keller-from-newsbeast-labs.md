---
layout: post
title: 'Guest Post: Michael Keller from Newsbeast Labs'
date: '2013-04-04T00:22:00+02:00'
tags:
- michael keller
- newsweek
- the daily beast
- newsbeast labs
- templates
tumblr_url: http://blog.cartodb.com/post/47054808317/guest-post-michael-keller-from-newsbeast-labs
---
As some of you may already know, Newsweek / The Daily Beast has been using CartoDB for some time now, and as such today’s blog post comes from Michael Keller of Newsbeast labs. We’d also like to take the opportunity thank Michael for his amazing contributions to the CartoDB community. Thanks!  
A number of recent stories at the Daily Beast have had some kind of mapping component. We use them often to let people see how a national topic affects readers’ local areas.

I have been reusing code from former projects and so it was about time I standardized them into reusable templates with Leaflet.js. I released them on Github this week. 
I made three categories: basic map with hover states, hover states + hover infowindow, and all of that with templated infowindows using Underscore.js.
In each of these categories you’ll see a template for a point map, a polygon map, and a map with both points and polygons.
Some features:
• On point + polygon templates, the polygon hover state turns off when you hover over a point.
• Hover windows follow the mouse and respect the boundaries of the map-canvas. I find it most useful to have hover windows close to the mouse so your eye doesn’t have to leave that map region to see that region’s details

• Templates with Underscore.js hover windows include sample formatHelper functions to act as a formatting layer between your data values and how you want them to display. For instance, you could store all your feature attributes as boolean variables and run them through various formatHelpers functions to return nice display strings.
• The hover states work by storing a simplified GeoJSON representation of that feature as a feature attribute. On featureOver, that GeoJSON is plotted as a vector using Leaflet.js.
• Point + polygon templates add a secondary style class to hover windows when hovering over points to differentiate from polygons.
If you have any questions, I’m at @mhkeller. If you have improvements, pull requests at http://github.com/mhkeller/cartodb-templates

