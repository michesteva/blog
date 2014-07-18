---
title: 'Map of the Week: An Odyssey.js story by Loomstate'
date: '2014-07-11T13:24:42+02:00'
tags:
- mapoftheweek
- cartodb
- odyssey
- loomstate
- interactivestory
---

Welcome our own <a href="https://twitter.com/lauraagzmn">Laura Guzman</a> to our Map of the Week series. Guzman is a Technical Intern in our New York office, and she teamed up with sustainable clothing company <a href="http://www.loomstate.org">Loomstate</a> to build an <a href="http://blog.cartodb.com/post/91149570719/odyssey-js-new-open-source-tool-to-weave-interactive">Odyssey.js</a> visualization of how Loomstate’s newest product is made.

<a href="http://cartodb.github.io/odyssey.js/visualizations/loomstate/)%20to%20find%20out%20more"><img src="http://i.imgur.com/YBH8KSM.jpg"/></a>

Loomstate is an organic cotton clothing brand founded in 2004 by Scott Mackinlay-Hahn and Rogan Gregory in NYC. For their newest product, profiled here, they partnered with <a href="http://tsdesigns.com/">TS Designs</a> to produce a collection of t-shirts that are grown and sewn entirely in America.  Loomstate knows the people behind each step of the process, from the cotton farm all the way to the dairy farm (follow the <a href="http://cartodb.github.io/odyssey.js/visualizations/loomstate/">journey</a> to find out more), and they are very proud to share our supply chain in full transparency here.

### The story

The average cotton t-shirt is a product of a global journey thousands of miles long from cotton harvest, through multiple countries for thread-knitting and cloth-cutting before reaching a store shelf. This journey, and the average tee-making process, is not always transparent, nor is it always sustainable.

That is where <a href="http://www.loomstate.org">Loomstate</a> comes in. Loomstate is committed making quality clothing to create a sustainable future. Their focus is on the long-term relationships with the factories they choose to use, the farms they choose to source from and the communities they choose to work with.  Loomstate seeks long-term purchasing agreements with organic cotton farms, in order to support the sustainability and resiliency of their communities. This particular map documents the story of Loomstate’s most traceable tee, which is grown and sewn in America, all the way from the cotton farm, to the cutting floor, and finally to a glass of milk. <a href="http://cartodb.github.io/odyssey.js/visualizations/loomstate/">Follow the journey here</a>.

To tell the story of Loomstate’s most traceable tee, we used <a href="http://cartodb.github.io/odyssey.js/">Odyssey.js</a>, an open-source <a href="http://blog.cartodb.com/post/91149570719/odyssey-js-new-open-source-tool-to-weave-interactive">storytelling tool by CartoDB</a>. The Odyssey.js mapping platform allows Loomstate to present their detailed story. It fosters more transparency and storytelling than would normally be possible with just video, image and text.  It allows Loomstate to educate their customers on their purchase, and provides them with the information needed to feel good about what they are wearing.

### Using Odyssey.js

The visualization was created straight from the Odyssey.js Sandbox, using the “Slides” option. Each step of the tshirt-making process became a slide of its own, centered around the location where the step of the process took place. Take a look at the screenshot below to see how it was staged in the Odyssey.js Sandbox, before we get into the process.

<img src="http://i.imgur.com/kyNAt7w.png" alt="Imgur"/>

### Gathering locations &amp; pulling together a story

The first step was to identify all of the locations in the process we’d like to feature. Loomstate provided the locations and steps of the tshirt-making process. Once I had these, it was just a matter of finding their coordinates to put into the Odyssey.js Sandbox. To find the latitude/longitude coordinates, I used a geocoder on the addresses that Loomstate provided.

Once I had the coordinates for each location, I created a marker using the “Add” function in the Sandbox, and placed it where each step of the process was. This meant manually editing the coordinates created by my adding a marker. I then tested different center and zoom parameters for the slide, settling on those that were the clearest.

Next up, working with Loomstate I added more content. We drafted a list of steps, wrote some text to go along with the locations, and included images to illustrate the process. Under each slide (demarcated by a “#”) and its respective zoom, coordinate, and marker positions, we placed the text and image story.

### Using a vizjson

In order to give a coherence to the whole process, and illustrate the path from beginning to finish, we added a vizjson. To do so, we first created a table with each latitude/longitude location included in the steps of the process. After importing this table into CartoDB, we ran a basic SQL query to join them into a linestring. It looked like this:

{% gist Kathypennacchio/85e3beeab601cc6d7612 %}

<img src="http://i.imgur.com/p94lR17.png" alt="Imgur"/>

We loaded that into the config block of our Odyssey.js visualization by adding a line that looks like:

{% gist Kathypennacchio/d9406b5e0937b9eb2ddd %}

To get the URL necessary, we clicked “Share” in the visualization, and copy/pasted the API link in to the Odyssey.js Sandbox.

With that, the basics of the map were ready to go!

### Cleaning it up

To finish up the visualization, we created custom HTML and CSS to have greater control over the design. To do this, we just clicked the share button from the Odyssey.js Sandbox, edited the HTML, added our CSS, and uploaded it to <a href="https://pages.github.com/">GitHub Pages</a>.

Check out our other <a href="http://blog.cartodb.com/tagged/map-of-the-week">Maps of the Week</a>, and go to <a href="http://cartodb.github.io/odyssey.js/">Odyssey.js</a> to start creating your own map-based interactive stories. Have you done one already? Share it with us on <a href="https://twitter.com/search?src=typd&amp;q=%23odyssey.js">Twitter: #Odyssey.js</a>.
