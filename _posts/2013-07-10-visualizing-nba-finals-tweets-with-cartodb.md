---
layout: post
title: Visualizing NBA Finals tweets with CartoDB
date: '2013-07-10T18:00:30+02:00'
tags:
- html5
- twitter
- nba
tumblr_url: http://blog.cartodb.com/post/55091994926/visualizing-nba-finals-tweets-with-cartodb
---
In our second post this week about Twitter visualizations, we want to show you a cool visualization of tweets from throughout the NBA Finals visualized using CartoDB. Like the Wimbledon map we showed you yesterday, this map makes use of a neat set of ~70,000 geospatially tagged tweets. The tweets are visualized in two distinct ways. In the first map, all tweets are displayed by location and with a color according to the team the tweet identifies with,

In the second map, you can view the progression of tweets time from the first to the last game. The map makes use of HTML5 Canvas to render dynamic markers on the map. Each marker expands for a moment after it is first shown on the map; a marker’s final radius represents the total number of followers the user has, so essentially the potential impact of that tweet,

We love these examples of mixed dynamic and static data representations using CartoDB. Often when exploring data, a single representation isn’t enough to tell a complete story. Here, the dual maps really show the power of using of CartoDB’s SQL API to grab data and display it in two distinct and complementary views. If you love these maps, shoot us a tweet! Who knows, it may make it into a CartoDB map soon!
It’s been a fun couple of weeks here at CartoDB but stay tuned, there is more to come!
