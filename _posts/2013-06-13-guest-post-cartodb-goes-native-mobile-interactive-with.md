---
layout: post
title: 'Guest Post: CartoDB Goes Native Mobile Interactive with Nutiteq''s Android
  SDK'
date: '2013-06-13T15:39:00+02:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/52866435750/guest-post-cartodb-goes-native-mobile-interactive-with
---
We are always working to improve CartoDB, so we’re thrilled when we find great partners to help us take the platform even further faster for our users. Today we’re excited to share a guest post from mobile mapping software leader Nutiteq, our newest partner. Welcome to greater mapping mobile interactivity.



Five steps for Android native app with CartoDB
Nutiteq 3D maps SDK for Android provides a quick and simple way to publish your CartoDB data to mobile devices as a native Android application.
Of course you can use the Cartodb javascript API with Leaflet or OpenLayers, which works nicely also, but sometimes you may want a bit of extra interactivity with map rotation/tilting and native performance. This is where Nutiteq SDK comes handy.
Basic Nutiteq SDK usage is given in tutorials in the wiki page. Here we assume that you know basic Android native app development and can build basic apps. To have map view with Nutiteq SDK is in fact simpler than with Google maps: no need to extend MapActivity or mess with API keys. Just follow these steps.
Prerequisites:

Android SDK and IDE. Android 2.2 would be minimum.
Nutiteq SDK jar (nutiteq-3d-sdk-2.1.0.jar) downloaded from the hellomap3d wiki page. This file must be put to project libs/ folder. Also make sure that you have Build Path > Export and selected “Android Private Libraries”.

1. Define your application main layout as res/layout/main.xml, so it has MapView element:
http://gist.github.com/jatorre/5773783
2. Now we can define MapView as member in your main activity class, load layout and load the MapView from layout. The MapView object is created now and has done basic initialization.
http://gist.github.com/jatorre/5773807
3. Configure MapView - the plain MapView object itself does not work right away. You must first complete these three steps at a minimum: (a) define map Components object, (b) define base map layer and finally (c) tell map object to start map activities (downloading threads etc).

http://gist.github.com/jatorre/5773824
After this, you can start the application on your phone and it should show the map.
4. Now it’s time to add CartoDB. We’ll start with the simpler method: show data from CartoDB as raster tiles. CartoDB map tile URL format for your tables is http://{account}.cartodb.com/tiles/{table_name}/{z}/{x}/{y}.png. Adding World Countries as overlay layer in Nutiteq SDK could be done by just adding two lines after startMapping():
http://gist.github.com/jatorre/5773840
Now when you restart the app, you should see overlay with half-transparent tiles. This is nice, but there is no real interactivity - information of objects etc. Luckily CartoDB has also vector API, so you can download real polygons to a device and render them there. With this you’ll get interactivity features.

5. Now let’s use SQL API of CartoDB to have vector data. For this we have created special layer CartoDbVectorLayer.java. Using this requires more code, as for vectors you need to define styling. We’ll define style for polygons here only, but in Nutiteq wiki you can see how to define line and point syles, as well as marker styles with labels (pop-up balloons).
http://gist.github.com/jatorre/5773850
As you can can see, the vector objects will be automatically clickable: click on polygon opens balloon with object data. Currently there is no much data to be shown, as just one field is in SQL what is requested. Feel free to check out CartoDbVectorLayer.java, there you can find also method which generates object Labels - tooltips what you get when you click on map
