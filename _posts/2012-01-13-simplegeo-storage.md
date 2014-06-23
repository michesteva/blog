---
layout: post
title: 'Migrating from SimpleGeo Storage to CartoDB '
date: '2012-01-13T20:40:00+01:00'
tags:
- simplegeo
- cartodb
- storage
- open source
tumblr_url: http://blog.cartodb.com/post/15785190161/simplegeo-storage
---
Yesterday it was announce that SimpleGeo, now bought by Urban Airship, will stop their operations. They have published a document explaining how to migrate to some alternative services, and they recommend PostGIS as an Open Source solution for their storage option. 
Simplegeo also propose the use of Google Fusion Tables and Geocommons, which are not Open Source. The curious thing about what happened to SimpleGeo is that it is a great use case why Open Source is a much better solution for managing your data or to build your applications. If their platform would had been Open Source now it would be possible to continue the service on your own.
Another reason for choosing Open Source is changes on the terms and conditions of cloud solutions. Look for example at this use case where StreetEasy is saving massive amounts of money by moving out from Google Maps to an Open Source solution, Mapbox, while earning lot of freedom.
But what happens to SimpleoGeo storage users now? Well, we want to help a bit by providing an easy way to move from SimpleGeo to CartoDB, or to anything else. Aditionally you will find how you would do the same queries you are used to in SimpleGeo APIs now in CartoDB and PostGIS.
Bathrooms in NYC
Some time ago I loaded a dataset of public bathrooms in NY to SG Storage. It looks like this.

Exporting the data from SimpleGeo Storage to CSV
Unfortunately there is no easy way to just download the data from the UI and neither there is from the API. So I programmed a little Ruby script that uses the SimpleGeo official Ruby library to load all the data from a particular layer and exports it to a CSV.
Find it here in Github.
(update: Here is another version that will download all layers in your account)
The tool is very easy to use. Install all dependencies for Ruby, modify the auth parameters and write the name of the layer you want to export. Once you are done you just have to run the script (ruby readdata.rb) and you will get your CSV.

The good thing about it is that now you can choose to move your data to any service which supports CSV.
If you are curious about how the tool works read the code, is dead simple, but it uses a trick. The storage API does not allow for retrieval of all records of a layer, so we do a query with a bounding box of the whole world and paginate the results. Which means that if you have data that is not georeferenced then it will not be dumped.
Moving to CartoDB
Next step is loading the data in CartoDB. Check out this screencast about how to load data in CartoDB. It is as easy as drag and drop.

After that you will see that all your data is loaded in CartoDB and you can start doing complex queries and filters to it. You have the full power of PostgreSQL and PostGIS, not just a simple query language.

Using the API
Now let say you want to perform API queries like Querying Nearby Records in SimpleoGeo Storage. It is easy, you can use the full power of PostGIS, which means you can do much more complicate geospatial queries like this, with polygons, raster and many more things. But to keep it simple here the same functionality that was given by SimpleGeo API:
http://vizzuality.cartodb.com/api/v1/sql?q=
SELECT * FROM (SELECT lat,lon,name, 
ST_Distance(ST_SetSRID(ST_MakePoint(-73.9967,40.724805),4326)::geography,the_geom::geography) as distance_meters 
FROM com_vizzuality_nycbathrooms) as q WHERE distance_meters < 1500
In this query we are selecting bathrooms that are closer than 1,500 meters to a particular point, and we are getting the distance too. This could make for a very typical mobile app :) The SQL might look weird at the beginning, but once you learn the power of PostGIS you will love it. We also have an example gallery for you to find more example queries.
Run this query yourself
You will get something like this in JSON (there is also KML, GeoJSON and many more formats)

Visualizing the data
Of course CartoDB can also be used to visualize your data in a great way. For example doing some conditional mapping like following. Choropleths, heatmaps, gridmaps, heximaps, etc are all coming very soon.


Conclusion
Well, I hope this post will help some people with the transition from SimpleGeo Storage service to other services. And if they also get the idea that Open Source is just better for your data, then staying this late at the office on Friday would had been worth :)
If you have any questions please contact us at support.cartodb.com or via twitter @cartodb
(being this late in Madrid I am not reviewing the article so sorry for the errors in my english, wrong links or whatever)
