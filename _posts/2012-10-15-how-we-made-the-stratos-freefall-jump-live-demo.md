---
layout: post
title: How we made the stratos freefall jump live demo
date: '2012-10-15T13:05:00+02:00'
tags:
- cartodb
- stratos
- Felix Braumgartner
- live map
tumblr_url: http://blog.cartodb.com/post/33634830768/how-we-made-the-stratos-freefall-jump-live-demo
---
Eight million people followed yesterday the YouTube live stream from the Red Bull Stratos Challenge. According to the video service, it was the largest-ever simultaneous viewing for a web audience.
As we were watching how Felix Baumgartner made the highest and fastest jump in history, we ran a live map powered by CartoDB . It featured Baumgartner location on New Mexico as he ascended to an altitude over 120,000 feet and as he rushed toward earth at a supersonic speed, and became the first man to break the sound barrier under his own power. 
This is an screenshot of the live demo coupled with a video feed while Baumgartner was ascended:

This maps tracks altitude from starting point to the landing site (blue represents the lowest altitude, while red, the highest):

This map shows the landing site:

To fetch the data from the Red Bull Stratos site, we used this Python script. It retrieves the coordinates, the vertical speed and other data coming from Baumgartner’s GPS, and uses the CartoDB API key to perform writes and updates to a CartoDB account in realtime. 
Thus, we could follow the exact position of Braumgartner —while the data live stream was not truncated, which happened often during the freefall jump. You can download the whole RAW data captured live, including the blank cells, here.
Do you want to calculate the furtherst distance travelled from the starting point? You can run these queries we’ve put together to make it easier. 
This simple setup allowed us to test real-time data visualization using CartoDB. We’ll keep developing it so all users can build this kind of live-stream maps with ease. Stay tuned. 
