---
title: Happy Birthday to 11870.com!
date: '2012-03-02T12:27:00+01:00'
tags:
- cartodb
- '11870'
- SQL query
- carto css
- madrid
categories:
- 'How-to guides'
redirect_from:
- "/post/18602437732/happy-birthday-to-11870-com/"
---

<iframe frameborder="0" height="300" src="https://viz2.cartodb.com/tables/hoteles_madrid_11870/embed_map" width="645"></iframe>

We are always trying and exploring data while working with CartoDB. This week we took a look at a dataset from <a href="http://11870.com/" target="_blank">11870.com</a>, a social city guide already 5 years old. We did a couple of maps with it. The whole thing only took us around 15 minutes. 

First, we used <a href="http://11870.com/" target="_blank">11870.com</a> API to get data from hotels in Madrid and cleaned up the results with <a href="http://code.google.com/p/google-refine/" target="_blank">Google Refine</a>. In the first map (embedded above), the size of the points shows how many times each hotel has been tagged as a favorite. You can check the full map <a href="https://viz2.cartodb.com/tables/hoteles_madrid_11870/embed_map">here</a>.

We styled it with this Carto code:

{% gist saleiva/1977876 %}

We did another visualization of the same dataset as a gridmap showing hotels density in Madrid. It’s available <a href="https://viz2.cartodb.com/tables/hoteles_playground/embed_map?sql=SELECT%20count(cartodb_id)%20as%20ct%2C%20ST_Transform(ST_Buffer(ST_SnapToGrid(the_geom%2C0.002)%2C0.001%2C%20'quad_segs%3D2%20endcap%3Dsquare')%2C3857)%20as%20the_geom_webmercator%20FROM%20hoteles_playground%20GROUP%20BY%20ST_SnapToGrid(the_geom%2C0.002)" target="_blank">here</a>. This is the SQL query and the Carto in case anyone wants to give it a try:

{% gist saleiva/1977875 %}

Do you have any interesting map done with CartoDB? Send us the links through <a href="https://twitter.com/#!/cartodb" target="_blank">@cartodb</a>, we’d love to see them!
