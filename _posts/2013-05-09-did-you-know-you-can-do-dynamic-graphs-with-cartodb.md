---
title: Did you know you can do dynamic graphs with CartoDB? The Policy Climate Interactive
  project
date: '2013-05-09T19:26:00+02:00'
tags:
- dynamic
- mapping
- data visualization
categories:
- 'Customer stories'
---

Even though our blog gives a lot of attention to maps, CartoDB is a great tool for a lot more than just maps. We have <a href="http://blog.cartodb.com/post/45750027785/exploring-the-differences-in-dynamic-data-through-time" target="_blank">seen</a> in the <a href="http://blog.cartodb.com/post/39680106243/cartodb-makes-d3-maps-a-breeze" target="_blank">past</a> how the CartoDB APIs can do all sorts of dynamic queries to CartoDB hosted data. While dynamic queries CartoDB can be geospatial in nature, even returning GeoJSON formatted results, we haven’t spent much time highlighting the fact that they don’t have to be geospatial. That is why we are excited by the latest project released by the <a href="http://climatepolicyinitiative.org/" target="_blank">Climate Policy Initiative</a>, the <a href="http://www.thepolicyclimate.org/">Policy Climate Interactive</a>.

<a href="http://www.thepolicyclimate.org/" target="_blank"><img alt="image" src="http://i.imgur.com/0TIHgo8.png" width="650px"/></a>

The Policy Climate Interactive is an online tool, focused on the key economies driving both climate change and climate policy in the world. The report highlights both the good and the bad through the use of interactive data visualization driven by the CartoDB APIs. No other platform available gives the flexibility to dynamically query hosted data in a way that you can create client side visualizations so simply.

In this case, the D3 framework was used to build some really beautiful graphs of the data underlying global climate policy. We were really impressed to see how beautifully CartoDB works with D3 for doing these data visualizations without any maps! This project highlights how powerful CartoDB can be even for non-map based data visualization. Take a look through some of the results,

<a href="http://www.thepolicyclimate.org/regions/brazil/sectors/agriculture" target="_blank"><img alt="image" src="http://i.imgur.com/Oe5OCFu.png" width="650px"/></a>

<a href="http://www.thepolicyclimate.org/regions/eu/subjects/emission_drivers" target="_blank"><img alt="image" src="http://i.imgur.com/oqn13Xm.png" width="650px"/></a>

The way the project uses the D3 library and data coming directly from CartoDB is cool for many reasons. A clear one is the data curation and management flexibility it give the project administrators. Administrators can easily add and modify the source data on CartoDB and the results will immediately appear in the graphs online! CartoDB also gives users the ability to create download links for particular subsets of data, by adding a link to the API query with and indicating the export format (e.g. CSV, Excel, etc).

We are excited to share this project and are honored to have CartoDB be part of such an important project. Congratulations to <a href="http://climatepolicyinitiative.org/">Climate Policy Initiative</a> for delivering such a forward thinking website and data publishing platform.
