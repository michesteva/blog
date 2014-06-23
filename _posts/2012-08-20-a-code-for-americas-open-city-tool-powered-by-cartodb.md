---
layout: post
title: A Code for America's open city tool powered by CartoDB
date: '2012-08-20T13:10:00+02:00'
tags:
- code for america
- open source
- tools
tumblr_url: http://blog.cartodb.com/post/29822497608/a-code-for-americas-open-city-tool-powered-by-cartodb
---
Code for America is a non-profit organization developing open source projects for city governments. Through several initiatives, it’s building a network of cities, citizens, community groups, and startups “committed to reimagining government for the 21st century”.
One of its latest projects is a tool to “open and build on cities’ geodata”, as explained by Nick Doiron, 2012 Fellow at Code for America. The app, called NeighborDiff and powered by CartoDB, relies on local knowledge to map how the Macon, GA neighborhoods have evolve in the past five years. Through a drag and drop interface, users help monitor the city’s landscape.  
Here there is an image of NeighborDiff, built by Doiron and two others fellows.  

"This project started with a shapefile —a map from 2007 showing all of the buildings in the area surrounding Macon", explains Doiron. "We met two neighborhood groups, Habitat for Humanity and the College Hill Alliance, which have transformed their neighborhoods over the past five years. With local knowledge, we can map which buildings were demolished, which were refurbished, and where new houses and university buildings were built". 
"In the end we will have two new maps: a detailed map of the neighborhood as it is today, and a ‘diff map’ showing how our neighborhood groups have made a difference. We’ll be able to run all of these maps from the same table, because changing the map style is as simple as changing the map tile URL", Doiron explains. 
CartoDB powers the drag-and-drop user interface. Buildings are mapped and color-coded using tiles from CartoDB’s Maps API. 
"When you drop a marker onto the map, we use a fake click event and CartoDB’s UTFGrid implementation to identify that building and update its status", says Doiron. "The goal of the drag-and-drop UI was to make editing the map seem less like a chore and more like a collaborative map. I think we will be able to demo this at an event and have students edit the map together after only a short training session". 
The code is available at: github.com/codeforamerica/NeighborDiff
