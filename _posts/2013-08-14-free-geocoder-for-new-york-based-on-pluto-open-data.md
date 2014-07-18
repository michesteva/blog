---
title: 'Free Geocoder for New York based on PLUTO Open Data '
date: '2013-08-14T17:48:00+02:00'
tags:
- PLUTO
- data
- data service
- geocoder
- nyc
---

<img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/flatiron-1.jpg" width="637px"/>

On July 25th New York City Department of City Planning liberated PLUTO and mapPLUTO as Open Data. We have already <a href="http://blog.cartodb.com/post/57786792357/pluto-is-back">talked about it</a> and our friends from Code For America have <a href="http://codeforamerica.org/2013/07/25/epic-win-for-nycs-open-data-community-pluto-is-free/">written about what an EPIC win</a> this is for the open data community.

In this post we want to highlight a cool use-case for this newly opened data. The PLUTO dataset contains tax lot geometries for all the five boroughs of NYC and metadata information for each lot, stuff like, address, owner, size, etc. These small pieces of information allowed us to create the first PLUTO Open Geocoder for NYC. The geocoder is built entirely on open source data and open source tools. CartoDB allowed us to quickly <a href="https://github.com/CartoDB/cartodb-pluto">import the PLUTO dataset</a> and use the <a href="http://developers.cartodb.com/documentation/sql-api.html">SQL API</a> to perform geospatial operations that run with blazing speed.

As a start we are only providing a basic reverse geocoder. A reverse geocoder takes a defined latitude and longitude return the street and building number closest to that location. 

Give this example a try by clicking anywhere in Manhattan and getting back the physical address,

<a href="http://dl.dropboxusercontent.com/u/580074/reverse_geocoder/leaflet_pluto_reverse_geocoder.html"><img alt="image" src="http://i.imgur.com/W6jWnjC.png" width="637"/></a>

**Geocoder as a service**

The above example answers the question, _What is the address of Latitude 40.719425 and Longitude-73.999863?_

Perhaps you want to know a ranked list of the closet addresses. Using the PLUTO data service we setup, you can run a query over HTTP to get the closest 3 addresses to a location (click the SQL to run it live),

<a href="http://pluto.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20pluto_reverse_geocode(40.719425,-73.999863,50)">SELECT * FROM pluto_reverse_geocode(40.719425,-73.999863,50)</a>

**How does this work?**

We have loaded all the PLUTO data into a CartoDB table, _nyc_mappluto_13v1_. To simplify the process of reverse geocoding,  we have created a function called pluto_reverse_geocode.

{% gist andrewxhill/6232460 %}

For SQL aficionados, the function includes an interesting query since it makes use of the super fast <a href="http://blog.opengeo.org/2011/09/28/indexed-nearest-neighbour-search-in-postgis/">Indexed Nearest </a><a href="http://blog.opengeo.org/2011/09/28/indexed-nearest-neighbour-search-in-postgis/">Neighbor</a> search operator, **_&lt;-&gt;_**. That operator allow us to query 850,000 polygons and return responses in less than 5ms. Pretty awesome.

If you look at the query, we are doing a CTE to filter the data and thus increase the performance quite a bit. What the query does is it finds 20 unranked candidates that are close to the coordinates provided and then, only on those 20 candidates, it calculates the real distance to sort them. Finally, the query only return the closest three results with a rank and measured distance. If we were to calculate the real distance for all the buildings in NYC the query would take upwards of 1.5 seconds, with this method the query often finishes in around 0.003 seconds.

**Service free for anybody to use.** 

We will not charge for using the geocoder so if you want to run queries against it feel free! This is something we put together out of curiosity and an interest in the use of open data. In the future we hope to expand it with a few more useful functions for your mapping applications.

The service only has data for NYC, sorry New Jersey"

If you have other cool ideas on how to use PLUTO, just let us know on the CartoDB mailing list or shoot us a message on Twitter!

Happy free + open geocoding NYC!

_Header image by Enrico Donelli (<a href="http://bit.ly/18uZLQu">http://bit.ly/18uZLQu</a>)_
