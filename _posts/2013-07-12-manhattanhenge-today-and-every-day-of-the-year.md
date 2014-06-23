---
layout: post
title: Manhattanhenge today and every day of the year!
date: '2013-07-12T20:56:00+02:00'
tags:
- Manhattanhenge
- Vecnik
- OSM
tumblr_url: http://blog.cartodb.com/post/55276358111/manhattanhenge-today-and-every-day-of-the-year
---

Today is a famous day in NYC, or more specifically in Manhattan, it is one of two times a year that the sun aligns with the midtown street grid in what is called, Manhattanhenge. Anyone who has been to NYC or even looked at a map of the city knows it is not a single grid. We got thinking though,  every neighborhood across the five boroughs has a different pattern of street grids and therefore must have its own henge days! To test our idea, we built a little interface so we can all explore where these mini-henges happen for every sunset throughout the year. Check out what we came up with over at nychenge.com or read more over on the WNYC website.
There is a lot of information on Wikipedia about Manhattanhenge, but with this visualization we hope to help you explore and learn about the phenomenon and maybe see the NYC street grids in a whole new light. Maybe you will carefully study this map and use the information it contains to impress your next date (if you end up getting married, make sure to send us a tweet)! Or maybe you can avoid the blinding sun over the commuting traffic jam on a critical few days of the year. Maybe you are a trendsetter, so you can start a new day like GreenpointHenge or ParkslopeHenge at the next meeting of Brooklyn Vermiculturists.

You can also find your own favorite henge date, center the map on it, and use the embed link to share it on your own sites!
Why we have done this? Well, first of all because we wanted to use the new CartoDB 2.1 (released yesterday) to start making some fun projects. We had this one in our back pocket since Andrew Hill first demoed it at the US State of the Map conference and the timing is now perfect. You can watch the video for a bit more behind the scenes story and see why it was a fun experiment.
What’s next? We want to add more cities, there is no reason why only New York should have a Manhattanhenge. We want to see a MissionHenge for SF, or a LatinaHenge for Madrid. There is also some other functionality we would love to include, like “Which day is there an event including my street?” Those things should not be too hard, we just didn’t have time today!
We hope you enjoy it and share it on Twitter, we might be doing some Twitter Maps about it ;)
If you are interested in how we built it, here are a few more of the details:
Data: The data used for this visualization is Open Street Maps (OSM), the Wikipedia of maps. The beautiful thing about OSM is not only that anybody can contribute, but that the data is all freely available. You can download it, import it in a tool like CartoDB, and start using to make your own maps right away.
Technology: Of course we needed to calculate the alignment of the sun, for that we are using the open source SunCalc library. Finally, for mapping technology there is a fun mix of technologies, made up of our vector rendering engine Vecnik, CartoDB, and our use of the CartoDB SQL API.
Code: As always, everything here is open source, grab it over on GitHub.
