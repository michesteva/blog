---
title: 'Access CartoDB from any language: an example in Python'
date: '2014-07-18T17:35:00+02:00'
tags:
- cartodb
- python
- tutorial
categories:
- 'How-to guides'
---

![Imgur](http://i.imgur.com/Egfip2G.png)

###The CartoDB Platform

Many people come to [CartoDB](http://cartodb.com/) and see the [Editor](http://docs.cartodb.com/cartodb-editor.html), our simple and easy to use tool that runs in your browser and helps you publish beautiful maps. Fewer of them discover the full range of capabilities CartoDB offers when you dig into SQL or the Platform capabilities. The [CartoDB Platform](http://docs.cartodb.com/cartodb-platform.html) is a collection of APIs that allow you to perform data manipulation, map creation, and data analysis all without ever touching the Editor. 

<!--more-->

One of the most appealing aspects of the Platform is that you can access it from any language you like. The [CartoDB APIs](http://docs.cartodb.com/cartodb-platform/sql-api.html) are simple to use and even let you run raw SQL queries, no idiosyncratic API endpoints or methods to learn. Just you, your data, and all the power of the CartoDB service. If you take a look at our [Gallery](http://cartodb.com/gallery), you will find a nice mix of maps created primarily in the Editor and others that make use of the Platform to integrate CartoDB's capabilities into complete web applications.

###An Example in Python

A few weeks ago I was asked how to push new data to CartoDB and later replace that data with a new version. There are a few ways to do this using CartoDB. One of my favorites is using our Sync Tables and a spreadsheet on Dropbox, but that is something we've covered in other [posts](http://blog.cartodb.com/post/65639747344/synced-tables-create-real-time-maps-from-data-anywhere). This user needed to be able to control the updates from their own end, without using our Editor at all. I saw this as a nice opportunity to refresh my knowledge of all our APIs. In about 2 hours of coding and a little bit of debugging I was able to put together a custom command line tool written in [Python](https://gist.github.com/andrewxhill/093c89fa45e5f657fec7).

While the library isn't a perfect example of Python code, it does demonstrate how quickly you can integrate your CartoDB account into any language you choose. I kept it very simple and linear so you can follow the methods I use to perform some key functions on CartoDB. For example, uploading a new file to CartoDB is as simple as: 

{% highlight python %}
cmd
python cartodb-utils.py import -f {{Local File Name}} -   
k {{Your CartoDB API Key}} -u {{your CartoDB Username}}
{% endhighlight %}

If you are creating examples in other languages, we'd love to hear about them. Drop us an email or shoot us a [Tweet](https://twitter.com/cartodb). If you have any questions about using CartoDB from Python or any other language, post your questions over on the [GIS StackExchange community](http://gis.stackexchange.com/questions/tagged/cartodb).
