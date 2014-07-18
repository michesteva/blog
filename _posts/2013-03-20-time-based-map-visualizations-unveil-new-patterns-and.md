---
title: Time based map visualizations unveil new patterns and insights
date: '2013-03-20T18:12:00+01:00'
tags:
- torque
- temporal
- visualization
- conservation
---

Over the past months you have probably come to realize, we love data that moves. Moving data can make your maps and visualizations really come to life and data you can use to build these visualizations can come in a lot of forms. Whether it's data that <a href="http://www.guardian.co.uk/news/datablog/interactive/2012/oct/01/first-world-war-royal-navy-ships-mapped" title="guardian data blog">crawls and zips</a> across a map through time, data that<a href="http://mwcimpact.com/" title="MWC"> bursts and comes to life</a> as you watch, or data that changes <a href="http://vizzuality.github.com/rollingstonesmap/" title="Rolling Stones">form</a> or <a href="http://cartodb.github.com/bcn_traffic_map/" title="Traffic map">intensity</a>, it all can lead not to some really amazing visualizations.

<a href="http://www.wildermaps.com/sfg/2012_oneday.html" title="Space for Giants + Torque"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/u115.gif"/></a>

Seeing data come to life on your computer screen is more than just fireworks that people find pretty. Showing data move on maps isn’t new, but we have really been trying to push new research into how to effectively display dynamic data on interactive maps. Seeing and also interacting with data that changes through time can be incredibly useful for gaining insights into your data and communicating those insights to a broader audience. The application of these visualizations can be anywhere from business intelligence, to smart grid development, to conservation planning.

That is why we were particularly excited to see a recent visualization from <a href="https://twitter.com/jeffjstephens" title="Stephens">Jeffery Stephens</a> and <a href="http://www.spaceforgiants.org/" title="Space for Giants">Space for Giants</a>. Jeffery used <a href="https://github.com/CartoDB/torque" title="Torque">Torque</a> and <a href="https://cartodb.com" title="CartoDB">CartoDB</a> to start looking at how elephants moved across the landscape. In particular, these elephants have a bad habit of crossing a fence from protected areas into nearby farming areas. It is a bad habit that can lead to really bad consequences and fixing it requires understanding how and where it is happening and organizing a multifaceted solution. To help share the issue with colleagues, collaborators, and others, they put together a really unique visualization of the elephants moving across the landscape.

In the visualization above (click the image to see the live map), a year's worth of elephant movement was reduced into a single day. Next, the data was mapped over a 24-hour clock, showing the dominant patterns of where and when the elephants were crossing the fence. We absolutely love this map, and hope it can help the wonderful work of Space for Giants. We weren’t alone, there was a <a href="http://animals.oreilly.com/secret-lives-of-elephants-revealed/" title="O'Reilly + Torque">really nice write-up in O’Reilly</a> the other day too.If you want to try your hand at similar visualizations, take a look at our Torque library available on GitHub. We are still working hard to incorporate this directly into the CartoDB user-interface, but in the meantime, you can fairly quickly get a look at your dynamic data using the <a href="http://cartodb.github.com/torque" title="CartoDB + Torque">sandbox tool</a>. We would love to see any interesting visualizations you come up with!
