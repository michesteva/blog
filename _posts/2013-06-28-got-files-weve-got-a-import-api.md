---
title: Got files? We've got a Import API
date: '2013-06-28T17:03:00+02:00'
tags:
- demo
- tutorials
- APIs
---

We often get questions and support tickets from people that want to upload files to CartoDB without having to do it through the browser. For these people, we needed a file API, where they could point a script or application to upload a file and have it turned into a table. Today, we wanted to show you our Import API and a few helpful little tools that you can use to get started.

**Import API**

The API is pretty straightforward, all you need to do is post a file over HTTPS to our endpoint, including your API Key as a parameter. We have prepared a shell script (<a href="https://github.com/CartoDB/cartodb/blob/master/script/cdb_import.sh" target="_blank">grab it here</a>) so you can easily import files from the command line. To run it, you simply do this,

{% gist jatorre/5885430 %}

You can use a local file or, if you have publicly available files hosted elsewhere, you can use the URL as the file_name parameter. So now, to link it together in a few steps, let's create a quick visualization.

**Visualizing fires in SE Asia**

<iframe frameborder="0" height="358" src="http://player.vimeo.com/video/69321898" width="637"></iframe>

We downloaded the data from the video above from the <a href="http://earthdata.nasa.gov/data/near-real-time-data/firms/active-fire-data">EOSDIS site</a> from NASA.

<iframe frameborder="0" height="340px" src="http://osm2.cartodb.com/tables/southeast_asia_48h/embed_map?title=false&amp;description=true&amp;search=false&amp;shareable=false&amp;cartodb_logo=true&amp;scrollwheel=true&amp;sql=&amp;zoom=3&amp;center_lat=5.703447982149503&amp;center_lon=107.22656249999999" width="637px"></iframe>

**Update! Import API integrated on Mac Finder.**

Since we announced the new API we have seen already some curious applications of it. For example <a href="http://twitter.com/galen_evans">Galen Evans</a>  sent us this <a href="http://www.galenevans.org/cartodb/osx/api/2013/07/01/CartoDB_Import_API_OSX_Service.html#GrowlNotify">nice integration of the new API within the Mac finder.</a>

<img alt="image" src="http://www.galenevans.org/images/cartodb_osx_service.png"/>

<img alt="image" src="http://www.galenevans.org/images/grunt_cartodb_import.png"/>

Checkout this small demo video:

<iframe class="vine-embed" frameborder="0" height="600" src="https://vine.co/v/haTWDx12K2Y/embed/simple" width="600"></iframe>

<script charset="utf-8" src="//platform.vine.co/static/scripts/embed.js" type="text/javascript"></script>
