---
title: CartoDB.js released into the wild
date: '2012-12-27T22:32:53+01:00'
tags:
- cartodb.js
- release
---

<img alt="CartoDB.js" height="300" src="http://cartodb.s3.amazonaws.com/tumblr/posts/cartodbjs.png" width="650"/>

For some months now we have been developing a new, more powerful, and easy to use <a href="https://github.com/cartodb/cartodb.js" title="CartoDB JavaScript Library">JavaScript library for CartoDB</a>. Today, we are announcing the beta release of <a href="https://github.com/cartodb/cartodb.js" title="cartodb.js">CartoDB.js</a> for all of you to use. While some of you have caught wind and <a href="http://btvvotes.geosprocket.org/demography/8wards.html" title="geosprocket">started development with the library early</a>, for the rest, we want to take a moment to go over some of the key benefits of switching to CartoDB.js for your online geospatial development. 

**Continuous improvement**

CarotDB.js was developed so developers could build awesome websites and so we could build maps in the CartoDB platform. That's right, we use CartoDB.js for our administrative dashboards, embedded maps, and all the mapping tools in your account. This means that we are constantly testing it and pushing it for better performance, reliability, and power; it also means that each improvement we make will immediately become available to you as a developer. As you may have read in the <a href="http://blog.cartodb.com/post/36891627435/cartodb-migration-complete-welcome-to-2-0" title="CartoDB 2.0">announcement of CartoDB 2.0</a>, we are going to be pushing new visualization methods over the coming months, each of which will be available straight away through the CartoDB.js library. <a href="http://cartodb.github.com/torque/" title="CartoDB Torque">Torque</a> for example will be available inside the library soon.

<iframe frameborder="0" height="300" src="http://examples.cartodb.com/tables/cholera_deaths_1/embed_map?title=false&amp;description=false&amp;search=false&amp;shareable=false&amp;sql=WITH%20first_query%20AS%20(SELECT%20the_geom_webmercator%2C%20(SELECT%20cartodb_id%20FROM%20pumps%20ORDER%20BY%20the_geom%20%3C-%3E%20cd.the_geom%20LIMIT%201)%20as%20nearest%20FROM%20cholera_deaths%20cd)%0A%20%20SELECT%20ST_Collect(the_geom_webmercator)%20as%20the_geom_webmercator%2C%20nearest%20FROM%20first_query%20GROUP%20BY%20nearest&amp;sw_lat=51.51262196541059&amp;sw_lon=-0.13959288597106934&amp;ne_lat=51.51385051824575&amp;ne_lon=-0.13326287269592285%0D%0A" width="650"></iframe>

**Unification of mapping libraries**

Previously, developers using CartoDB were offered CartoDB-GmapsV3 or CartoDB-Leaflet, to use differently depending on the slippy map they wanted on their site. Now, we have efficiently wrapped all the functionality of both tools into a single library. This is great if you are developing multiple maps online or if you want the flexibility to change your map in the future. The mapping functions exposed by CartoDB.js work seamlessly from one map to the next. This officially deprecates the CartoDB-GmapsV3 and CartoDB-Leaflet libraries. We have also made <a href="http://developers.cartodb.com/documentation/cartodb-js.html#sec-2-3" title="CartoDB CSS">CartoDB.css available</a>, which gives you out of the box CSS for your maps and infowindows and can help greatly reduce development time.

**Better support of CartoDB visualizations on websites**

As we said above, CartoDB.js works closely with your hosted account. CartoDB.js makes use of a <a href="http://developers.cartodb.com/documentation/cartodb-js.html#sec-1-0" title="CartoDB Viz.JSON documentation">Viz.JSON file</a>, served for each map created within your CartoDB account. The Viz.JSON file documents the style and any filters you apply to your maps. For example, when you create a choropleth using your online account, it can be replicated with only a couple lines using CartoDB.js and your Viz.JSON URL.

**Same full control that you have always had**

Just because CartoDB.js can pull stored visualizations from your CartoDB account with ease doesn't mean you have to use it that way. Just like the old libraries, you can apply SQL and CartoCSS directly from the client, meaning endless variations and customizations of the data you store on CartoDB. In fact, the library makes it easier than ever to set custom parameters at runtime or to change and update those parameters programatically in response to your website.

**Minimal latency means faster websites**

We have been working to improve the performance CartoDB everywhere! As part of that mission, we are making CartoDB.js available on a <a href="http://en.wikipedia.org/wiki/Content_delivery_network" title="CartoDB CDN">content delivery network</a> (CDN). This means that no matter where in the world your website’s viewers are, they will get CartoDB in their browser as fast as possible. It also means that you don't need to store and update the library on your own server each time you develop a new map, it is all up in the cloud just waiting for you!

**Link directly to your version of choice**

There is nothing worse than having someone else's library break something you worked hard on. For that reason, not only is the main release of CartoDB.js available on the CDN, but every <a href="http://developers.cartodb.com/documentation/cartodb-js.html#sec-2-5" title="CartoDB versions">CartoDB.js version</a> we push will be available for use. While your project is in development, you can link directly to the latest release, but when you go live you can perminantly link to the latest release that you have tested in you website. It is as simple as adding a version number to the URL when importing the CartoDB.js library. Releasing CartoDB.js with version numbers will also help us report, track, and communicate bugs and features with you!

**It's in beta, so don't be bashful**

Anytime you release a tool in beta, it means you feel good about what you have developed but know somebody is going to find an edge case or a quirky behaviour. We're ready for that! Please report your bugs and questions to <a href="https://groups.google.com/forum/#!forum/cartodb" title="CartoDB Users" target="_blank">our user thread</a>. We are going to be working quickly to fix anything you might find! 

**Examples using CartoDB.js**

<img alt="CartoDB Hobbit Map" height="360" src="http://cartodb.s3.amazonaws.com/tumblr/posts/hobbit_film.png" width="650"/>

We are very proud of CartoDB.js and all the possibilities it offers. We will be adding more examples and a closer look at some of the library’s features here in the future. For now, take a look at the <a href="http://blog.cartodb.com/post/37912794875/visualizing-the-peter-jacksons-the-hobbit-film" title="Hobbit Map" target="_blank">Hobbit map we released</a>! Dig into the source code and see CartoDB.js in action.
