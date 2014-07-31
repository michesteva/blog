---
title: 'PLUTO is back! '
date: '2013-08-09T13:57:00+02:00'
tags:
- open data
- pluto
- data service
categories:
- 'New features'
redirect_from:
- "/post/57786792357/pluto-is-back/"
---

Sorry, that title was too fun not to use. In reality, we aren’t talking about the <a href="http://xkcd.com/473/">rejected non-planet</a>, we are talking about NYC’s latest open data release, the <a href="http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml">PLUTO dataset</a>. The PLUTO dataset contains land use and geographic data for tax lots across the five boroughs. That’s 850,000 polygons! While not being exactly building-by-building footprints, tax lots are now among the highest resolution geospatial data available from the NYC open data portal. 

<a href="http://andrewxhill.github.io/cartodb-examples/scroll-story/pluto/index.html"><img alt="image" src="http://i.imgur.com/QCsrWtl.png" width="637px"/></a>

The PLUTO dataset used to <a href="http://spatialityblog.com/2013/04/04/a-modest-proposal-for-nyc-tax-parcel-data/">cost each user $1,500</a> just to get a hold of, and once you had it you were pretty limited about how you could distribute it! So, the release of PLUTO has been a long-time coming. Our friends in the community have really worked hard to <a href="http://codeforamerica.org/2013/07/25/epic-win-for-nycs-open-data-community-pluto-is-free/">make this happen</a>. Congratulations all around! It is going to be really exciting to see what new information, technology, and ideas come from having this data available in the open. At the request of some of our friends at <a href="http://openplans.org/">OpenPlans</a>, we took a minute to try and get our heads around some interesting ideas that could be pulled from the dataset. We put together a map gallery to show off some of the data’s features and attributes,

<a href="http://andrewxhill.github.io/cartodb-examples/scroll-story/pluto/index.html"><img alt="image" src="http://i.imgur.com/N0HE2jt.png" width="637px"/></a>

Our goal in creating the gallery was to try and build a number of visualizations from just the single data source, something pretty easy to do using CartoDB’s dynamic map service. We found all sorts of treasures in the process. For example, we’ve never been able to make a <a href="http://andrewxhill.github.io/cartodb-examples/scroll-story/pluto/index.html#4">3D map of New York</a> easily and with so much detail before! We also thought of some great practical uses, like a free and open <a href="http://pluto.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20pluto_reverse_geocode(40.792276,-73.968219,3)">reverse geocoder</a>. But from there, we want to leave it up to you to go and find all uses and all the other datasets that need to be combined with PLUTO to gather interesting insights about our city. The challenge is on. 

An added bonus to PLUTO becoming public is that it can now be published and shared on the Internet. <a href="https://github.com/CartoDB/cartodb-pluto">So we did it</a>! We know that the full PLUTO dataset is quite large, so to help you jumpstart your explorations, we created a small data-service on CartoDB. <a href="https://github.com/CartoDB/cartodb-pluto">You can read all about</a> how you can query, filter, download or map data directly on top of our CartoDB service over on our documentation write-up. We actually built the above map gallery using the data service, so we know that there are a lot of possibilities here. To create the data service, we simply loaded all the PLUTO data into CartoDB and provided a few of the basic tables and visualizations so that you can hit the ground running. Take a look and let us know what you come up with! 

If you like our maps, give us a vote over on <a href="https://news.ycombinator.com/item?id=6183820">HackerNews</a>. Have fun and happy open data mapping!
