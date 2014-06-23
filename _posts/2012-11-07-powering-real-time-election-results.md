---
layout: post
title: Powering Real-Time Election Results
date: '2012-11-07T00:37:00+01:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/35158980419/powering-real-time-election-results
---

As the world watches the results of Americans heading to the polls this November 6th, a number of options are available to them to see an track election results as they come in. 
One of these available channels comes from The Wall Street Journal, who has taken down the paywall for the election results. What makes The Wall Street Journal stand out from the rest, at least in relation to this blog, is that their data visualization team has built a real-time updatable map of the presidential, senate, house, and gubernatorial races on CartoDB that can visualize the data down to the county level.
Another can be found on The Daily Beast, which likewise has published a real time map of electoral college results.
While we are extremely proud to be working with The Wall Street Journal and The Daily Beast, and have our product be a part of such an important historical moment in America’s history, this specific deployment marks another milestone for us. 
For the first time will CartoDB be deployed on such a grand scale. In order to handle the millions of simultaneous visitors hitting the CartoDB servers, and to provide the best service possible, we’ll be using a feature that comes stock with CartoDB 2.0  integration with Amazon Cloudfront. That means that no matter how many visits or simultaneous requests the map have to handle, it will work and with no impact on performance.

Amazon Cloudfront is probably the most popular Content Delivery Network with multiple servers around the world caching data to warranty the maximum speed on delivery to the final user.
In layman’s terms, the result of this integration implies that as data comes in, it is then instantaneously cached by Cloudfront, eliminating the weight of traffic on the CartoDB server, and thus allowing for across the board better performance for your CartoDB applications. Pretty neat, huh?
But even better, if the data dynamically updates, like it does on an election night, we take care of invalidating all previous maps so that the user always sees a visualization with the latest data. Thats it the key here, CartoDB can now handle large amounts of traffic while still providing the dynamic rendering that our users love.
We are very excited about the new possibilities that this is can bring. 
