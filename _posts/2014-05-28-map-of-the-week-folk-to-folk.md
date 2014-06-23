---
layout: post
title: 'Map of the Week: Folk to Folk'
date: '2014-05-28T20:28:47+02:00'
tags:
- map of the week
- cartodb
tumblr_url: http://blog.cartodb.com/post/87119672064/map-of-the-week-folk-to-folk
---
Welcome Emma from Folk to Folk in this new installment of our Map of the Week. Folk to Folk is an independent documentary project exploring how the inclusive spirit of folk music helps build communities and creates accessible, participatory spaces across America today. We are happy to see how people are using CartoDB to create story-telling sites - and stay tuned because we’ll have news in this front soon! Meanwhile, enjoy the story of how Folk to Folk was made.

When we decided to use a map to tell the stories we’d collected as part of Folk to Folk, we had no idea how to make it a reality. Then we found Carla Astudillo, a data-investigative and interactive journalist who’s used CartoDB to create data driven maps for Patch.com, USA Today and other clients. We’d traveled across the U.S. – Southeast from Boston to New Orleans and back, then from Boston to the West Coast and back, stopping in cities and towns to speak to musicians and community facilitators about how the folk music ethos impacts their lives and work, creating short webisode style videos along the way.

All the shorts are hosted on Vimeo, and we’d been keeping a running blog of our progress, but because the travel part of our project was so integral to its story, a map seemed like the only way to display these aggregated snapshots.



We plotted out the points we’d traveled within the US and added these to one table, “Points.” Carla did some query magic to call up the videos we’d already hosted on Vimeo, as well as place-specific slideshows on Flickr.

She also created a new layer and table for our two “Routes,” which drew lines between our stops.



I edited the Geometry of the lines using the Map View tool in CartoDB, zooming all the way in and selecting GMaps Roadmap to drag and drop segments to be (almost) identical to the roads we took on our journeys.



I used TileMill to replicate the AAA map we followed on both of our trips, from the colors, to the folded look of the paper.







We wanted to give a sneak-peek feel when users hovered over the points for each place we visited, and modeled pop up windows after exit signs. When you click on a Point in the “Points” table, a pop up road sign with all videos from that stop appears. Using Vimeo’s embeds, you can watch the video either within the road sign menu, or as a full screen view.



CartoDB’s interface makes it extremely easy for us to add new videos as we finish editing them. Each time we’re ready to add a new point to the map, we simply view the “Points” table, find the “Cities” column and add in a new video’s information, and the Exit sign immediately shows a new video.

Check out our previous Maps of the Week, and signup for a free CartoDB account to start mapping stories like this.
