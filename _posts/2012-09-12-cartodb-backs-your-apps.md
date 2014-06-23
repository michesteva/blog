---
layout: post
title: CartoDB backs your apps
date: '2012-09-12T21:46:00+02:00'
tags:
- backbone
- example
- libraries
- data
tumblr_url: http://blog.cartodb.com/post/31412595373/cartodb-backs-your-apps
---
From its very beginning, CartoDB has always been about making it easier for you to create map driven applications online. 
In that effort, we have developed numerous libraries and examples meant to help you take your maps further. Take the  CartoDB Backbone library. The backbone library gives you a super simple Javascript wrapper to connect, query, and use data you host on CartoDB from within your applications. So pretend you wanted to create an application about New York City parks.
<![CDATA[// <![CDATA[
// <![CDATA[
// <![CDATA[
// <![CDATA[

// ]]]]]]]]]]><![CDATA[><![CDATA[><![CDATA[><![CDATA[>
// ]]]]]]]]><![CDATA[><![CDATA[><![CDATA[>
// ]]]]]]><![CDATA[><![CDATA[>
// ]]]]><![CDATA[>]]>In the above example, I connected to a table containing publicly available shapes of NYC Parks and found the 10 largest in size. Simple right? The CartoDB Backbone libary connects through CartoDB’s SQL API, which means you can use it to mine endless data from your account and drive interaction and interfaces on your site. 
This can be great for building things like mobile applications or data exploration tools. In my personal use of CartoDB, I use a combination of the CartoDB Backbone library and the CartoDB Leaflet libraries all the time. The most amazing part of that duo is the ability to create data-driven applications that can be hosted entirely on GitHub Pages (example) or from my DropBox public folder. 
