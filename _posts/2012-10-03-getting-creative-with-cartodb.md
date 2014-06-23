---
layout: post
title: Getting creative with CartoDB
date: '2012-10-03T00:00:00+02:00'
tags:
- example
- sql
- styles
tumblr_url: http://blog.cartodb.com/post/32462049529/getting-creative-with-cartodb
---
The combination of styling with SQL on CartoDB gives a surprising range of freedom to create data visualizations. I find myself often thinking about creative solutions to mapping data in interesting ways.
Recently I met some of the people from Change Administration and Tomorrow Lab behind a DIY traffic counter. They had already set up a couple traffic counters and were collecting data in a couple areas. They had an interesting challenge, they wanted to create a map of the points that could represent busier areas by interpolation. The data was also going to grow, as they collected new days and added new collection devices over time. 

So the challenge was, could we interpolate the traffic data over space and create a visual representation of that traffic intenstity? We thought something similar to a contour map, but one that would instantly update as new data were added to the map. I also wanted to do it entirely in SQL and with styles. We came up with this interesting map, where red is the most busy area and each line of the countour represents 10 meters and 10% decay in traffic. Of course it is a simplisitic approximation, but it helps to show what is possible on CartoDB.

If you want to see how this procedure could work in other areas, take a look at a map of earthquake magnitude below,

Here is the SQL used,
https://gist.github.com/3791208
Here is the style,
https://gist.github.com/3791207
