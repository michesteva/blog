---
title: Easier authentication and new visualizations
date: '2012-05-07T22:30:00+02:00'
tags:
- API
- cartodb
- release
- OpenStreetMaps
categories:
- 'New features'
redirect_from:
- "/post/22603531637/easier-authentication-and-new-visualizations/"
---

<iframe frameborder="0" height="300" src="http://cartodb.s3.amazonaws.com/examples/hexagon/index.html" width="630"></iframe>

We've just released a boatload of performance fixes, bug fixes and new features into CartoDB, along with a few toys"
The performance and bug fixes mean you'll have a much swifter dashboard experience (especially with large datasets), shorter waits when importing shapefiles, faster map tile generation and better speeds for your published maps.

We know (believe us, we know") that OAuth is not the right choice for all applications. This is why we're really happy to release simple key based authentication for our SQL-API. Simple API key based auth allows full SQL read/write access on public and private tables to CartoDB from the command line or browser, which is ultra handy when you are developing.

The API key auth is targeted at apps that use CartoDB as a geospatial backend, trusted internal applications, or for those of us who love writing simple, hacky scripts to generate a map for all.  You can find your Simple API key in "Your API Keys" inside CartoDB, or learn more about how you can use the SQL-API to build Geospatial applications <a href="http://developers.cartodb.com/documentation/cartodb-apis.html#sql_api">here</a>.

Onto the toys". If you've seen our <a href="http://vizzuality.com/projects/carboncalculator">Carbon Calculator</a> project you'll know that we're big fans of hexagon tessellation maps. Used in the correct situation you can create very easy to digest choropleths, with a nod towards heat mapping. We developed a new function to create this kind of maps with ease.

As a fun demo that actually has a little bit of use we used the new hexagon binning functionality to display <a href="http://dl.dropbox.com/u/193220/CartoDB/hexagon/planet.html">ATM density</a> within OpenStreetMap data (about 160,000 points). Check the map above. Techniques such as hexbinning can quickly give you an impression of data density when initially digging into a new dataset, or can draw out fresh insights from large datasets.

This is the query used to build the map:

{% highlight sql %}
WITH hgrid AS (SELECT CDB_HexagonGrid(ST_Expand(CDB_XYZ_Extent({x},{y},{z}),CDB_XYZ_Resolution({z}) * ({z}+1)),CDB_XYZ_Resolution({z}) * ({z}+1)) as cell) SELECT hgrid.cell as the_geom_webmercator, count(i.cartodb_id) as prop_count FROM hgrid, osm_atm i WHERE ST_Intersects(hgrid.cell, i.the_geom_webmercator) GROUP BY hgrid.cell
{% endhighlight %}

Join our <a href="https://groups.google.com/forum/?fromgroups#!forum/cartodb">mailing list</a> if you want more info on this or other CartoDB topics. The mailing list is also a great place to share your suggestions for improvements to CartoDB. 

Have fun!
