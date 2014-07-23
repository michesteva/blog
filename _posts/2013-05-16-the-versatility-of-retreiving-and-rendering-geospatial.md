---
title: The versatility of retreiving and rendering geospatial data with CartoDB
date: '2013-05-16T11:15:00+02:00'
categories:
- 'How-to guides'
---

We have been discussing a lot lately how we can summarize CartoDB in a short and sweet sentence. A lot of adjectives have been tested. One of the options we have liked the most is, CartoDB allows you to render your data on a map. As simple as the phrase sounds, it packs a lot of meaning. Let us explain"

### How CartoDB serves geospatial data, the common

At its core, CartoDB gets the data from a database and renders it to <a href="http://wiki.openstreetmap.org/wiki/Tiles" title="Tiles at wikipedia" target="_blank">tiles</a>. Tiles are a clever solution where images of data instead of complete datasets are transferred over the internet, saving a lot of bandwidth. They also are created on a regular grid that makes them perfect for caching. Once delivered to the browser, those tiles are rendered by any client side API of your liking (e.g. Leaflet, Google Maps, OpenLayers, ModestMaps). Besides being a clever solution to displaying large-scale data on the web, rendering tiles is fast and compatible with old browsers and mobile devices.

Tiles are not a magic bullet for maps on the web. Most obviously, when we don't have a lot of data there isn’t much gain from tiles versus sending the real data itself. For example, if you need to render 100 points, you will need 100*4*2 (4 bytes per float, latitude and longitude), 800 bytes. It is very likely that the tile or tiles you would need to render these points would take much more than 800 bytes. You also get all the benefits of dynamically changing your data (e.g. adding, removing, or moving points) and you can add things like hover effects that can not be done with tiles alone.

Luckily, **CartoDB is way more than just tiles**.

### How CartoDB serves geospatial data, the non-tile way

CartoDB has a nice API to access to the data, the <a href="http://developers.cartodb.com/documentation/cartodb-apis.html#sql_api" title="CartoDB SQL API" target="_blank">SQL API</a>. It takes a SQL statement and returns the resulting data. You could use it for simple things like, get the points in your table, to <a href="https://github.com/CartoDB/torque/blob/master/src/grid_layer.js#L204" title="Torque snippet" target="_blank">complex things</a> like we do with <a href="http://mwcimpact.com" title="Mwc Impact" target="_blank">Torque</a>. Torque is built around the idea that a powerful SQL function can be run to turn any CartoDB table with temporal geometry into a moving visualization in the browser. That can’t be done with tiles.

The SQL API also gives developers a few options for data formats, those include a flat JSON format, TopoJSON and GeoJSON. The GeoJSON format is meant for us mappers, it allows you to transfer geographic information (including metadata) using JSON as container, but in a predictable schema that many of your client side mapping libraries already know. Sounds good, eh?

Getting the data from your cartodb account to your JavaScript application can be done really easily using <a href="http://github.com/cartodb/cartodb.js" title="CartoDB js" target="_blank">CartoDB.js</a>. Here is an example of the JavaScript API:

{% highlight javascript %}
var sql = new cartodb.SQL({ user: 'examples', format: 'geojson' });
sql.execute("SELECT * FROM table").done(function(geojson) {
  console.log("here is the geojson", geojson);
});
{% endhighlight %}

### Rendering vector data using Leaflet

Using Leaflet as an example, we render that GeoJSON data on our map with just two more lines of code:

{% highlight javascript %}
var sql = new cartodb.SQL({ user: 'examples', format: 'geojson' });

// create the layer and add to the map, then will be filled with data
var countriesLayer = L.geoJson().addTo(map);
sql.execute("SELECT * FROM european_countries_e").done(function(geojson) {
  countriesLayer.addData(geojson);
});
{% endhighlight %}

You can see it running <a href="http://cartodb.github.io/cartodb.js/examples/leaflet_vector.html" title="Leaflet vector example" target="_blank">here</a>.

<iframe frameborder="0" height="300px" src="http://cartodb.github.io/cartodb.js/examples/leaflet_vector.html" width="100%"></iframe>

### Rendering vector data using Google Maps

Google Maps does not support GeoJSON natively but there is a library that fills the void, <a href="https://github.com/JasonSanford/GeoJSON-to-Google-Maps" title="GeoJSON to Google Maps" target="_blank">GeoJSON-to-Google-Maps</a>. The library works in a different way than Leaflet and takes a few more lines of code. You can see a simple example with source code <a href="http://cartodb.github.io/cartodb.js/examples/gmaps_vector.html" title="Gmaps vector example" target="_blank">here</a>.

