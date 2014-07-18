---
title: Election maps with the power and beauty of CartoDB
date: '2014-05-20T16:10:00+02:00'
tags:
- election maps
- cartodb
---

<img src="http://i.imgur.com/FTvfdEq.png" alt=""/>

Election maps are an interesting challenge for digital media: millions of people are awaiting the results, hitting F5 endlessly in their desktops and accessing from their mobile devices (that means: from everywhere!), at the time that data comes bit by bit, in what seems a very slow night. Receiving, processing, and publishing this data in an appealing way to offer an interactive application that enables the usable discovery and browsing of the election data is not an easy task.

But this is one of the situations where CartoDB comes to the rescue, making easy and beautiful what before was hard and -many times- ugly. With the CartoDB Platform you can easily push real time updates of your data to populate your visualizations. The CartoDB infrastructure provides all needed to serve millions of users visiting your maps. But when you mix those two things, it is recommended that you follow some guidelines to ensure optimal performance.

The key point is to avoid the continuous invalidation of the generated caches by not doing updates more than it is really needed.

### Guidelines

1. Only update data when new data is really available
2. Update your data within reason and in batch. 5 minutes seems perfect
3. Make updates with a single statement (as explained in <a href="http://blog.cartodb.com/post/53301057653/faster-data-updates-with-cartodb"> 
Faster data updates with CartoDB
</a>)
4. Make sure to use the latest version of <a href="http://developers.cartodb.com/documentation/cartodb-js.html">cartodb.js library</a>

As a bonus point, consider showing us your application before going public to check things that could be optimized.

### Some great election maps: live examples

<a href="http://gfx.sueddeutsche.de/politik/2013-09-22_Bundestagswahl_Karte/"><img src="http://i.imgur.com/7HKFjXn.gif" width="637" height="420"/></a>

<a href="http://cartodb.com/case-studies/spanish-elections/"><img src="http://i.imgur.com/8Vu7VO6.png"/></a>

### Why CartoDB is the best tool for election maps

- Real time updates
- Quick deploy times
- Easy unlimited visual styling and customization
- Built-in interactivity: data filtering, infowindows
- Seamless integration with your publication systems
- Embeddable maps: let your users republish your maps
- Easy redistribution of data in re-usable format: let your users consume the raw data you have processed

### Further resources

- <a href="http://developers.cartodb.com/tutorials/electoral_map.html">Tutorial: Map election results</a>
- <a href="https://vimeo.com/49046261">Video: Creating an election map on CartoDB</a>
- <a href="http://blog.cartodb.com/post/26837195815/the-wall-street-journals-2012-election-map-done-with">The Wall Street Journal’s 2012 election map done with CartoDB</a> and <a href="http://cartodb.com/case-studies/wsj-presidential-elections-2012/">our case study</a>
- <a href="http://blog.cartodb.com/post/62169554598/scalable-election-mapping-done-right">Scalable election mapping done right</a>

<a href="http://www.cartodb.com/signup">Sign up for a CartoDB</a> account to start testing its possibilities, or <a href="mailto:sales@cartodb.com">contact sales to let us know your needs</a>.
