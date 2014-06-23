---
layout: post
title: Creating cooler maps with the Composite operation selector
date: '2013-02-05T12:54:00+01:00'
tags:
- ui
- hints
- comp-op
tumblr_url: http://blog.cartodb.com/post/42348590635/creating-cooler-maps-with-the-composite-operation
---


As you may know, we at CatoDB try and take huge strides towards facilitating the process of map making as easy as possible, and while CartoDB gives advanced uses a robust functionality that meets almost all their geospatial and data visualization needs, we know that it’s important to bring the more popular functionalities to the UI, enabling less advanced users of the platform to utilize the same functionality without prior knowledge of code. 
And thanks to the latest version of Mapnik, we’re happy to introduce the composite operation selector, a new shortcut that will open up vast new customization possibilities. 
Composite operations affect the way colors and textures mix with one another, and if you’re familiar with image editing software such as PhotoShop or Fireworks, chances are you’ll recognize some of these composite models in the new combo selector. 
The image at the top of this post shows you how the “populated places” dataset from naturalearthdata.org looks when you apply a multiply composite operation. 
Technically speaking, the only thing this combo does is it adds in some of the composite operation as a new CartoCSS property to your style code, so if you’re up to it, go into your CartoCSS editor and start playing aroung with all the available operations. 
Check out for example this map created by a Swedish newspaper about the location of the most toxic areas in the country.

Experiment with the new operations and let us know what you think.
Happy mapping!
