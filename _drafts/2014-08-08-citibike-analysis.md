Non-Trivial Solutions: Looking Into Citibike Data
=========
Since its inception last year, [Citi Bike](https://www.citibikenyc.com/) has been an active participant in the open data movement, prompting data enthusiasts to engage in analyzing the granular data taken from each of their 7.5 million rides. However, despite its popularity with the data community and bike riders, the company has been going through higher-than-expected costs as it [considers rate hikes](http://www.nydailynews.com/new-york/citi-bike-rates-spike-50-save-bike-sharing-program-article-1.1853120) and [additional outside investments](http://online.wsj.com/news/articles/SB10001424052702304178104579536212429157936). Although it is difficult to know the breakdown of the costs of running the program, the cost of transporting bikes between stations is likely to be significant.
Here's a closer look at how Citi Bike transfers their bikes from one location to another using some simple analysis of the information through maps.

Oh, the Places You'll Go!
--------------
Being a bike share, Citi Bike allows their riders to pick up and drop off a bike from any of their stations. Although this may seem obvious, I'd like to point out that car shares (i.e. Zipcar) generally require the users to return the vehicle to its original pickup location. As a result, Citi Bike is required to move their bikes from one location to another depending on the availability of bikes as each station. In general, one would expect have less costs the less often the company needs to move the bikes. 

Let's make an example. Bike #17310 is the most widely used bike among all the bikes in the bike share, with over 1,600 rides as of May. The chart indicates all the rides the bike has gone through: orange indicating those done by a rider and blue indicating those done by Citi Bike. In general, it looks like the bike is moved around by users in the western side of Manhattan, but moved by truck in the East Village and in Brooklyn. 
<iframe width='100%' height='520' frameborder='0' src='http://team.cartodb.com/viz/205862b2-1e55-11e4-a972-0e73339ffa50/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Since moves by trucks indicate costs, figuring out where stations are to minimize truck moves are very important. In other words, in an ideal world, we need two things to happen:

1.	On average, bikers tend to pickup and dropoff bikes in any given location.
2.	On any given period of time, all bikers don't pickup and drop off at the same locations.
3.	Trucks don't pickup or dropoff bikes unless they need to (hoping that the inventory at any station is enough of a buffer).

Which begs the question, where should one place a station not to lose money? 

Bikes Go In, Bikes Go Out
----------------
The following chart shows the commuter flow over various periods of time, through analyzing dropoffs and pickups that happened within one hour of each other. It is technically impossible to know when exactly the trucks arrived and when exactly they moved the bikes. However, more likelier than not, within a one hour time frame, a truck moved a bike from location A to B because of problems with bike inventory at any given station. These problems should indicate a general trend of where bikes are flowing from one locaton to another, minus basic maintenance work.

Using this data, we can see that the largest flows are, not surprisingly, the morning and evening weekday commute from Times Square, Penn Station, and Grand Central Station. What was surprising, though, was that Port Authority and Grand Central was so close to Bryant Park, a major corporate hub, which generated biker flow in the opposite directions. Hypothetically, one giant station at Bryant Park could potentially stay neutral (or closer to neutral) for both the morning and evening commute. Which means, ideally, the trucks should focus on getting these specific stations filled...

<iframe width='100%' height='700' frameborder='0' src='http://team.cartodb.com/viz/71381978-1d8f-11e4-82da-0e10bcd91c2b/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe> 

Where's The Action?
----------------
...which is not exactly what is happenening in the chart below. The chart below shows actual pickup and dropoff times, where there are a surprisingly large number of blinking lights in many of the stations. Blinking lights indicate that trucks are picking up and dropping off bikes in the same location, indicating an inefficiency in the system. It is also possible that many of the stations are too small given the influx of bikes, and require constant maintenance of the bike inventory by the trucks.
<iframe width='100%' height='700' frameborder='0' src='http://team.cartodb.com/viz/003bb518-1d99-11e4-9877-0edbca4b5057/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

This is just a simple example of how CartoDB could help manage your business. Get onto [CartoDB.com](http://www.cartodb.com), create a free account, and find out more about making maps like these.

