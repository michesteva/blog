---
title: Watching history unfold in new cumulative maps
date: '2013-12-20T19:19:00+01:00'
tags:
- torque
- animated maps
- data visualization
- historical maps
categories:
- 'How-to guides'
---

Mapping historic and temporal data can be challenging. A lot of times you need to think about clever ways to aggregate or filter that data so you can highlight and tell a story without losing too much of the overall picture. But with our recent <a href="http://blog.cartodb.com/post/66687861735/torque-is-live-try-it-on-your-cartodb-maps-today">release of Torque maps</a>, we <a href="http://blog.cartodb.com/post/67674300140/beautiful-maps-with-torque">expanded your options</a> for mapping temporal data, giving your viewers the ability to play, pause, and backup animated data in order to explore how the data changes over time. We just pushed an awesome little enhancement to Torque visualizations: cumulative visualizations.

**The westward expansion of the United States**

To demonstrate how cumulative visualizations look, we've returned to one of our favorite datasets containing temporal information, the establishment of United States Post Offices in the 19th Century.

<iframe height="500px" src="http://viz2.cartodb.com/viz/70bc854e-68fc-11e3-8e22-0e49973114de/embed_map?title=true&amp;description=true&amp;search=false&amp;shareable=false&amp;cartodb_logo=true&amp;layer_selector=false&amp;legends=false&amp;scrollwheel=true&amp;sublayer_options=1%7C1&amp;sql=&amp;zoom=4&amp;center_lat=38.063924198120645&amp;center_lon=-95.625" width="637px">sorry, hiccup</iframe>

This map is awesome. On it's surface, it is really just a map about the establishment of the Post Office locations through time. A little bit deeper down, it is the story of US expansion westward, if you think about it, where people and communities go, so does the Post Office. Digging even deeper, you can see events such as the gold rush, expansion into the Oregon Territory, and even the meandering of Route 30 through Nebraska. 

It is clear that the ability to zoom into the data and look at different poitns in time lets us really find some interesting stories. We love that aspect of interactive maps. In fact, the map was first made <a href="http://blog.dwtkns.com/2011/posted/">two years ago</a> using Processing, so it is exciting to see it come to life in the browser and finally as an interactive map. In fact, it is even more exciting that now the CartoDB map can be created by anyone in just a few minutes.

**How it was made**

Making the map only takes a few steps in CartoDB. First, you'll need the dataset, <a href="https://viz2.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20us_po_offices&amp;format=SHP">available here</a>. Next, you'll want to create an animated map with Torque, you can see the steps for doing that in this video,

<iframe frameborder="0" height="300px" src="//player.vimeo.com/video/79115503" width="637px"></iframe>

Now, you'll want to enable the new cumulative option. You can find the new option right in the Torque visualization wizard, it's as easy as toggling the button! Take a look,

<img alt="image" src="http://i.imgur.com/t4RV9Wz.gif" width="637px"/>

Let us <a href="https://twitter.com/cartodb">know on Twitter</a> what you come up with using Torque!

<span id="docs-internal-guid-775d636c-111e-f76d-300f-f9823c7a980d"><br/>
