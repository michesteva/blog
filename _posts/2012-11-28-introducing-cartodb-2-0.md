---
title: 'Introducing CartoDB 2.0'
date: '2012-11-28T22:21:03+01:00'
categories:
- 'New features'
---

This **Thursday, November 29th**, we will be releasing our biggest update yet to CartoDB. What this means for you is that there will be a period of approximately **6 hours downtime** on the **29th at 2AM EST** where your dashboard will not be accessible (We will post again once the process is complete). This does **NOT **mean however, that your maps and visualizations will go offline. We’re upgrading in such a way as to keep all your work available. 

<a href="http://cartodb.com" title="CartoDB"><img alt="CartoDB 2.0" src="http://cartodb.s3.amazonaws.com/tumblr/posts/blog_header.png"/></a>

CartoDB 2.0 is a big update, and some of the features we’ve built in are as follows. 

- **Mapbox and other base maps available:** Added support for MapBox out of the box, and now allow you to easily import 3rd party base layers.
- **More visualizations:** With CartoDB 1.0 we introduced simple points, bubble maps, and choropleths, 2.0 introduces density maps renderable as either hexagons or squares. And more importantly, a base to make many more.
- **Customizable Infowindows:** You can now choose from a number of styles to make your infowindows fit in better with your maps. Chose from light or dark, and a handful of colors. Internally is works as HTML, providing a lot of flexibility.
- **New Code Editor:** Completely redesigned the SQL and CartoCSS editor for easier and more complex data analysis and map styling.
- **Underneath the hood:** CartoDB is now fully integrated with CDN technology, meaning faster and more scalable map distribution.
- **Easier updatability:** Starting with 2.0, we’ll be able to add in new features much more easily, and will continue to add in additional functionality, styles, themes and more well into the future.
- **Styles:** We have upgraded to the latest version of CartoCSS. There are new styles available + new dynamic attributes for styles, and you’ll now be able to map column to value / color, as well as use your own icons as urls. 
- **Better sharing experience:** Include or remove your map's name or description, add a search box, and you can share it either as an embeddable iframe, url, or tile json.
- **Introducing Social Maps:** Maps now come with a built in toggle to share on facebook, and twitter.
- **New JavaScript API:** the client side library [cartodb.js](https://github.com/CartoDB/cartodb.js) has been developed to extend your visualizations much more easily than before.


Additionally, we'd like to add that we have some great plans for the future of CartoDB. The  most immediate is the addition of <a href="https://github.com/CartoDB/torque" target="_blank">Torque</a>, which will be available from within the CartoDB interface. 

The most fundamental change though is probably the refactoring that has taken place which now allows us to build more and more visualization easily and safely into CartoDB. Of course with every big change there is the possibility we might have introduced bugs in the system, we will be very closely monitoring the platform over the coming weeks and we will be ready to answer your questions quickly at <a href="mailto:support@cartodb.com">support@cartodb.com</a>.

We hope you'll love 2.0 and look forward for your feedback. Happy mapping! 
