---
title: Superbowl visualization makes use of many powerful mapping features of CartoDB
date: '2014-02-04T18:12:00+01:00'
tags:
- cartodb
- maps
- superbowl
- visualization
- data visualization
- twitter
- Torque
categories:
- 'Customer stories'
redirect_from:
- "/post/75598311828/superbowl-visualization-makes-use-of-many-powerful/"
---

It didn't take long after the Superbowl ended for there to be an awesome visualization of all the Twitter activity during the game. The visualization uses CartoDB's Torque library to show over 1 million tweets in just 6 hours.

<iframe frameborder="0" height="520" src="http://cartodb.s3.amazonaws.com/static_vizz/sb14.html" width="100%" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Not only does the map make use of CartoDB to deliver an animated map of millions of points, but it also makes use of some other advanced features of our service. Really interesting is their use of <a href="http://gis.stackexchange.com/questions/82492/using-different-colors-on-torque-cartodb">some interesting techniques</a> in Torque that allow you to deliver multiple color categories. They combined this with <a href="http://blog.cartodb.com/post/57612761347/long-awaited-often-requested-legends-have-arrived">native legends</a> and <a href="http://blog.cartodb.com/post/55027221213/introducing-social-infowindows-display-your-tweets-the">native Twitter infowindows</a> to give a really rich interactive experience. Try out the full screen button to really experience the map.

These maps are getting easier and easier to create with CartoDB. We are continuing to <a href="http://developers.cartodb.com/tutorials.html">add tutorials</a> to make it easier for you. If you have a big event coming up and want to make use of these type of maps, don't hesitate to <a href="http://cartodb.com/support">contact us</a> or shoot us a <a href="https://twitter.com/cartodb">message on Twitter</a>.

You can start creating animated geotemporal maps without any technical knowledge and share it easily on the web or privately inside your organization, <a href="http://cartodb.com/pricing">start your free trial now</a>.
