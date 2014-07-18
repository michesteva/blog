---
title: ST_GeomFromGeoJSON arriving to PostGIS
date: '2011-11-22T18:57:00+01:00'
---

We, web developers, love JSON, so having a way to use <a href="http://geojson.org/">GeoJSON</a> on PostGIS it is kind of a no brainer. Well, thanks to <a href="https://twitter.com/#!/krasul">Kashif Rasul</a>, <a href="http://opengeo.org/">OpenGeo</a> and a bit of financial help from <a href="http://www.vizzuality.com/">Vizzuality</a>, now we have it available!

So now you can finally do:

{% highlight sql %}
select st_astext(st_geomfromgeojson(‘{“type”:”Point”,”coordinates”:[1,1]}’));
{% endhighlight %}

The folks from OpenGeo <a href="http://blog.opengeo.org/2011/11/21/st_geomfromgeojson/">wrote a blog post about it</a>, and all we can say is that we are very happy with the great development consultancy on PostGIS provided by them. If you are doing something serious with PostGIS you should consider to hire them to implement core functionalities, promise they will do a great job.

For CartoDB this means that soon we will have much better ways to import GeoJSON and direct writing using it without 3th party libraries on your way.

We will hopefully incorporated soon on the free shared server so that everybody can use it, but if you want to start using it straight away, consider installing CartoDB yourself or <a href="http://cartodb.com/pricing">renting one of our super-uber-great dedicated</a> instances :)
