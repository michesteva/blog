---
layout: post
title: Finding the Best Places to Live in England with Illustreets
date: '2013-09-30T16:05:00+02:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/62716775654/finding-the-best-places-to-live-in-england-with
---
In this guest blog, Manuel Timita and Katya Koval describe how they are building one of the most interesting real estate business intelligence tools available with Open Data, Illustreets. We are very impressed on their usage of the entire CartoDB platform, from the Maps API to the SQL API is an example of the complete type of Data Products you can build with CartoDB. We got the opportunity to meet Manuel during last FOSS4G in Nottingham and the passion they have put on their product is unmatched. We love what they are building and cant wait to see the new functionalities they come up with. Enjoy!
In November 2012, we were looking to develop illustreets, a neighbourhood profiling application for users looking to rent or buy property in England. In this respect, the amount of Open Data made available by academic and governmental organisations in the UK is astounding, yet we had no idea how we were going to digest and present it in a manner that will make the users’ experience uncomplicated and enjoyable. It proved to be a serious challenge: how to take about 30,000 polygons, six million reported crimes, over 20,000 schools, nearly 400,000 public transport stations and stops, and tens of thousands of census and deprivation records, and present them together in an attractive and usable format?

For almost three months we researched and tested over a dozen mapping technologies available at the time, both commercial and Open Source. It soon became a frustrating exercise, as most of them were lacking one or more of the essential features that we wanted: speed, dynamic layer rendering, attractive map design, and a flexible API.
Then we found CartoDB. After testing it for a short while, it became clear that this was the only way to go, given its unlimited possibilities for manipulating, visualising, and publishing the vast amount of geospatial data that we had. Using CartoDB.js, CartoCSS and the SQL API, we managed to create a mapping application which can be explored in a variety of ways.
On devices equipped with a mouse, the information about a location on the map is being displayed on the fly, whilst hovering over it:

For those looking only for places where they can afford to buy or rent property, we made it possible to filter the areas on the map by price and other criteria, by using CartoCSS and spatial queries via the SQL API:

Whilst for many users getting quick information about the standard of living, crime rate, or average house prices might be enough, we wanted to allow a deeper level of exploration for those really interested in discovering as much as possible about a location. Here’s where CartoDB has saved us weeks, if not months, of development time – we simply did not need any other backend. The user needs only click on the desired location, and then the SQL API does its magic:




But using CartoDB as a backend also meant that we had access to all the goodness that PostgreSQL and PostGIS have to offer. What about searching for the nearest 10 top rated secondary schools, ordered by distance, if the user wishes to do so?

This is by no means a complete list of illustreets’ use of CartoDB. In the near future we intend to explore additional geovisualisation possibilities, such as employing the Torque library for data that has temporal or spatial dimensions, and allowing the user to switch between multiple sets of interactive layers. 