---
layout: post
title: 'New features: Infowindows on hover and icons for your markers'
date: '2014-05-19T11:54:00+02:00'
tags:
- new-features
- cartodb
- infowindows
- cartocss
- markers
tumblr_url: http://blog.cartodb.com/post/86199203624/new-features-infowindows-on-hover-and-icons-for-your
---


Today we announce two features for the CartoDB Editor that will improve the appearance of your visualizations and how people interact with the underlying data.

Infowindow on hover

One of the best CartoDB features is to be able to create infowindows with just a click. Up until now, when browsing a visualization,  you had to actually click on a marker or polygon to show the infowindow and its contents. But in many contexts clicking in lots of markers is not practical, and slows down the process of obtaining the information you need from a visualization.

So welcome infowindow on hover. You no longer have to click on a marker to show the infowindow. You can customize your visualization so when when people puts their cursor over a marker or polygon, the infowindow will appear without the need of clicking it, therefore speeding up a lot the browsing and discovery of data.

You can still have your normal infowindow on click. Actually, they are two completely different infowindows, so you can customize them independently. A typical use case would be that you want to show a preview of the data on hover, and display a more comprehensive view of the data when a user clicks.

Customizing your infowindow on hover is as easy as the normal infowindow. Checkout for the new tab in the infowindow editor:



New icons/markers

Up until now you could easily upload your own images to use as your markers in your visualizations, and style them with CartoCSS, providing an amazing level of customization. But in the spirit of making things easy, smooth and quick, we have prelaoded various set of icons so you can use them out of the box. You can use them as your markers with just a few clicks:



Protip: As you might have seen in the previous animation, you can change the color of the icons with a line of CartoCSS. Just add the “marker-fill” instruction in the CartoCSS editor. Simple and powerful!

Login or create your free account now to test this new features.
