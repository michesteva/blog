---
layout: post
title: How to build real-time, cross-device electoral maps
date: '2012-10-23T13:35:00+02:00'
tags:
- real time maps
- big data
- iPad
tumblr_url: http://blog.cartodb.com/post/34160277026/how-to-build-real-time-cross-device-electoral-maps
---
With US Presidential Election just around the corner, we want to show you how to use CartoDB to power dynamic, fully scalable, cross-device maps that update instantly, with no need to refresh the browser. 
Media outlets in countries such as US, Spain and Brazil are using CartoDB to power their electoral maps. We’ve already written a post about The Wall Street Journal’s coverage of the US presidential campaign, with other publications, like Brazilian Estadão, taking a similar approach to visualize both polling results and post-electoral analysis.
Editors only need to insert new data into any of their CartoDB tables, i.e. the latest poll results, and the map will update automatically. Working with a real-time data stream follows the same process, but poses additional challenges. Data has to be fetched dynamically into CartoDB, and the map needs to be fully scalable and meet high-traffic, cross-device requirements. 
In this video we show how all these requirements are fulfilled with CartoDB. In the demo, as electoral data from California is updated the new results are distributed across the network, without needing to refresh the browser. All devices show the resulting map update in realtime. 

In live settings, the data stream gets into CartoDB through a few lines of code using the CartoDB API key to perform writes and updates to an account in realtime. Recently, we’ve shared a simple test of this, and live maps are fully scalable through Amazon’s Cloudfront integration —a built-in feature in the upcoming CartoDB 2.0.
You can also see some nice techniques to have hover effects over the polygons. Yes, these hover work fine in IE7 :). Thanks to the WSJ team for sharing their geometries.
We put together additional explanation and resources on how to use CartoDB for real-time maps here: cartodb.com/real-time All the code and a template are available here. This is the technology powering upcoming election day maps by media outlets such as WSJ or The Daily Beast / Newsweek. 
Obviously this technique does not only work for election. It can be used to power many different dashboard and real-time applications. We are curious what people build using it. Feel free to send us an email if you’re missing any info. Also, you can share your questions through the CartoDB Google Group, where there’s an active community sharing tips and ideas. 
