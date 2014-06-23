---
layout: post
title: ST_GeomFromGeoJSON arriving to PostGIS
date: '2011-11-22T18:57:00+01:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/13163284142/st-geomfromgeojson-arriving-to-postgis
---
We, web developers, love JSON, so having a way to use GeoJSON on PostGIS it is kind of a no brainer. Well, thanks to Kashif Rasul, OpenGeo and a bit of financial help from Vizzuality, now we have it available!
So now you can finally do:
-

select st_astext(st_geomfromgeojson(‘{“type”:”Point”,”coordinates”:[1,1]}’));


-
The folks from OpenGeo wrote a blog post about it, and all we can say is that we are very happy with the great development consultancy on PostGIS provided by them. If you are doing something serious with PostGIS you should consider to hire them to implement core functionalities, promise they will do a great job.
For CartoDB this means that soon we will have much better ways to import GeoJSON and direct writing using it without 3th party libraries on your way.
We will hopefully incorporated soon on the free shared server so that everybody can use it, but if you want to start using it straight away, consider installing CartoDB yourself or renting one of our super-uber-great dedicated instances :)
