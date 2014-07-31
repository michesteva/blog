---
title: Mapping the the life of Eric the seagull
date: '2013-10-03T16:47:56+02:00'
tags:
- lifewatch
- examples
categories:
- 'Customer stories'
redirect_from:
- "/post/62996568384/mapping-the-the-life-of-eric-the-seagull/"
---

Earlier this week we saw this <a href="http://lifewatch.inbo.be/blog/posts/tracking-eric.html">amazing blog post</a> from <a href="http://lifewatch.inbo.be/">LifeWatch</a>, where they map and analyze the life of a seagull. The blog post comes out of a project that tracks, in real-time, 30 birds using solar powered GPS units. From those 30 birds, the authors single-out Eric,

_Eric is male <a href="http://en.wikipedia.org/wiki/Lesser_Black-backed_Gull">Lesser Black-backed Gull</a>, breeding in the colony of Zeebrugge._

The authors use the movements of Eric over two months to perform some interesting analyses and to create some really cool maps. One example we particularly love is the time-colored tracks of Eric’s movement over two months,

<iframe frameborder="0" height="400" src="http://lifewatch-inbo.cartodb.com/viz/44cf305c-21f9-11e3-9f83-4f522829d789/embed_map?title=false&amp;description=false&amp;search=false&amp;shareable=false&amp;cartodb_logo=true&amp;layer_selector=false&amp;legends=true&amp;scrollwheel=true&amp;sublayer_options=1&amp;sql=SELECT%20ST_MakeLine(the_geom_webmercator%20ORDER%20BY%20date_time%20ASC)%20AS%20the_geom_webmercator%2C%20day_of_year%0AFROM%20tracking_eric%0AGROUP%20BY%20day_of_year&amp;sw_lat=50.963616518684226&amp;sw_lon=1.8189239501953125&amp;ne_lat=51.76953957596102&amp;ne_lon=4.4556427001953125" width="100%"></iframe>

We love seeing people using a full range of CartoDB technologies to create rich analyses and tell really interesting stories. This work goes the extra step, the authors use the <a href="https://github.com/CartoDB/torque">Torque</a> library to show animated movement on the map, provide SQL examples to explain how the analyses were performed, and even publish the Creative Commons data for you to play with on your own<span id="docs-internal-guid-58993b98-7ec5-081d-178e-885766688f0e"> (hosted using the CartoDB SQL API)!

If you love maps and data, you should take a minute to read the full post over on <a href="http://lifewatch.inbo.be/blog/posts/tracking-eric.html">the LifeWatch blog</a>.
