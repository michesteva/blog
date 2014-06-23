---
layout: post
title: 'Free Geocoder for New York based on PLUTO Open Data '
date: '2013-08-14T17:48:00+02:00'
tags:
- PLUTO
- data
- data service
- geocoder
- nyc
tumblr_url: http://blog.cartodb.com/post/58247530913/free-geocoder-for-new-york-based-on-pluto-open-data
---

On July 25th New York City Department of City Planning liberated PLUTO and mapPLUTO as Open Data. We have already talked about it and our friends from Code For America have written about what an EPIC win this is for the open data community.
In this post we want to highlight a cool use-case for this newly opened data. The PLUTO dataset contains tax lot geometries for all the five boroughs of NYC and metadata information for each lot, stuff like, address, owner, size, etc. These small pieces of information allowed us to create the first PLUTO Open Geocoder for NYC. The geocoder is built entirely on open source data and open source tools. CartoDB allowed us to quickly import the PLUTO dataset and use the SQL API to perform geospatial operations that run with blazing speed.
As a start we are only providing a basic reverse geocoder. A reverse geocoder takes a defined latitude and longitude return the street and building number closest to that location. 
Give this example a try by clicking anywhere in Manhattan and getting back the physical address,

Geocoder as a service
The above example answers the question, What is the address of Latitude 40.719425 and Longitude-73.999863?
Perhaps you want to know a ranked list of the closet addresses. Using the PLUTO data service we setup, you can run a query over HTTP to get the closest 3 addresses to a location (click the SQL to run it live),
SELECT * FROM pluto_reverse_geocode(40.719425,-73.999863,50)
How does this work?
We have loaded all the PLUTO data into a CartoDB table, nyc_mappluto_13v1. To simplify the process of reverse geocoding,  we have created a function called pluto_reverse_geocode.
https://gist.github.com/andrewxhill/6232460
For SQL aficionados, the function includes an interesting query since it makes use of the super fast Indexed Nearest Neighbor search operator, <->. That operator allow us to query 850,000 polygons and return responses in less than 5ms. Pretty awesome.
If you look at the query, we are doing a CTE to filter the data and thus increase the performance quite a bit. What the query does is it finds 20 unranked candidates that are close to the coordinates provided and then, only on those 20 candidates, it calculates the real distance to sort them. Finally, the query only return the closest three results with a rank and measured distance. If we were to calculate the real distance for all the buildings in NYC the query would take upwards of 1.5 seconds, with this method the query often finishes in around 0.003 seconds.
Service free for anybody to use. 
We will not charge for using the geocoder so if you want to run queries against it feel free! This is something we put together out of curiosity and an interest in the use of open data. In the future we hope to expand it with a few more useful functions for your mapping applications.
The service only has data for NYC, sorry New Jersey…
If you have other cool ideas on how to use PLUTO, just let us know on the CartoDB mailing list or shoot us a message on Twitter!
Happy free + open geocoding NYC!
Header image by Enrico Donelli (http://bit.ly/18uZLQu)