### CartoDB is built for your dynamic data

Okay, that was fun but the best thing is yet to come. CartoDB is a dynamic service and that means you have some powerful flexibility in how you retrieve your data for the web. You could execute queries to only get a subset of your data. Or you could query for only the latests data inserted into your tables. You could optimize your maps by changing the quality of the data depending the device your viewers are using. Or you could animate your data if it is linestrings or points with timestamps. This is where the SQL API really gets powerful.

### Filtering the data

Imagine you want to get the countries of a particular size, say 1,000,000 Sq Km. Here, we’ll use the SQL API with a little bit of geospatial filtering (ST_Area is going to return meters, so we divide by 1 Sq Km):

{% highlight javascript %}
sql.execute("SELECT * FROM european_countries_e WHERE ST_Area(the_geom::geography)/1000000 > {{area}}", { area: 1000000 }).done(function(geojson) {
  countriesLayer.addData(geojson);
});
{% endhighlight %}

Here, we can query for only the points close to known location, specifically the wifi hotspots nearest a viewer.

See the <a href="http://cartodb.github.io/cartodb.js/examples/leaflet_vector_query_distance.html" title="leaflet custom point markers example" target="_blank">complete example with custom point markers</a>.

(Click anywhere in Manhattan below to see the closest WiFi locations)

<iframe frameborder="0" height="300px" src="http://cartodb.github.io/cartodb.js/examples/leaflet_vector_query_distance.html" width="100%"></iframe>

### Simplify geometries

Sometimes geometries, such as country borders, are really complex, meaning they also make for large files to transfer over the web. We can fix this easily with CartoDB and on-demand geometry simplification over the SQL API:

{% highlight javascript %}
sql.execute("select ST_Simplify(the_geom, 2) as the_geom from european_countries_e").done(function(geojson) {
  countriesLayer.addData(geojson);
});
{% endhighlight %}

This can be really useful for developing mobile applications, where data transferred is a very important consideration.

### Hover effects

Now that we are rendering data directly in the browser, hover effects are as simple as changing the style of the target:

{% highlight javascript %}
sql.execute("select cartodb_id, area, ST_Simplify(the_geom, 0.1) as the_geom from european_countries_e").done(function(geojson) {
  countriesLayer.addData(geojson);
  countriesLayer.on('mouseover', function(e) {
    e.layer.setStyle({
    weight: 3,
    opacity: 1
  });
});
countriesLayer.on('mouseout', function(e) {
  countriesLayer.resetStyle(e.layer);
});
{% endhighlight %}

See the <a href="http://cartodb.github.io/cartodb.js/examples/leaflet_vector_hover.html" title="Leaflet hover example" target="_blank">hover example</a> for a full example.

<iframe frameborder="0" height="300px" src="http://cartodb.github.io/cartodb.js/examples/leaflet_vector_hover.html" width="100%"></iframe>

### Advanced usage

Apart of these simple examples you can go a lot further and do animations, add effects using D3, draw on canvas, or integrate your geospatial data with other web technologies. For inspiration, take a look at this <a href="http://vizzuality.github.io/HTML5-experiments/earthquakes/index.html#2/0.0/41.4" title="Earthquakes visualization" target="_blank">animated visualization</a> showing the earthquakes using D3 or <a href="https://github.com/CartoDB/torque" title="Torque library" target="_blank">Torque</a>, our library to create animations using canvas.

### Conclusions

Now you’ve seen how CartoDB can dynamically filter data based on user actions and can provide vector layers to display right on Leaflet and Google Maps.  This is one of the key advantages of CartoDB, it allows you to show your dynamic data. Not only based on changes to your request, but as soon as you add or update data in your table, you will see it <a href="http://cartodb.com/realtime" title="Realtime at CartoDB" target="_blank">realtime</a> on the map. This is true whether you choose to to use vector data or tiles! And not even that, CartoDB provides all the infraestructure to support millions of map views, see <a href="http://blog.cartodb.com/post/49435864561/erepublik-brings-cartodbs-dynamic-mapping-to-online" title="eRepublic post at CartoDB" target="_blank">eRepublik's dynamic maps use case</a>.

If you have ever been curious about why you would choose CartoDB, we hope this helps you make the decision!
