---
title: 'A Picture is Worth 1,000 Attributes: Infowindows with Google Street View Images'
date: '2014-04-28T15:12:00+02:00'
tags:
- street view
- infowindow
- trees
- NYC
- maps
- pictures
categories:
- 'New features'
---

Google Street View is a fantastic <a href="https://www.google.com/maps/views/streetview?gl=us">Google technology</a> that provides panoramic views of many streets worldwide.  The service has some really curious pictures, and everybody loves using it to look for a restaurant or a museum. It kind of provides the last meter from map to actual object.

It also features a very <a href="https://developers.google.com/maps/documentation/streetview/">simple-to-use API </a>that allows you to get a panoramic directly from the service, using latitude and longitude. In this blog post we would like to show you how to use it on CartoDB. First of all, this connection will work well for city datasets and for cases when you have some precise coordinates of the locations you are looking for. For example take a look at this map:

<a href="https://jatorre-cloud.cartodb.com/viz/b1c9b94c-cd3a-11e3-9e3c-0e10bcd91c2b/public_map"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/streetview1.png"/></a>

We are generating a map of the trees downed by Hurricane Sandy (October 2012). For each tree we have a precise point with a location. Wouldn’t it be great to see if there were trees then? This is a perfect case for Google Street View Integration.

**How to do it:**

On the SQL view of my tree table I wrote this SQL: 

 {% highlight sql %}
 SELECT *,
'http://maps.googleapis.com/maps/api/streetview?size=300x190&location='||
ST_Y((the_geom))||','||ST_X((the_geom))
||'&sensor=false&fov=110' as image 
FROM table_2012_entire_tree_down_complaints_sandy
{% endhighlight %}

Like you can see here:

<img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/streetview2.png"/>

This SQL is basically just adding a new column to my table, constructing a link to an image from Google Street View as defined by their API.  That link requires you to provide a latitude and longitude, and we do so using the functions ST_X, ST_Y to obtain the latitude and longitude from the geometry. You could also use the latitude and longitude columns if you have them. Additionally, if you want to display a random location with it using the ST_PointInSurface function, for example, you can do so if you have polygons.

With that SQL on our visualization we can proceed and style the infowindow. You will use a predefined template for the images we provide, although you can always create your own HTML. Add the image column to the top, and voilà! You have a Google Street View image on your infowindow.

<img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/streetview3.png"/> 

There are several options you can define using the Street View API, like the pitch and other things. You could also use an address directly instead of the latitude/longitude if you have that, for example for house façades. 

We hope you like it, and invite you to let us about any other cool integration you can think up with CartoDB.
