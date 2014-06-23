---
layout: post
title: 'PLUTO is back! '
date: '2013-08-09T13:57:00+02:00'
tags:
- open data
- pluto
- data service
tumblr_url: http://blog.cartodb.com/post/57786792357/pluto-is-back
---
Sorry, that title was too fun not to use. In reality, we aren’t talking about the rejected non-planet, we are talking about NYC’s latest open data release, the PLUTO dataset. The PLUTO dataset contains land use and geographic data for tax lots across the five boroughs. That’s 850,000 polygons! While not being exactly building-by-building footprints, tax lots are now among the highest resolution geospatial data available from the NYC open data portal. 

The PLUTO dataset used to cost each user $1,500 just to get a hold of, and once you had it you were pretty limited about how you could distribute it! So, the release of PLUTO has been a long-time coming. Our friends in the community have really worked hard to make this happen. Congratulations all around! It is going to be really exciting to see what new information, technology, and ideas come from having this data available in the open. At the request of some of our friends at OpenPlans, we took a minute to try and get our heads around some interesting ideas that could be pulled from the dataset. We put together a map gallery to show off some of the data’s features and attributes,

Our goal in creating the gallery was to try and build a number of visualizations from just the single data source, something pretty easy to do using CartoDB’s dynamic map service. We found all sorts of treasures in the process. For example, we’ve never been able to make a 3D map of New York easily and with so much detail before! We also thought of some great practical uses, like a free and open reverse geocoder. But from there, we want to leave it up to you to go and find all uses and all the other datasets that need to be combined with PLUTO to gather interesting insights about our city. The challenge is on. 
An added bonus to PLUTO becoming public is that it can now be published and shared on the Internet. So we did it! We know that the full PLUTO dataset is quite large, so to help you jumpstart your explorations, we created a small data-service on CartoDB. You can read all about how you can query, filter, download or map data directly on top of our CartoDB service over on our documentation write-up. We actually built the above map gallery using the data service, so we know that there are a lot of possibilities here. To create the data service, we simply loaded all the PLUTO data into CartoDB and provided a few of the basic tables and visualizations so that you can hit the ground running. Take a look and let us know what you come up with! 
If you like our maps, give us a vote over on HackerNews. Have fun and happy open data mapping!
