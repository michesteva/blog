---
layout: post
title: Faster data updates with CartoDB
date: '2013-06-18T22:27:00+02:00'
tags:
- SQL
- hints
- code
tumblr_url: http://blog.cartodb.com/post/53301057653/faster-data-updates-with-cartodb
---
A feature of CartoDB that makes it stand out from most other mapping platforms out there is the ability to create maps and build applications on top of data that grows and changes. The dynamic nature of the CartoDB stack is what makes it such a fun and powerful platform for so many of our users. Users that build applications or link CartoDB to their other technology, most often perform these updates and modifications through the SQL API. 

The SQL API allows you to use a library of PostgreSQL and PostGIS SQL functions to manage data and analyse data. By far though, the most common functions we see ar where users are simply adding new or updating existing records on their databases. Unfortunately, the method we see most frequently being used is also one of the most inefficient. So we thought we would take a deeper look at how to efficiently batch update or add new records to your tables. 
Faster updates
Let’s take for example the update of election night election maps for all 3100 counties in the United States. First, here is how we will UPDATE a single county,
https://gist.github.com/anonymous/5814375
The UPDATE causes the database to do a table scan, finds the appropriate record(s) to update and finishes, nothing special there. So now, what happens when we perform three UPDATEs?
https://gist.github.com/anonymous/5814389
Well, in fact, there are three table scans now. If you can’t tell, our UPDATE just got really slow! If you are regularly updating hundreds or thousands of records, this just isn’t going to be a fun process. The same operation can be rewritten to scan the table only once while joining it against the set of new values:
https://gist.github.com/anonymous/5814404
Pretty cool, right? So instead of three table scans, we have reduced it down to only one. If you were updating 3100 records instead of three, your query would be approximately 3100x faster! 

Faster inserts
The same method can be used to perform more efficient INSERTs into your tables. The INSERT version of the optimization wont squeeze as much of a performance boost, but it will be better none-the-less. Let’s take a look at how you perform a batch INSERT (notice that INSERTs don’t require you to name the variables like UPDATEs),
https://gist.github.com/anonymous/5814469
The UPDATE/INSERT double-whammy
Now, what about applications that want to UPDATE some records and INSERT some new records at the same time? In the inefficient implementation, we would first run the UPDATE and the INSERT as two distinct queries, taking two complete table scans. There is actually a really neat approach that some applications use to combine the two statements into one and thus also reducing table scans down to one at the same time. The approach works by running the UPDATE and then INSERTing only the records that were not involved in the UPDATE. 
An example is maintaining a table of last access date from IP addresses. New IP addresses (not seen before) require an INSERTion, while already known addresses need an UPDATE.  This kind of operation is also known as an “upsert”.  
Let’s take a look at an example using a CTE to perform such an operation with a single record and a single table scan:
https://gist.github.com/anonymous/5814488
To get the same, single table scan performance with a batch upsert, we can write the query as follows, 
https://gist.github.com/anonymous/5814504
Pretty interesting! We know that many of you are updating data constantly. If you aren’t already finding some of these optimizations on your own, we hope this helps you get your applications in top condition. As always, if you have questions, feel free to drop a line in our community thread so we can all figure out the right answers together!
 
