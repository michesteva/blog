---
title: 'DontFlush.me: Help keep your shit out of the harbor during storms'
date: '2011-11-14T18:32:05+01:00'
tags:
- cartodb
- ecohacknyc
- nycbigapps
- hack
- sciencehackday
- geo
- maps
- flush
---

In The last 2 weeks a lot of new applications have been developed at <a href="http://www.ecohacknyc.org/">#ecohacknyc</a>, <a href="http://2011.nycbigapps.com/">#nycbigapps</a> and <a href="http://sciencehackday.com/">#sciencehackday</a> using CartoDB, pretty excited. This demonstrates the power of CartoDB specially for fast development of location aware applications and mapping. We are gonna be highlighting different applications that make use of CartoDB on the next days. 

Today we want to talk about <a href="http://dontflush.me/ecohacknyc/">DontFlush.me</a>, in their own words:

- _Unprocessed sewage overflows into New York City waterways as often as once a week._
- _27 billion gallons of untreated sewage is dumped into NYC's Harbor every year._
- _Combined Sewer Overflows (CSOs) happen when the sewer system is overloaded by rainfall and snow._
- _Help keep your shit out of the harbor during storms._

<p><a href="http://dontflush.me/ecohacknyc/"><img width="640" src="http://cartodb.s3.amazonaws.com/tumblr/posts/dontflushme.png" align="middle"/></a></p>

During #ecohackNYC a group of talented people got together to develop an application that can show you where is your sewage going. They used CartoDB to host all the data and then with a simple SQL API call like this:

{% highlight sql %}
http://ecohack-nyc-03.cartodb.com/api/v1/sql?q=

SELECT DISTINCT(sheds.drainage_n), ST_AsGeoJSON(pol.the_geom) as polygon, ST_AsGeoJSON(poin.the_geom) as point_geom

FROM drain_areas_wgs84webmerc_nodupou as pol inner join cso_nyc_wgs84webmerc_latlon as poin on poin.item_id=pol.primary_ou, drainage_nyc_sewage_plant_sheds as sheds

WHERE ST_Intersects(pol.the_geom,ST_GeomFromText(‘POINT(-73.96212000000003 40.675573)’,4326)) AND (sheds.wpcp=poin.wpcp OR sheds.alt_name=poin.wpcp)
{% endhighlight %}

They get the polygon of your CSO are and where it ends up on the river. On top of that is all about bringing a nice UI and give contest to the issue.

Great job from Matt, Eric, Jeni, Liz, Jeff, Chris, Sheiva, Anna, Karen, Wendy and Carl. Congratulations!
