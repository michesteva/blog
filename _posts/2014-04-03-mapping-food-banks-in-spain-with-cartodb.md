---
layout: post
title: Mapping food banks in Spain with CartoDB
date: '2014-04-03T15:35:00+02:00'
tags:
- cartodb
- stories
- how-to
- guide
- food banks
- spain
tumblr_url: http://blog.cartodb.com/post/81582763163/mapping-food-banks-in-spain-with-cartodb
---
We welcome Dani Latorre in this guest post to let him tell us about a little project in which he has used CartoDB as part of the development. Stay tuned for more stories like this, and if you want, just write and tell us your stories@cartodb.com

A couple of months ago I decided to look for information about food banks in Spain. After wasting a couple of hours searching, I found only information at FESBAL website (Federación Española de Bancos de Alimentos). But my objective was to collect all the information about food banks whether they were of that federation, religious organizations or totally self-managed organizations.

I don’t like charity, recently I read a Eduardo Galeano quote: “Unlike solidarity, which is horizontal and is exercised as equals, charity is practiced top-down, humiliates the recipient and never alteres one bit of power relations”. Agreeing with this quote and looking that government solidarity is low at this moment, it’s more important that someone can have a plate of food even for charity.

So I thought about putting my two cents in this front, creating a little project to map all food banks in Spain. CartoDB seemed the right tool for the job. And indeed it was! In less than 2 hours I had the raw data, I had done the map and I finished the integration with the website developed with Sinatrarb.

Let me walk you through the process.

Getting the data

I started developing a web scraper for FESBAL website with Python (using Mechanize and BeautifulSoup) to generate a CSV file with the raw data to import to a CartoDB table.

Importing the data into CartoDB



In the CartoDB dashboard I created a new table importing the CSV data file. Once imported I used CartoDB’s georeference tool to automatically georeference using the food bank’s addresses (I had to add some latitudes/longitudes manually for a few rare addresses).



Styling my visualization

After that I created the visualization from that table and played with visualization wizards. Select map marker styles, infowindows content, map tiles…

Once I finished the visualization, I embeded it on a little website created with sinatrarb, using Foundation CSS for the layout.

Using CartoDB.js

The web is also integrated with CartoDB, using SQL API to show all the food banks in a simple list and to allow visitors to add more food banks. In my opinion it’s a powerful API if you have a minimal knowledge about SQL and to handle JSON responses.

In the list only georeferenced food banks are being shown. I’m not showing those who are not yet georeferenced; so I’m using this mechanism to moderate submitted content until it gets reviewed and georeferenced.

Even if you don’t know much about Ruby, the code is pretty self explanatory:

https://gist.github.com/furilo/9954401

Adding new food banks is also quite evident with a minimum knowledge of SQL, as shown in this code snippet:

https://gist.github.com/furilo/9955356



The web can be seen in bancosdealimentos.herokuapp.com, scraping and Sinatra application code are available for free use on my Github account.
