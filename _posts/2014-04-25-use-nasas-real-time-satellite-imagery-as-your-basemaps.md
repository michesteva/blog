---
title: Use NASA's real-time satellite imagery as your basemaps in CartoDB
date: '2014-04-25T13:43:00+02:00'
categories:
- 'How-to guides'
---

There is no doubt that we live on an ever-changing planet. Earth Observation provides a great tool to monitor and track these changes, ranging from climate transformations to others caused by human impact. Among the different organizations monitoring the earth, NASA is one of the most prominent. With their Earth Observation satellites they take daily snapshots of Earth and make them freely available on the Internet. Together with <a href="http://www.esa.int/spaceinimages/Sets/Earth_observation_image_of_the_week">ESA’s Image of the Week</a>, <a href="http://twitter.com/@NASA_EO">their Twitter account is one of our favorites</a>.

**Can you imagine having this near real-time satellite imagery to use as basemaps in your visualizations on CartoDB?** Wouldn’t that be cool? The good folks at <a href="https://earthdata.nasa.gov/about-eosdis/system-description/global-imagery-browse-services-gibs">NASA Global Imagery Browse Services</a> think so, too, and starting today we all can use their satellite imagery as basemaps in CartoDB.

One of the most amazing opportunities these Earth Observations Satellites give you is the ability to display your own data or annotations with images from a particular date. You can get a picture of the entire earth, selecting any particular date from the last 2 years. This is now possible because of the great service provided by the The Global Imagery Browse Services (GIBS) from NASA, and we are thrilled to announced that we have made all of it available on CartoDB.

<img alt="image" src="http://i.imgur.com/H20Qoc2.png" title="NASA GIBS at CartoDB"/>

### About the data

The data by the <a href="https://wiki.earthdata.nasa.gov/display/GIBS/2014/04/24/Imagery+Now+Available+in+Web+Mercator+Map+Projection">GIBS service</a> has a latency period of 5 to 9 hours from satellite image acquisition to public access and consumption, and there are two images available for you to use right now on CartoDB: one for the day and one for the night.

That’s right: **You can select any data recorded during the last 2 years**. Do you want to create a map from a storm which happened a month ago in China? Just select the basemap for that day. A fire which happened last summer in Europe? Got it. The evolution of persistent ice in Lake Superior as spring comes? Check.

<img alt="image" src="http://i.imgur.com/IQqWTXM.png"/>

### Amazing possibilities lie ahead

**The possibilities of combining this imagery with your data are endless and amazing.** This makes it perfect for visual storytelling and Earth analysis: scientists, journalists, and storytellers around the world can add a layer of extremely valuable data to their visualizations, and mix it with their own data or any other available open data to create insightful maps.

With <a href="http://www.nytimes.com/2014/03/17/technology/start-ups-aim-to-conquer-space-market.html?_r=0">other great startups</a> working on providing a full image of the earth at higher resolutions, we could not be more excited about how this will expand the visualizations you will be able to make with CartoDB and these datasets.

### How to use it in CartoDB

Using NASA imagery as your basemap is as simple as any other feature on CartoDB. It will take you just seconds to be up and running. In Map View, click on the basemap selector, select “Add yours”, and there you’ll see a NASA tab. In this tab you will have a date selector, where you will be able to choose the day you want to use, as well as a day/night option. It is as simple as this:

<img alt="image" src="http://cartodb.s3.amazonaws.com/tumblr/posts/nada_gibs_cartodb.gif" width="637"/>

Check out the big difference between Google Maps and NASA Terra.

### Next steps

There are many more image products available through the NASA GIBS service that can be used on CartoDB, like sea temperature, ice, etc. You can use them by setting up the Z/X/Y basemap, following <a href="https://wiki.earthdata.nasa.gov/display/GIBS/2014/04/24/Imagery+Now+Available+in+Web+Mercator+Map+Projection">their instructions here</a>. What about deciding where to go to the beach depending on the temperature of the water? In the next weeks we will keep integrating more and more layers for easy access.
