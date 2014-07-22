---
title: 'Map of the Week: Doughnut Holes in international waters'
date: '2014-04-15T17:59:00+02:00'
tags:
- donutholes
- cartodb
- how-to
- guide
- examples
categories:
- 'Map of the week'
---

We welcome Dmitriy Skougarevskiy who is a doctoral candidate at <a href="http://graduateinstitute.ch/" target="_blank">The Graduate Institute of International and Development Studies</a> in this guest post to let him tell us about his pet project on the loopholes in the Law of the Sea, called <a href="http://donutholes.ch/">donutholes.ch</a>.

It all started with an International Law <a href="http://books.google.ch/books?id=ABVfvyi-8IAC">volume</a> where I glimpsed this illustration:

<img src="http://i.imgur.com/vfh7SBS.jpg" alt=""/>

_Source: Cook, Peter J., and Chris M. Carleton, eds. Continental Shelf Limits: The Scientific and Legal Interface. Oxford University Press, 2000, p. 317_

Simply put, the 1982 <a href="http://www.un.org/depts/los/convention_agreements/texts/unclos/closindx.htm">U.N. Convention on the Law of the Sea</a> established that an area stretching 200 nautical miles from a seashore is an Exclusive Economic Zone (EEZ) of the respective state. In practical terms, this convention is important as it grants the state an exclusive right to exploitation of marine life (think fishery) and natural resources (oil and gas).

But what if (a) littoral states are closer than 200 miles (how would they divide the sea?); (b) coastal shelf extends 200 n.m. from the coastline (when would the EEZ end?). An exciting legal loophole emerges when you combine these questions. The figure above shows two states with such seabed profile that area beyond 200 n.m. belongs to neither of them. Who owns this area then? International Law is unequivocal: this is international waters.

Such areas, shaped by nature and human convention, are known as ‘doughnut holes’. And they deserve to be mapped and explored: EEZ <a href="http://en.wikipedia.org/wiki/Exclusive_economic_zone">wiki page</a> does not illuminate the unique legal-geographical interface they create. Maps in law books are an improvement, but they are static and secondary to the legal reasoning. Luckily, we have CartoDB to tell the story. To make a powerful statement, I need my <a href="http://donutholes.ch/">interactive map</a> to focus on the sea rather than land, showing state borders most people have never seen before. Apparently, CartoDB.js + Mapbox can create quite involved in a series of simple steps.

### Bathymetry on base layer

Unless you are from the <a href="http://blog.cartodb.com/post/28058995348/the-political-moneyball">Wall Street Journal</a>, your map starts with a baselayer. CartoDB offers a selection, but they emphasize land rather than sea. I want my story to unravel in layers, so showing the ocean floor is crucial. Natural Earth provides a beautiful <a href="http://www.naturalearthdata.com/downloads/10m-raster-data/10m-ocean-bottom/">raster image</a>:

<img src="http://i.imgur.com/9Ao4iVU.jpg" alt=""/>

(this is the ocean bottom for the first image, in case you did not recognise it)

The easiest way to create your own baselayer for a CartoDB map is to use <a href="https://www.mapbox.com/tilemill/">TileMill</a>. With a bit of CartoCSS magic (the code is <a href="https://gist.github.com/memoryfull/10671783">available</a> on my GitHub) we get this:

<img src="http://i.imgur.com/50C2XYT.jpg" alt=""/>

I coloured the ocean, added continents and country borders. Also, I decided to add a touch of green to urban areas in countries. Note that I haven't added any labels yet - CartoDB will do it. The resulting raster was exported into tiles up to the sixth zoom level (taking 168MB) and uploaded to my Mapbox account. This way, your map tiles are now served from the cloud where CartoDB can access it. So I linked my CartoDB visualization to my Mapbox baselayer with the ‘add yours’ button:

<img src="http://i.imgur.com/vNSzf5m.png" alt=""/>

(note that now you will be charged both by Mapbox and CartoDB as the latter requests the former).

### Drawing EEZ polygons

The story is all about exclusive economic zones. Therefore, I need accurate and up-to date boundaries. The Flanders Marine Institute offers a very detailed <a href="http://www.marineregions.org/downloads.php">ESRI shapefile</a> that shows both the World EEZs as well as the disputed areas and joint regimes. It is very meticulous and large. Feeding CartoDB a 154MB shapefile will fail unless you have an enterprise account. I dissolved and simplified the polygons in <a href="http://www.qgis.org/">QGIS</a> and <a href="http://www.mapshaper.org/">mapshaper</a>, reducing the shapefile to 1.8MB. Importing this shapefile to CartoDB is a matter of dragging a zip file with your .dbf, .prj, .shp and .shx files into your Dashboard. Provided that you have an informative .dbf, the attribute table will be populated automatically.

The loaded shapefile and baselayer will give you this:

<img src="http://i.imgur.com/umL0Bqi.jpg" alt=""/>

