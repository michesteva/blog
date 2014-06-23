---
layout: post
title: Read AND write to CartoDB with the Leaflet.draw plugin
date: '2013-06-21T13:33:00+02:00'
tags:
- draw
- editing
- leaflet
- security definer
tumblr_url: http://blog.cartodb.com/post/53510434258/read-and-write-to-cartodb-with-the-leaflet-draw-plugin
---
A handful of developers using CartoDB have begun to build tools that incorporate CartoDB data and the Leaflet.draw plugin. It is a pretty neat combination of tools, that allow anyone to create polygon editing interfaces on top of their datasets. It also lets you build custom data management interfaces on top of a powerful geospatial database. We used it for a fun demo at the recent FOSS4G-NA meeting and it gave us the chance to see how it could work. The library is pretty straightforward, though it does take a basic grasp of GeoJSON, JavaScript, and the gang of usual suspects. 

There are a number of examples online already about how to setup the basic interface for Leaflet.draw, so instead, let’s take a look at how we can grab geometries from a CartoDB table for use with the library.
https://gist.github.com/andrewxhill/5830532
In the above example, we request geometries from CartoDB using the format=GeoJSON parameter to get the right format in our response. Once you have the GeoJSON geometries on the map, you use drawnItems group in our Leaflet.draw control to allow editing.
Simple as that!
Now, what do you do if you want to store those edits quickly back into your CartoDB account? Often times our users set up some type of proxy server to handle the exchange. First, posting the results of the edit to a proxy, wrapping those results in proper SQL on the proxy layer, and then shipping off to CartoDB for storage. If you are creating editable maps for a trusted audience or if you are looking for a truly democratic set of edits, there is another way.
Security definer
The security definer gives you the ability create functions on CartoDB that are available in your public API but then within those functions, perform operations only possible from an authenticated user. The way they work is by accepting a small number of defined and typed parameters in the function call, and then using those parameters to do work (updates, inserts, deletes, etc). You can use them to update existing data without authentication or you can even create functions that would allow you to retrieve data from a private table in restricted ways. We have used them to create limits like custom zoom constraints on a table! This is powerful, but obviously be careful. 
So, let’s create a function with a security definer that will accept our polygon edits and write them to a table,
https://gist.github.com/andrewxhill/5830570
In the above, our function accepts two parameters, a cartodb_id and the_geom. The cartodb_id tells us if we are updating an existing polygon and the_geom is our newly edited or created geometry. Next, it gives itself higher privileges on our table, and creates an upsert statement (updating the_geom if it already existed or inserting it if it is new). That’s it! Now, we can share our interface among friends and collect all our edits and additions quickly and easily.
Combine with Leaflet.draw methods
Finally, coming back to Leaflet.draw, we have a nice set of functions that help you integrate update, insert and deletes into your Javascript. Take a look at those here,
https://gist.github.com/andrewxhill/5830659
