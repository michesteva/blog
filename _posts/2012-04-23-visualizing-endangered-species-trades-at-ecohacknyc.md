---
title: Visualizing endangered species trades at EcoHackNYC
date: '2012-04-23T18:52:00+02:00'
tags:
- ecohacknyc
- Pachube
- Air quality project
- cartodb
---

We spent yersterday's Earth Day at our offices in NYC trying to do balloon mapping, a nice way to end an intense <a href="http://www.ecohacknyc.org/#program">EcoHackNYC</a> weekend. It is the second time we co-organized this (un)conference. Last fall we gathered at NYU and this time we met at Parsons. 

The event started Friday with a series of 5-minute ignite talks. On Saturday, we divided in small groups and worked on solutions. Here is a sample of some of our favorite geospatial projects. 

### Visualizing Species Trading

A five-team group, including three from Vizzuality, worked with a big and interesting dataset of 12 million endangered species trades, to create an interactive visualization called the <a href="http://saleiva.github.com/EcoHack2012/#">Species Sphere</a>. All data is fetched from CartoDB and visualized using d3.js. Amazing work done in just 8 hours!

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/ecohack1.png"/>

### Improving the creation of Community-Supported Agriculture (CSA)

Another group worked on a simple map interface to communicate local demand for community-supported agriculture (CSA). The <a href="http://csabuilder.herokuapp.com/">project</a> is built on Heroku for hosting, MapBox for map tiles, Leaflet for the mapping interface, and jQuery with CartoDB for all the analysis. 

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/ecohack2.png"/>

### Visualizing deforestation

Check too this <a href="http://a.tiles.mapbox.com/v3/villeda.simard-forests.html#5.00/-7.019/-58.013">map of global forest height</a> showing deforestation in the Amazon, build at the EcoHack: 

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/ecohack3.png"/>

### We weren't there alone

This time we also expanded the meeting beyond data and code and we teamed up with <a href="http://publiclaboratory.org/es/node/1">The Public Laboratory</a> to add a hardware-hacking to the event. The Public Laboratory has developed a balloon mapping kit that enables you to collect your own aerial photos from up to 1000 ft. Using the open source MapKnitter web-based software, you can stitch the resulting images into a web-viewable map.  

The <a href="http://www.kickstarter.com/projects/edborden/air-quality-egg">Air Quality Egg</a> team brought also their DYI sensor-box for real-time air column monitoring. It was customized and added to the balloon kit to gain additional capabilities. The system contains sensors to read NO2, CO, temperature, humidity, compass (to calculate wind direction), wind speed, dust (particulate matter), VOC's, altitude, as well as O3, and streams the data in real-time via XBee to Pachube.com.

It was a great, brilliant event. We are looking forward to the next one!
