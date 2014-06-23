---
layout: post
title: Got files? We've got a Import API
date: '2013-06-28T17:03:00+02:00'
tags:
- demo
- tutorials
- APIs
tumblr_url: http://blog.cartodb.com/post/54101913823/got-files-weve-got-a-import-api
---
We often get questions and support tickets from people that want to upload files to CartoDB without having to do it through the browser. For these people, we needed a file API, where they could point a script or application to upload a file and have it turned into a table. Today, we wanted to show you our Import API and a few helpful little tools that you can use to get started.
Import API
The API is pretty straightforward, all you need to do is post a file over HTTPS to our endpoint, including your API Key as a parameter. We have prepared a shell script (grab it here) so you can easily import files from the command line. To run it, you simply do this,
http://gist.github.com/jatorre/5885430
You can use a local file or, if you have publicly available files hosted elsewhere, you can use the URL as the file_name parameter. So now, to link it together in a few steps, let’s create a quick visualization.
Visualizing fires in SE Asia

We downloaded the data from the video above from the EOSDIS site from NASA.


Update! Import API integrated on Mac Finder.
Since we announced the new API we have seen already some curious applications of it. For example Galen Evans  sent us this nice integration of the new API within the Mac finder.


Checkout this small demo video:

