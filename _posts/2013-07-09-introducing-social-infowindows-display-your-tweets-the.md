---
title: 'Introducing Social Infowindows: Display your Tweets the right way on maps'
date: '2013-07-09T23:01:00+02:00'
tags:
- social media
- twitter
- maps
- wimbledon
categories:
- 'New features'
---

The last days we have been working with the Twitter team on a <a href="http://com.cartodb.visualizations.s3.amazonaws.com/twitter/wim_twitter_map.html">visualization about the impact of Wimbledon</a> on the popular social network. You can <a href="https://blog.twitter.com/2013/twitter-at-wimbledon-downright-smashing">read more about the data in their blog post</a>. Twitter contains one of the most interesting geospatial datasets one the web; every time someone tweets and shares their location, new geospatial data is published. This allows others track everything from the popularity of specific topics within a region to the dynamics of how viral topics spread around the world.

One thing that most existing Twitter maps miss is the tweet itself. Twitter provides very clear guidelines on how tweets should be displayed and even enforce it in their terms of the service. To easily do that they provide a widget API to embed a tweet on any other website. We thought maps should not longer be an exception to that! So we have integrated the official Twitter API in CartoDB infowindows.

The Twitter Widget API does not only provide a cool and familiar look for tweets, but it is also informative and lets your viewers read a full a discussion. Take a look at this one for example:

<a href="http://com.cartodb.visualizations.s3.amazonaws.com/twitter/wim_twitter_map.html"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/twitter_map1.png"/></a>

Another example is images. When someone adds an image to their tweet, it is often a very important piece of information to really understand that person’s point of view. Here, tweets are displayed with their images, adding to the story:

<a href="http://com.cartodb.visualizations.s3.amazonaws.com/twitter/wim_twitter_map.html"><img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/twitter_map2.png"/></a>

You can also retweet, reply, and favorite, basically all the things you make on Twitter, directly from the map. We love this integration.

What we have done here is not rocket science, but rather common web practices as their very best. Every tweet has a unique identifier. When you import data to CartoDB from Twitter you get for every ID and it’s original location. In CartoDB we use the Twitter ID so that when you click on a particular point we can assemble the widget through the Twitter API. The best thing of all is that this was possible without changing anything on CartoDB, instead using the flexible cartodb.js templating system for infowindows.

We are very excited about the idea of using specific templates and widgets from social services like Twitter in custom infowindows. It provides a huge usability improvement for displaying data the way users know and providing tons of functionality.

In the coming releases we will incorporate more and more of these “Social Infowindows” and keep you updated. We hope you will enjoy them as much as we do.
