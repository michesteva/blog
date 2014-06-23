---
layout: post
title: 'CartoDB on iOS: Interactive 3D globe with WhirlyGlobe-Maply for native apps'
date: '2013-06-14T00:09:00+02:00'
tags:
- ios
- 3dglobe
- iphone
- ipad
tumblr_url: http://blog.cartodb.com/post/52898364065/cartodb-on-ios-interactive-3d-globe-with
---
Today we hear a fun guestpost from Steve Gifford of Mousebird Consulting. Steve has done some very interesting work with maps using iOS, 3D globes, and CartoDB. Today, he tells us a bit about that work.
Way back I whipped up a little demo with CartoDB.  For various reasons it seemed like a good idea to refresh that.  Plus playing with their interface is just FUN.
Anyway, as a little background, I make the WhirlyGlobe-Maply open source toolkit for iOS (iPad, iPhone).  It’s a 3D globe, it’s a map, it’s a dessert topping, it’s free.  We’re going to use the globe here.
The App
CartoDB is a cloud backed geospatial database.  You can get map tiles from it or you can make SQL queries and get GeoJSON back.  For this demo I’m going to replicate something I do a lot in client apps:  country and region boundaries.
France?  Sure, France.  Why not.
It goes a little something like this:
App comes up, it shows a tiled base map.
User taps on a country, country shows up with a label.
Regions show up with outlines.
Lots of users do this for background and it takes up a few MBs of data on their app.  I’ve always wanted to shove it in the cloud and not schlep it around.
The Data
All we’re using here are the admin0 and admin1 10 meter data sets from Natural Earth Data.  That’s a good set of consistent, pretty, logical data sets for doing fairly coarse work.  Big enough to be interesting, small enough to fit in storage.
Orange!
Uploading to CartoDB is pretty slick.  I just zipped up the shape files (and all their attendant garbage) and it figured out the rest.  Now I’ve got two tables I can hit and a nice SQL query tab to try things out.
The Source
It’s all up on GitHub, of course.  Just clone that and do the dance of submodules (check the README).  WhirlyGlobe-Maply pulls in all its examples so it gets a little large.  There’s a binary distribution if you roll that way.
Let’s start with the basics.  We want to toss up a globe and we want to get the user taps back via the delegate.
https://gist.github.com/mousebird/5775058
Next, we want a nice base layer to look at and we’ll rotate to San Francisco on startup.
https://gist.github.com/mousebird/5775200
Here’s what that gets you: An interactive globe with an automatically paging tiled base map.

Cool, but the whole point is display the country where the user taps.  We can get that by filling in one of the delegate methods and then kicking off a query to CartoDB.
https://gist.github.com/mousebird/5775717
I’m using AFNetworking here which is a really nice library for doing network calls on iOS and it uses a lot of modern Objective-C constructs, like blocks.  Block syntax often looks like a cat puked on your keyboard, but it works really, really well.
All we’re doing here is:
Building up the CartoDB request, which is a point in polygon test
Firing it off
Adding the vector outline when it comes back as GeoJSON
Adding a label right in the middle of the country
Adding the vector outline and label looks like this.
https://gist.github.com/mousebird/5775825
We toss the vector feature up there with a little styling and then do the same for the label.  Tap around a little bit and you’ll get something like this.

Pretty easy, and all based on open source.
The Conclusion
CartoDB is really neat and I’d love to see more apps using it as their spatial data back end.  Setting this example up was incredibly easy and it’s very fluid.
The version on GitHub does a few more things, like query the admin1 outlines and keep track of how much we’re displaying.  It does all this on other threads, because when you do your data processing on the main thread you make an Apple UX designer cry.
