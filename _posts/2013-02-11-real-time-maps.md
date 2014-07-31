---
title: 'Real time maps with CartoDB: Barcelona traffic'
date: '2013-02-11T17:33:28+01:00'
tags:
- real-time
- traffic
- opendata
categories:
- 'How-to guides'
redirect_from:
- "/post/42847998810/real-time-maps/"
---

<img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/traffic-BCN.png"/>

One of CartoDB's more interesting functionalities is its dynamic rendering. When hosting your data in the cloud with CartoDB, your maps and visualizations have the possibility to automatically update. As you can imagine this represents a fundamental paradigm shift in the map making process where you no longer need to publish a static map and manually update it, inserted with CartoDB you publish it once with live data, and the visualization will perpetually update. 

A great example of this is a city's traffic status map. A typical traffic status map will represent traffic density by coloring the streets different colors and as new data becomes available update the map dynamically. CartoDB shines in these types of use cases and we would like to show you an example. 

We took traffic data from the<a href="http://w20.bcn.cat/opendata/Default.aspx?lang=ANG"> City of Barcelona's Open Dara Portal</a>, and then dynamically imported it into CartoDB. This data, and now henceforth the map, will automatically updates every fifteen minutes. 

Click on the image to check out the demo. 

<a href="http://cartodb.github.com/bcn_traffic_map/"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/traffic-BCN_demo.png"/></a>

To get this map running, we synchronized the external data using Google App Engine with CartoDB, and in order to get you started with live data and dynamic mapping, we've provided all source code for this visualization, along with detailed instructions on <a href="https://github.com/CartoDB/bcn_traffic_map">GitHub</a>.

Dynamic rendering is at the heart of CartoDB, and is one of its more interesting functionalities, either for live queries, or like we've shown here, real time data. Paired with our mechanism for content distribution, using Amazon Cloud Front, we ensure that you'll be distributing the most recent rendition of your maps and visualizations with the latest data and at maximum speed and scalability. 

Finally, <a href="http://blog.cartodb.com/post/42431340118/come-see-us-speak-in-barcelona-and-get-a-free-mwc">we'll be at the Mobile World Congress</a> in Barcelona starting the 25ht of February showcasing this technology, so please stop by our booth to see how CartoDB can make this, and other cool maps. 
