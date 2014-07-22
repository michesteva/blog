---
title: Manhattanhenge today and every day of the year!
date: '2013-07-12T20:56:00+02:00'
tags:
- Manhattanhenge
- Vecnik
- OSM
categories:
- 'How-to guides'
---

<a href="http://nychenge.com"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/cityhenge_home.jpg" width="637px"/></a>

Today is a famous day in NYC, or more specifically in Manhattan, it is one of two times a year that the sun aligns with the midtown street grid in what is called, Manhattanhenge. Anyone who has been to NYC or even looked at a map of the city knows it is not a single grid. We got thinking though,  every neighborhood across the five boroughs has a different pattern of street grids and therefore must have its own henge days! To test our idea, we built a little interface so we can all explore where these mini-henges happen for every sunset throughout the year. Check out what we came up with over at <a href="http://nychenge.com">nychenge.com</a> or read more over on <a href="http://www.wnyc.org/articles/wnyc-news/2013/jul/12/yes-manhattanhenge-also-park-slopehenge/">the WNYC website</a>.

There is a lot of information on Wikipedia about <a href="http://en.wikipedia.org/wiki/Manhattanhenge">Manhattanhenge</a>, but with this visualization we hope to help you explore and learn about the phenomenon and maybe see the NYC street grids in a whole new light. Maybe you will carefully study this map and use the information it contains to impress your next date (if you end up getting married, make sure to send us a tweet)! Or maybe you can avoid the blinding sun over the commuting traffic jam on a critical few days of the year. Maybe you are a trendsetter, so you can start a new day like GreenpointHenge or ParkslopeHenge at the next meeting of Brooklyn Vermiculturists.

<a href="http://nychenge.com"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/cityhenge_map.jpg" width="637px"/></a>

You can also find your own favorite henge date, center the map on it, and use the _embed_ link to share it on your own sites!

Why we have done this? Well, first of all because we wanted to use the <a href="http://blog.cartodb.com/post/55209377679/we-have-released-cartodb-2-1-enjoy-multilayer-maps-and">new CartoDB 2.1</a> (released yesterday) to start making some fun projects. We had this one in our back pocket since <a href="http://twitter.com/andrewxhill">Andrew Hill</a> first <a href="http://vimeopro.com/openstreetmapus/state-of-the-map-us-2013/video/68096664">demoed it at the US State of the Map</a> conference and the timing is now perfect. You can watch the video for a bit more behind the scenes story and see why it was a fun experiment.

What’s next? We want to add more cities, there is no reason why only New York should have a Manhattanhenge. We want to see a MissionHenge for SF, or a LatinaHenge for Madrid. There is also some other functionality we would love to include, like “Which day is there an event including my street?” Those things should not be too hard, we just didn’t have time today!

We hope you enjoy it and share it on Twitter, we might be doing some <a href="http://blog.cartodb.com/post/55091994926/visualizing-nba-finals-tweets-with-cartodb">Twitter Maps</a> about it ;)

If you are interested in how we built it, here are a few more of the details:

**Data**: The data used for this visualization is <a href="http://www.openstreetmap.org/">Open Street Maps (OSM)</a>, the Wikipedia of maps. The beautiful thing about OSM is not only that anybody can contribute, but that the data is all freely available. You can download it, import it in a tool like CartoDB, and start using to make your own maps right away.

**Technology**: Of course we needed to calculate the alignment of the sun, for that we are using the open source <a href="https://github.com/mourner/suncalc">SunCalc</a> library. Finally, for mapping technology there is a fun mix of technologies, made up of our vector rendering engine <a href="https://github.com/Vizzuality/VECNIK">Vecnik</a>, CartoDB, and our use of the <a href="http://developers.cartodb.com/documentation/sql-api.html">CartoDB SQL API</a>.

**Code**: As always, everything here is open source, grab it <a href="http://github.com/Vizzuality/cityhenge/">over on GitHub</a>.
