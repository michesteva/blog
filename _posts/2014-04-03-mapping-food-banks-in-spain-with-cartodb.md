---
title: Mapping food banks in Spain with CartoDB
date: '2014-04-03T15:35:00+02:00'
tags:
- cartodb
- stories
- how-to
- guide
- food banks
- spain
categories:
- 'Customer stories'
---

We welcome <a href="https://twitter.com/dani_latorre">Dani Latorre</a> in this guest post to let him tell us about a little project in which he has used CartoDB as part of the development. Stay tuned for more stories like this, and if you want, just write and tell us your stories@cartodb.com

A couple of months ago I decided to look for information about food banks in Spain. After wasting a couple of hours searching, I found only information at FESBAL website (Federación Española de Bancos de Alimentos). But my objective was to collect all the information about food banks whether they were of that federation, religious organizations or totally self-managed organizations.

I don’t like charity, recently I read a Eduardo Galeano quote: "Unlike solidarity, which is horizontal and is exercised as equals, charity is practiced top-down, humiliates the recipient and never alteres one bit of power relations". Agreeing with this quote and looking that government solidarity is low at this moment, it's more important that someone can have a plate of food even for charity.

So I thought about putting my two cents in this front, creating a little project to map all food banks in Spain. CartoDB seemed the right tool for the job. And indeed it was! In less than 2 hours I had the raw data, I had done the map and I finished the integration with the website developed with Sinatrarb.

Let me walk you through the process.

### Getting the data

I started developing a <a href="https://github.com/danilat/bancos-de-alimentos/blob/master/fesbal.py">web scraper for FESBAL</a> website with Python (using <a href="http://mechanize.rubyforge.org/">Mechanize</a> and <a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a>) to generate a CSV file with the raw data to import to a CartoDB table.

### Importing the data into CartoDB

<img src="http://i.imgur.com/Z4Vr4AY.png" alt=""/>

In the CartoDB dashboard I created a new table importing the CSV data file. Once imported I used CartoDB's georeference tool to automatically georeference using the food bank's addresses (I had to add some latitudes/longitudes manually for a few rare addresses).

<img src="http://i.imgur.com/ZFiibmt.png" alt=""/>

### Styling my visualization

After that I created the visualization from that table and played with visualization wizards. Select map marker styles, infowindows content, map tiles…

Once I finished the visualization, I embeded it on a little website created with <a href="http://www.sinatrarb.com/">sinatrarb</a>, using <a href="http://foundation.zurb.com/">Foundation CSS</a> for the layout.

### Using <a href="http://developers.cartodb.com/documentation/cartodb-js.html">CartoDB.js</a>

The web is also integrated with CartoDB, using <a href="http://developers.cartodb.com/documentation/sql-api.html">SQL API</a> to show all the food banks in a simple list and to allow visitors to add more food banks. In my opinion it's a powerful API if you have a minimal knowledge about SQL and to handle JSON responses.

In the list only georeferenced food banks are being shown. I'm not showing those who are not yet georeferenced; so I'm using this mechanism to moderate submitted content until it gets reviewed and georeferenced.

Even if you don't know much about Ruby, the code is pretty self explanatory:

<div class="gist"><a href="https://gist.github.com/furilo/9954401">https://gist.github.com/furilo/9954401</a></div>

Adding new food banks is also quite evident with a minimum knowledge of SQL, as shown in this code snippet:

<div class="gist"><a href="https://gist.github.com/furilo/9955356">https://gist.github.com/furilo/9955356</a></div>

<img src="http://i.imgur.com/goRd1UL.png" alt="bancosdealimentos.herokuapp.com"/>

The web can be seen in <a href="http://bancosdealimentos.herokuapp.com/">bancosdealimentos.herokuapp.com</a>, scraping and Sinatra application code are available for free use on my <a href="https://github.com/danilat/bancos-de-alimentos">Github account</a>.
