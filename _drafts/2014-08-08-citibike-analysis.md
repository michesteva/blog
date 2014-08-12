Non-Trivial Solutions: Looking Into Citi Bike Data
=========
Since its inception last year, [Citi Bike](https://www.citibikenyc.com/) has been an active participant in the open data movement, prompting data enthusiasts to engage in analyzing the granular data taken from each of their 7.5 million rides. However, despite its popularity with the data community and bike riders, the company has been going through higher-than-expected costs as it [considers rate hikes](http://www.nydailynews.com/new-york/citi-bike-rates-spike-50-save-bike-sharing-program-article-1.1853120) and [additional outside investments](http://online.wsj.com/news/articles/SB10001424052702304178104579536212429157936). Although it is difficult to know the breakdown of the costs of running the program, the cost of transporting bikes between stations is likely to be significant.
Here's a closer look at how Citi Bike transfers their bikes from one location to another using some simple analysis of the information through maps.

Oh, the Places You'll Go!
--------------
Being a bike share, Citi Bike allows their riders to pick up and drop off a bike from any of their stations. Although this may seem obvious, I'd like to point out that car shares (i.e. Zipcar) generally require the users to return the vehicle to its original pickup location. As a result, to make sure bikes are available where needed, Citi Bike is required to move their bikes from one location to another depending on the availability of bikes as each station. In general, one would expect to have fewer costs the less often the company needs to move the bikes. 

Let's take one example. Bike #17310 is the most widely used bike among all the bikes in the bike share, with over 1,600 rides as of May. The visualization indicates all the rides the bike has gone through: red indicating trips by a rider and blue indicating trips done by a Citi Bike truck. In general, it looks like the bike is moved around without any extra help in the western part of Manhattan, but frequently needs to be moved by truck in the East Village and Brooklyn. Here's an example of how you can do this [within SQL](https://gist.github.com/tychung84/68add071768cf95d62b0). 
<iframe width='100%' height='520' frameborder='0' src='http://team.cartodb.com/viz/205862b2-1e55-11e4-a972-0e73339ffa50/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

From a business standpoint, moves by bikers are free as storage of their bikes in any available station is a major benefit of their service. On the other hand, the transportation, pickup, and docking of bikes creates additional expenses for the business. To minimize costs, it is important to figure out ways for the riders to do the majority of the moving, while the trucks move as few bikes as possible. For this to happen, in an ideal world, stations should be placed with consideration for the following three factors:

1.	On average, bikers tend to pickup and dropoff bikes at the same rate in any given location, requiring little maintenance for trucks.
2.	On any given period of time, a large number of bikers don't pickup or drop their bikes in a single location, requiring trucks to assist in maintaining their inventory.
3.	Trucks don't transfer bikes unless they need to, as the stations hold an adequent amount of inventory according to their needs.

The worst case scenario is where bikes need to be constantly ferried across the city due to inventory mismanagement. If this is spread among many stations, this will cost Citi Bike a significant amount of money to run their program. This begs the question, where should one place a station not to lose money? 

Bikes Go In, Bikes Go Out
----------------
The following visualization shows the commuter flow over various periods of time, through [analyzing dropoffs and pickups done by trucks that occured within one hour of each other](https://gist.github.com/tychung84/e9726e6ee155e4b7cdb6 ). It is technically impossible to know when exactly the trucks arrived and when exactly they moved the bikes. However, more likelier than not, within a one hour time frame, a truck moved a bike from location A to B because of problems with bike inventory at any given station. These problems should indicate a general trend of where bikes are flowing from one locaton to another, minus basic maintenance work.

Using this data, we can see that the largest flows are, not surprisingly, the morning and evening weekday commute from Times Square, Penn Station, and Grand Central Station. What was surprising, though, was that Port Authority and Grand Central was so close to Bryant Park, a major corporate hub, which generated biker flow in the opposite directions. Hypothetically, one giant station at Bryant Park could potentially stay neutral (or closer to neutral) for both the morning and evening commute. Which means, ideally, the trucks should focus on getting these specific stations filled...

<iframe width='100%' height='700' frameborder='0' src='http://team.cartodb.com/viz/71381978-1d8f-11e4-82da-0e10bcd91c2b/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe> 

Where's The Action?
----------------
...which is not exactly what is happenening in the chart below. The visualization below shows [actual pickup and dropoff times](https://gist.github.com/tychung84/ce11156e3fbb92b1ee9c), where there are a surprisingly large number of blinking lights in many of the stations. One notable example is the stations around Grand Central Station, around 42nd and Park Avenue. There, you can see alternating red and blue lights indicating that trucks constantly are ferring bikes in and out of a single station. This, to say the least, is pretty inefficient -- the bikers could do the work without much help. It is possible that many of the stations are too small given the influx of bikes, and require constant maintenance of their inventory. However, given that we do not have all the details on the movement of the trucks, it is also very likely that more activity is going on at these locations than just trucks.
<iframe width='100%' height='700' frameborder='0' src='http://team.cartodb.com/viz/003bb518-1d99-11e4-9877-0edbca4b5057/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

This is just a simple example of how CartoDB could help manage your business. Get onto [CartoDB.com](http://www.cartodb.com), create a free account, and find out more about making maps like these.

