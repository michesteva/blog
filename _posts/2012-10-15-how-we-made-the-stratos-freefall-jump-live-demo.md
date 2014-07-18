---
title: How we made the stratos freefall jump live demo
date: '2012-10-15T13:05:00+02:00'
tags:
- cartodb
- stratos
- Felix Braumgartner
- live map
---

Eight million people followed yesterday the YouTube live stream from the <a href="http://www.redbullstratos.com/">Red Bull Stratos Challenge</a>. According to the video service, it was the largest-ever simultaneous viewing for a web audience.

As we were watching how Felix Baumgartner made the highest and fastest jump in history, we ran a <a href="http://jatorre.github.com/stratos/index.html">live map</a> powered by CartoDB . It featured Baumgartner location on New Mexico as he ascended to an altitude over 120,000 feet and as he rushed toward earth at a supersonic speed, and became the first man to break the sound barrier under his own power. 

This is an screenshot of the live demo coupled with a video feed while Baumgartner was ascended:

<a href="http://jatorre.github.com/stratos/index.html"><img src="http://cartodb.s3.amazonaws.com/tumblr/posts/strato1.png"/></a>

This maps tracks altitude from starting point to the landing site (blue represents the lowest altitude, while red, the highest):

<img class="nomargin" src="http://cartodb.s3.amazonaws.com/tumblr/posts/legend_stratos.png"/><iframe frameborder="0" height="500" src="https://viz2.cartodb.com/tables/stratos/embed_map" width="637"></iframe>

This map shows the landing site:

<a href="http://jatorre.github.com/stratos/index.html"><img src="http://cartodb.s3.amazonaws.com/tumblr/posts/strato3.png"/></a>

To fetch the data from the Red Bull Stratos site, we used this <a href="https://gist.github.com/3891365">Python script</a>. It retrieves the coordinates, the vertical speed and other data coming from Baumgartner's GPS, and uses the <a href="http://developers.cartodb.com/documentation/cartodb-apis.html">CartoDB API key</a> to perform writes and updates to a CartoDB account in realtime. 

Thus, we could follow the exact position of Braumgartner &#8212;while the data live stream was not truncated, which happened often during the freefall jump. You can download the whole RAW data captured live, including the blank cells, <a href="https://javi.cartodb.com/tables/stratos/public/">here</a>.

Do you want to calculate the furtherst distance travelled from the starting point? You can run these <a href="https://gist.github.com/3891312">queries</a> we've put together to make it easier. 

This simple setup allowed us to test real-time data visualization using CartoDB. We'll keep developing it so all users can build this kind of live-stream maps with ease. Stay tuned. 
