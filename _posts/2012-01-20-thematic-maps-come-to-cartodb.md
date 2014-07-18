---
title: Thematic Maps come to CartoDB
date: '2012-01-20T18:42:00+01:00'
---

At CartoTowers, we've been hard at work preparing some new thematic map visualization options for you to use in CartoDB: **Choropleth** and **Bubble maps**. For those of you new to mapping, here's a quick summary of these two popular cartographic techniques:

### Choropleth map

Choropleth maps are one of the most well known thematic maps. Especially suited to mapping densities, these maps are a great way to visualize intensity, and also to explain geographic similarities and differences.

**Population density per km2 (<a href="http://www.naturalearthdata.com">www.naturalearthdata.com</a>)**

<iframe frameborder="0" height="320" src="https://vizzuality.cartodb.com/tables/countries/embed_map" width="650"></iframe>

### Bubble maps

Bubble, or 'graduated point symbol' maps are another approach to mapping data on a numerical range, and work really well when visualising geographic differences in absolute value, such as the total number of people that live in cities.

**Populated places in East Coast USA (<a href="http://www.naturalearthdata.com">www.naturalearthdata.com</a>)**

<iframe frameborder="0" height="320" src="https://vizzuality.cartodb.com/tables/populated_places_points_2/embed_map" width="650"></iframe>

### Thematic maps come to CartoDB

Today we are launching both these new visualization options for all CartoDB accounts making it easier than ever before to create compelling, data driven geospatial visualizations. Please give them a try and let us know what you think!

To get started, load some data into your CartoDB and select the visualization type dropdown on the map screen. You should see the new mapping options available for you there.

<img alt="thematic picker" src="http://dl.dropbox.com/u/193220/CartoDB/thematic/dropdown.png"/>

### CartoDB Thematic Map Highlights

**Automatic partitioning of data**  
CartoDB makes partitioning your data into colors simple. By analysing and selecting divisions that split your data into equal frequency ranges, CartoDB lays the groundwork for robust thematic mapping.

**Beautiful Color Ramps**  
Inspired by <a href="http://colorbrewer2.org/">Cynthia Brewer's color palettes</a>, CartoDB includes 5 preset ramps to help you build understandable, beautiful maps.

**Ultimate map customisation**  
The thematic map toolbox is really the starting point for your data visualization. Once you've selected a choropleth style, open up the Carto map style editor to fine tune your visualization: add conditional labels, transparency and more.

**Geospatial pre-processing**  
If your data has absolute figures, you may want to convert your values into densities (such as people per km2 or computers per 1000 people) before you visualize. Using CartoDB's geospatial processing, you can easily calculate these. Simply create a new column in your data table (eg. my_var_per_km2), and populate it using a SQL statement:


{% highlight sql %}
UPDATE my_table SET my_var_per_km2 = (my_var / ST_Area(ST_transform(the_geom, 954009)) /10^6)    
{% endhighlight %}

### Look to the Future

We're really excited to bring these visualizations to all our users, and are already working hard on our next update. With more thematic map options just around the corner, 2012 is shaping up to be a great year for geospatial visualizations!

### About CartoDB

<a href="http://www.cartodb.com">CartoDB</a> is a geospatial database on the cloud. More than just hosted PostGIS, CartoDB simplifies geospatial development enabling you to focus on the business details of your app. To learn more, sign up for a free account at <a href="http://www.cartodb.com">www.cartodb.com</a>, and check out our <a href="http://http://developers.cartodb.com/">developer site</a> and <a href="http://developers.cartodb.com/gallery/">examples gallery</a>.
