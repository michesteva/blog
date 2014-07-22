---
title: More Out of the Box Styling Power and Upgraded CartoCSS with 2.0
date: '2012-12-05T19:15:00+01:00'
tags:
- cartocss
- mapping
- styling 3d
- cartodb
categories:
- 'New features'
---

With the recent release of 2.0, you have probably noticed a our complete overhaul of styling features in CartoDB. In this post we are going to explore those features in detail.  We'll look at the changes to the user-interface and some of the great new styling upgrades that come with this release. Some things to look for below include, new point-and-click visualization, support for new CartoCSS methods, new the ability to add a third dimension to your polygons. 

**New user-interface for styling your maps**

<img alt="New Styling Interface" height="385" src="http://i.imgur.com/UUZjT.png" width="650"/>

The styling interface on the maps tab from your dashboard has gotten a complete overhaul. Your ability to use some of our point-and-click styles is now more closely integrated with the CartoCSS editing window. We've also started to add more, easy to use, styles for you. Options include new density maps, both hexagon and grid based, and simple ways to add labels to any of your maps. Take a look through the color-ramps including in CartoDB 2.0, we have added a lot more options since the last version. This will let you really customize, enhance, and interpret your choropleth and density maps. 

**New infowindows, basemaps, and shared map features**

<iframe frameborder="0" height="400" src="http://viz2.cartodb.com/tables/isotope_measures/embed_map?title=false&amp;description=true&amp;search=false&amp;shareable=false&amp;sql=&amp;zoom=2&amp;center_lat=26.11598592533351&amp;center_lon=-42.5390625" width="650"></iframe>

We've included a much more flexible set of basemaps for you to select from in 2.0. One really interesting one is the ability to remove the basemap entirely, a feature that can be really useful for infographics or non-geographic based visualizations. We've also made infowindows much more flexible and easy to use. You can now customize colors, content, and labels in your map infowindows using the new infowindow editor. 

<iframe frameborder="0" height="400" src="http://viz2.cartodb.com/tables/san_francisco_trees/embed_map?title=true&amp;description=true&amp;search=false&amp;shareable=false&amp;sql=&amp;sw_lat=37.7566013348511&amp;sw_lon=-122.5521469116211&amp;ne_lat=37.8065289741725&amp;ne_lon=-122.3495864868164" width="650"></iframe>

We've also given you a lot more control over how your shared maps look. That includes a simple interface to toggle on/off some of the core features. CartoDB tables all now have a Description that you can fill out (find it right below your table name). You can publish these with your maps to help share more information about the maps you are creating. 

**Updates in CartoCSS and advanced styling methods**

<iframe frameborder="0" height="400" src="http://osm2.cartodb.com/tables/osm_export_polygon/embed_map?title=false&amp;description=true&amp;search=false&amp;shareable=false&amp;sql=SELECT%20the_geom_webmercator%2C%20st_area(the_geom_webmercator)%2F400%20as%20height%20FROM%20osm_export_polygon%20ORDER%20BY%20ST_YMin(the_geom_webmercator)%20DESC&amp;sw_lat=45.53067342698385&amp;sw_lon=-122.67327547073364&amp;ne_lat=45.53343918913263&amp;ne_lon=-122.66061544418334" width="650"></iframe>

Another thing that makes 2.0 even more exciting, CartoDB now supports some new and exciting additions to CartoCSS. Now you are able to add in such things as buildings, 3D visualizations, new blending abilities, the use of query results as variables in the style, and a host of other neat stuff. The example above is even more interesting than just adding dimension, it also uses a value returned by SQL to style the buildings with. The data here is a small set of polygons form Open Street Map, without an estimate of building height, I needed to make it up. 

 {% highlight sql %}
 SELECT 
    the_geom_webmercator, 
    st_area(the_geom_webmercator)/400 as height 
FROM osm_export_polygon
{% endhighlight %}


In the above, I simply created a &#8216;height' column by measuring the area of the polygon (and then making it a reasonably smaller value by dividing it by 400). Next, I used the new CartoCSS capabilities based, sizing building by the returned height value,

 {% highlight sql %}
 #osm_export_polygon{
   line-width: 8;
   line-color: rgba(0,0,0,0.3);
   building-fill:#aaaa77;
   building-fill-opacity: 1;
   building-height: '[height]';
}
{% endhighlight %}


You can see it in the &#8216;[height]' portion of the above. There are many other neat features. One of my favorites is the ability to to color compositing. We have a simple tutorial that will help you explore some of those methods. Check it out over at the <a href="http://developers.cartodb.com/tutorials/intensity_map.html">Intensity maps tutorial</a>.
