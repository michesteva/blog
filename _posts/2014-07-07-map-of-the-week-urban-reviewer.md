---
title: 'Map Of The Week: Urban Reviewer'
date: '2014-07-07T12:18:53+02:00'
categories:
- 'Map of the Week'
---

Welcome <a href="https://twitter.com/ebrelsford">Eric Brelsford</a> to our Map of the Week series. Brelsford is a freelance programmer, mapmaker, and teacher. He spends much of his time working on <a href="http://596acres.org">596 Acres</a> and related sites in Brooklyn, NY.

Brelsford, as part of 596 Acres, has joined forces with Partner &amp; Partners and SmartSign to create an online map showing over 150 master plans for neighborhoods adopted by the City of New York. The process covered the follow up on a Freedom of Information Law request for the records and the translation of paper plans into machine-readable spreadsheets. The result, after two years of work, is <a href="http://www.urbanreviewer.org">urbanreviewer.org</a> a map where you can take a look at which areas in New York have been affected and what those master plans were.

### About Urban Reviewer

Master plans have been created for many cities in the US since the mid-twentieth century. The plans were often adopted by cities to receive federal funding that would facilitate redeveloping so-called "blighted" neighborhoods. This involved using eminent domain to acquire the land, relocating the people who lived there, and demolishing the structures on that land. **<a href="http://www.urbanreviewer.org/">Urban Reviewer</a> maps New York City's master plans that have been created since the 1950s.**

<img src="http://i.imgur.com/cJFnzi6.jpg" alt="Urban Reviewer, zoomed out"/>

These plans significantly changed our city's neighborhoods. Whether the plans for new industrial or residential space made it to completion -and many did not- they still involved destroying structures and moving communities to other parts of the city. **Part of our motivation for creating this map was that we wanted to see which pieces of land ("lots") were affected by master plans and are still vacant**. Our map's filters enable this now:

<img src="http://i.imgur.com/lvMJKEY.jpg" alt="Urban Reviewer, current day vacant lots highlighted"/>

### Data collection

**Many volunteers gave a total of hundreds of hours in order to digitize paper records of the master plans provided by a city agency**. These detailed records included information about the plans and each individual lot within them and are the definitive records of these plans. We are not aware of digital records of the plans, so we created them.

There was a moderate amount of processing that had to be done in order to make these records useful, but we will stick to the CartoDB side of this mapping here.

### Inserting the data

Once the data is ready to be imported into CartoDB, we insert it into our tables using the <a href="http://developers.cartodb.com/documentation/sql-api.html">SQL API</a> through <a href="https://github.com/Vizzuality/cartodb-python">cartodb-python</a>.

We use two CartoDB tables:

- <code>plans</code>, which stores each plan's name and other details, and
- <code>lots</code>, which stores the geometries for each lot and points back to the <code>plans</code> table.

### Viewing and styling the data

Urban Reviewer uses a <a href="http://leafletjs.com/">Leaflet</a> map with a <a href="https://www.mapbox.com/">Mapbox</a> base layer. The CartoDB layer of all the lots is added using <a href="http://developers.cartodb.com/documentation/cartodb-js.html">CartoDB.js</a>.

We style the lots using some pretty basic CartoCSS that makes the lines around the lots thicker when zoomed out:

{% gist Kathypennacchio/5ff0cbbe68dcb7161863 %}

### Interactivity

The master plans can be complicated. They often consist of numerous lots that are rarely contiguous. It can be hard to tell if a lot is part of a plan, and some plans overlap. We rely on interactivity to make these relationships clearer, and we're still tweaking how this works.

### Adding plan boundaries on hover

First of all, it's helpful to be able to see the boundaries of a plan while moving your mouse over the map and while a plan is selected:

<img src="http://i.imgur.com/fvtlPut.jpg" alt="Urban Reviewer, hovering over a plan"/>

**This is one area where CartoDB's SQL API really shines**. Traditionally you would need to write code on a server that would collect the relevant geometries and process them. With the SQL API we could write a few lines of JavaScript that ask CartoDB for exactly what we needed. **We created a <a href="http://postgis.net/docs/manual-2.0/">PostGIS</a> SQL query that selects all the lots in a plan, combines their shapes, finds the convex hull of this shape, then buffers that shape a bit to add some space between the lots and the boundary line.**


{% gist Kathypennacchio/601e79d609e6ba6fabcf %}

After testing the query in CartoDB's SQL console, we added code to get the results as a GeoJSON file and add them to a Leaflet <a href="http://leafletjs.com/reference.html#geojson">GeoJSON layer</a> in just a few more lines:

{% gist Kathypennacchio/6df8776d9bbcae909298 %}

### Highlighting lots in a plan when it's selected

When a plan is selected we also highlight the lots within that plan:

<img src="http://i.imgur.com/fWS6e52.png" alt="Urban Reviewer, plan selected"/>

We accomplish this by <a href="http://developers.cartodb.com/documentation/cartodb-js.html#sec-3-28">setting the layer's CartoCSS</a> using the CartoCSS above and adding a little more:

{% gist Kathypennacchio/825552a3e66af40c215b %}

The slightly tricky part is that in our JavaScript code, before we set the layer's CartoCSS, we dynamically replace <code>PLAN_NAME</code> with the name of the plan that was selected. You can see more details of how we do this in <a href="https://github.com/596acres/urbanreviewer/blob/gh-pages/js/plansmap.js#L222-L237">the code</a> if that's your thing.

### Highlighting a lot on hover

Finally, when you mouse over a lot (either in the list view or on the map) the lot is highlighted in a similar way to how we highlight the plans. First we grab the lot's geometry with some SQL:

{% gist Kathypennacchio/132b07dce03825b0d178 %}

And then we get the geometry using the SQL API and add the GeoJSON to a Leaflet layer. This is nice because we can overlay an outline around the lot without updating the layer's CartoCSS. That would force the entire layer to refresh just to add a line around one shape!

Now that you know a bit about how the map works, come explore NYC's master plans on <a href="http://www.urbanreviewer.org/">Urban Reviewer</a>.

See our other <a href="http://blog.cartodb.com/tagged/map-of-the-week">Maps of the Week</a>, and go to <a href="http://www.cartodb.com">CartoDB</a> to start creating your own maps.