Great, I can see the doughnut hole (and the Cuban EEZ), but the colors are all the same! CartoCSS comes to rescue. My attributes table has a ‘color’ column that ranges from 1 to 16. Each integer indicates a distinctive color that I manually assigned to each EEZ (<a href="http://en.wikipedia.org/wiki/Four_color_theorem">Four-colour theorem</a> won't work here because of the non-contiguous overseas territories). So assigning colours now is a matter of writing the conditional CartoCSS:

{ {% highlight css %}
#eez [zoom>=0]{
   opacity: 0.7;
   line-opacity: 0.4;
   line-color:#b8dee6;
   line-width:0.8;
   line-join:round;
   line-opacity:0.4;
}
#eez[color=1] {
   polygon-fill: #7B00B4;
}
 
#eez[color=2] {
   polygon-fill: #A6CEE3;
}
#eez[color=3] {
   polygon-fill: #CAB2D6;
}
...
{% endhighlight %}


However, a cursory look at the South China Sea reveals numerous disputed EEZs:

<img src="http://i.imgur.com/9n7BAxz.png" alt=""/><ref><small>Source: <a href="http://www.economist.com/blogs/banyan/2012/07/cambodias-foreign-relations">The Economist</a></small></ref>

How one should colour them? I chose to use stripes: if the dispute is between a yellow-color EEZ and an orange-color EEZ, the contested area will be filled with <img src="http://i.imgur.com/ylyTjYp.png" class="inline"/>. My CartoCSS would then specify:

 {% highlight css %}
 #eez[country="Australia / Papua New Guinea"] {
  polygon-pattern-file:url('img/australia_papua.png');
}
{% endhighlight %}

for each disputed area.

### Telling the story

Now that I have EEZs mapped on top of the seabed, it's time for doughnut holes to speak up. Each loophole has its own dramatic story to share, so I create a second layer in my visualization, which is linked to a simple attributes table:

<img src="http://i.imgur.com/4nRQKjg.png" alt=""/>

Each row is a donut hole with its point-wise location (the_geom), name, description and sources used in the description. I style a custom infowindow:

 {% highlight html %}
 <div class="cartodb-popup dark">
  <a href="#close" class="cartodb-popup-close-button close">x</a>
  <div class="cartodb-popup-content-wrapper">
    <div class="cartodb-popup-content">
      <h4>{{name}}</h4>
		<p>{{{description}}}</p>
		<p class="sources">Sources: {{{sources}}}</p>
    </div>
  </div>
  <div class="cartodb-popup-tip-container"></div>
</div>
{% endhighlight %}

Note the triple <a href="http://mustache.github.io/">mustache</a> in ‘{{{description}}}’ and ‘{{{sources}}}’. This will render the html tags in table cells: The resulting infowindow

<img src="http://i.imgur.com/qwZ8qVA.png" alt=""/>

If you use the double mustache, all the tags will appear as plaintext in the infowindow.

### Interactivity

The user should always know the EEZ sovereignty. Javi Santana developed a nice <a href="https://gist.github.com/javisantana/8313604">geometryhover()</a> function I'm using to display sovereign name on hover and emphasize the borders:

<img src="http://i.imgur.com/yxLYCJn.png" alt=""/>

Some would also love to explore the complex ocean floor that shapes the doughnut holes. This can be done by setting the #eez [zoom&gt;=0]{polygon-opacity: 0;} on button click. With <a href="https://jqueryui.com/">jQuery UI</a>, it goes along these lines:

 {% highlight css %}
 $('#colorpoly').bind('change', function(){
	if($(this).is(':checked')){
		// "color polygons" box was checked
		layer.getSubLayer(0).setCartoCSS('#eez [zoom>=0]{ opacity: 0.7; }');
	}
	else {
		layer.getSubLayer(0).setCartoCSS('#eez [zoom>=0]{ polygon-opacity: 0;}');
	}
});	
{% endhighlight %}

This code uses <a href="http://developers.cartodb.com/documentation/cartodb-js.html#sec-3-28">setCartoCSS()</a> from CartoDB.js to style the polygons with a given CSS.
Finally, the impatient few might want to jump from one doughnut hole to another, so I provide the list:

 {% highlight css %}
 <ul>
	<li><a href="#" class="donutholes">Gulf of Mexico</a></li>
	<li><a href="#" class="donutholes">Barents Sea</a></li>
	<li><a href="#" class="donutholes">Bering Sea</a></li>
	<li><a href="#" class="donutholes">Philippine Sea</a></li>
	<li><a href="#" class="donutholes">Sea of Okhotsk</a></li>
</ul>
{% endhighlight %}

Clicking on each item will zoom the map there with the aid of the following jQuery UI + CartoDB.js:

 {% highlight sql %}
 $(".donutholes").click(function(e) {
	// Get the name of the clicked hole
		var donuthole = event.target.text;
		sql.getBounds("select * From donutholes where name Like '" + donuthole + "'").done(function(bounds) {
		// Extend the pointwise bounds by 10 degrees to enjoy higher zoom level when zooming to feature
			var p1 = bounds[0][0] - 10;
			var p2 = bounds[0][1] - 10;
			var p3 = bounds[1][0] + 10;
			var p4 = bounds[1][1] + 10;
			map.fitBounds([[p1,p2],[p3,p4]]);
		});          
});
{% endhighlight %}

We've come a long way from a paper map to an interactive web application you can explore at <a href="http://donutholes.ch">http://donutholes.ch</a>.
