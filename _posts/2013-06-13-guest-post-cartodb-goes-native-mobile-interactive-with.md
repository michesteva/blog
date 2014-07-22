---
title: 'Guest Post: CartoDB Goes Native Mobile Interactive with Nutiteq''s Android
  SDK'
date: '2013-06-13T15:39:00+02:00'
categories:
- 'How-to guides'
---

We are always working to improve CartoDB, so we’re thrilled when we find great partners to help us take the platform even further faster for our users. Today we’re excited to share a guest post from mobile mapping software leader <a href="http://www.nutiteq.com/">Nutiteq</a>, our newest partner. Welcome to greater mapping mobile interactivity.

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/nutiteq.png"/>

**Five steps for Android native app with CartoDB**

Nutiteq 3D maps SDK for Android provides a quick and simple way to publish your CartoDB data to mobile devices as a native Android application.

Of course you can use the Cartodb javascript API with Leaflet or OpenLayers, which works nicely also, but sometimes you may want a bit of extra interactivity with map rotation/tilting and native performance. This is where Nutiteq SDK comes handy.

Basic Nutiteq SDK usage is given in tutorials in the <a href="https://github.com/nutiteq/hellomap3d/wiki">wiki page</a>. Here we assume that you know basic Android native app development and can build basic apps. To have map view with Nutiteq SDK is in fact simpler than with Google maps: no need to extend MapActivity or mess with API keys. Just follow these steps.

Prerequisites:

- Android SDK and IDE. Android 2.2 would be minimum.
- Nutiteq SDK jar (nutiteq-3d-sdk-2.1.0.jar) downloaded from the hellomap3d wiki page. This file must be put to project libs/ folder. Also make sure that you have Build Path &gt; Export and selected "Android Private Libraries".

**1. Define your application main layout as res/layout/main.xml, so it has MapView element:**

 {% highlight xml %}
 <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >
   <com.nutiteq.MapView
    android:id="@+id/mapView"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    />
</LinearLayout>
{% endhighlight %}


**2. Now we can define MapView** as member in your main activity class, load layout and load the MapView from layout. The MapView object is created now and has done basic initialization.

 {% highlight java %}
 public class HelloMap3DActivity extends Activity {
 
    private MapView mapView;
 
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        mapView = (MapView) findViewById(R.id.mapView);
     // now start init of MapView, see below...
}
{% endhighlight %}


**3. Configure MapView** the plain MapView object itself does not work right away. You must first complete these three steps at a minimum: (a) define map Components object, (b) define base map layer and finally (c) tell map object to start map activities (downloading threads etc).

 {% highlight java %}
 // define new configuration holder object
mapView.setComponents(new Components());
 
// Define base layer. Here we use MapQuest open tiles which are free to use
// Note that almost all online maps use EPSG3857 projection, but Nutiteq SDK supports also other projections if needed
 
TMSMapLayer mapLayer = new TMSMapLayer(new EPSG3857(), 0, 18, 0,
     "http://otile1.mqcdn.com/tiles/1.0.0/osm/", "/", ".png");
mapView.getLayers().setBaseLayer(mapLayer);
 
// start mapping
mapView.startMapping();
{% endhighlight %}


After this, you can start the application on your phone and it should show the map.

**4. Now it's time to add CartoDB** We'll start with the simpler method: show data from CartoDB as raster tiles. CartoDB map tile URL format for your tables is http://{account}.<a href="http://cartodb.com/tiles/%7Btable_name%7D/%7Bz%7D/%7Bx%7D/%7By%7D.png">cartodb.com/tiles/{table_name}/{z}/{x}/{y}.png</a>. Adding World Countries as overlay layer in Nutiteq SDK could be done by just adding two lines after startMapping():

 {% highlight java %}
 TMSMapLayer cartoDbTileLayer = new TMSMapLayer(new EPSG3857(), 0, 18,  15,
 
  ”http://nutiteq.cartodb.com/tiles/tm_world_borders/”, “/”, “.png”);
 
mapView.getLayers().addLayer(cartoDbTileLayer);
{% endhighlight %}


Now when you restart the app, you should see overlay with half-transparent tiles. This is nice, but there is no real interactivity - information of objects etc. Luckily CartoDB has also vector API, so you can download real polygons to a device and render them there. With this you'll get interactivity features.

**5. Now let's use SQL API of CartoDB to have vector data**. For this we have created special layer CartoDbVectorLayer.java. Using this requires more code, as for vectors you need to define styling. We'll define style for polygons here only, but in Nutiteq wiki you can see how to define line and point syles, as well as marker styles with labels (pop-up balloons).

 {% highlight java %}
 LineStyle lineStyle = LineStyle.builder().setWidth(0.05f).setColor(Color.WHITE).build(); 
PolygonStyle polygonStyle = PolygonStyle.builder().setColor(0xFFFF6600 & 0x80FFFFFF).setLineStyle(lineStyle).build();
StyleSet<PolygonStyle> polygonStyleSet = new StyleSet<PolygonStyle>(polygonStyle);

// note the SQL has special string !bbox! as bounding box dynamic value placeholder
String sql = "SELECT name,iso2,pop2005,area,the_geom_webmercator FROM tm_world_borders WHERE the_geom_webmercator && ST_SetSRID('BOX3D(!bbox!)'::box3d, 3857) LIMIT 3000"; 

CartoDbVectorLayer cartoLayer = new CartoDbVectorLayer(new EPSG3857(), "nutiteq", sql, null, null, polygonStyleSet);
mapView.getLayers().addLayer(cartoLayer);
{% endhighlight %}


As you can can see, the vector objects will be automatically clickable: click on polygon opens balloon with object data. Currently there is no much data to be shown, as just one field is in SQL what is requested. Feel free to check out CartoDbVectorLayer.java, there you can find also method which generates object Labels - tooltips what you get when you click on map

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/cartodb_vector.jpg"/>
