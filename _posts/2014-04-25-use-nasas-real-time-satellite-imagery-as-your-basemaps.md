---
layout: post
title: Use NASA's real-time satellite imagery as your basemaps in CartoDB
date: '2014-04-25T13:43:00+02:00'
tags: []
tumblr_url: http://blog.cartodb.com/post/83808248101/use-nasas-real-time-satellite-imagery-as-your-basemaps
---
There is no doubt that we live on an ever-changing planet. Earth Observation provides a great tool to monitor and track these changes, ranging from climate transformations to others caused by human impact. Among the different organizations monitoring the earth, NASA is one of the most prominent. With their Earth Observation satellites they take daily snapshots of Earth and make them freely available on the Internet. Together with ESA’s Image of the Week, their Twitter account is one of our favorites.
Can you imagine having this near real-time satellite imagery to use as basemaps in your visualizations on CartoDB? Wouldn’t that be cool? The good folks at NASA Global Imagery Browse Services think so, too, and starting today we all can use their satellite imagery as basemaps in CartoDB.
One of the most amazing opportunities these Earth Observations Satellites give you is the ability to display your own data or annotations with images from a particular date. You can get a picture of the entire earth, selecting any particular date from the last 2 years. This is now possible because of the great service provided by the The Global Imagery Browse Services (GIBS) from NASA, and we are thrilled to announced that we have made all of it available on CartoDB.

About the data
The data by the GIBS service has a latency period of 5 to 9 hours from satellite image acquisition to public access and consumption, and there are two images available for you to use right now on CartoDB: one for the day and one for the night.
That’s right: You can select any data recorded during the last 2 years. Do you want to create a map from a storm which happened a month ago in China? Just select the basemap for that day. A fire which happened last summer in Europe? Got it. The evolution of persistent ice in Lake Superior as spring comes? Check.

Amazing possibilities lie ahead
The possibilities of combining this imagery with your data are endless and amazing. This makes it perfect for visual storytelling and Earth analysis: scientists, journalists, and storytellers around the world can add a layer of extremely valuable data to their visualizations, and mix it with their own data or any other available open data to create insightful maps.
With other great startups working on providing a full image of the earth at higher resolutions, we could not be more excited about how this will expand the visualizations you will be able to make with CartoDB and these datasets.
How to use it in CartoDB
Using NASA imagery as your basemap is as simple as any other feature on CartoDB. It will take you just seconds to be up and running. In Map View, click on the basemap selector, select “Add yours”, and there you’ll see a NASA tab. In this tab you will have a date selector, where you will be able to choose the day you want to use, as well as a day/night option. It is as simple as this:

Check out the big difference between Google Maps and NASA Terra.
Next steps
There are many more image products available through the NASA GIBS service that can be used on CartoDB, like sea temperature, ice, etc. You can use them by setting up the Z/X/Y basemap, following their instructions here. What about deciding where to go to the beach depending on the temperature of the water? In the next weeks we will keep integrating more and more layers for easy access.
