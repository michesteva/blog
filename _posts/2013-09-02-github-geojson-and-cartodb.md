---
title: GitHub, GeoJSON and CartoDB
date: '2013-09-02T21:27:44+02:00'
tags:
- github
- geojson
- mapping
- data
categories:
- 'New features'
redirect_from:
- "/post/60102532420/github-geojson-and-cartodb/"
---

We were very excited earlier this spring by the <a href="https://github.com/blog/1528-there-s-a-map-for-that">announcement that GitHub </a>would be including interactive maps for small GeoJSON files stored in your repos. What a cool feature! It will definitely improve your repo and data management while also making it easy to share your geospatial data. If you haven’t had a chance to play with GeoJSON on GitHub on your own yet, take a look at this set of world borders inside the <a href="http://cartodb.com">CartoDB</a> repository,

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/githubpost.jpg" width="637px"/>

While the popularity of GeoJSON has grown pretty quickly on the web, these sorts of innovations are definitely going to create more GeoJSON files stored around the web. So what do you do when you want to dig into the content of one of those GeoJSON files? On CartoDB, we’ve been supporting GeoJSON imports for quite some time. You can grab the URL to a GeoJSON file and upload it to your CartoDB account in seconds.

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/githubpost2.jpg" width="637px"/>

We introduced a small improvement several weeks ago so that now, you can grab the URL of a map on GitHub and import the underlying GeoJSON into your account with ease. That should make your exploration, reuse, and sharing of geo data all the easier. While the GitHub maps are very cool, using the data in thematic maps and other visualizations can be very valuable. The power of using CartoDB is that once loaded, you now have full control to edit, style, and filter mix the data from GeoJSON files with other datasets you want to map. 

If you are looking for some fun GeoJSON to get started with, check out the <a href="https://github.com/nvkelso/natural-earth-vector">Natural Earth GitHub Repo</a>.

We hope you find it useful and happy hacking!
s