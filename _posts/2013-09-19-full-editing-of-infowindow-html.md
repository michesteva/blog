---
title: Full editing of infowindow HTML
date: '2013-09-19T13:38:00+02:00'
tags:
- feature
- info-windows
- tutorials
categories:
- 'New features'
redirect_from:
- "/post/61664564416/full-editing-of-infowindow-html/"
---

<img alt="" src="http://cartodb.s3.amazonaws.com/tumblr/posts/htmlinfowindowscreenshot.jpg"/>

Today we are writing to quickly highlight our latest enhancement to the CartoDB tools. We just rolled out a feature in response to a number of user’s requests: the ability to directly edit your infowindow HTML. This let you tweak content layout, write static content, and embed external resources. This update adds an unlimited number of new methods for creating custom infowindows and we think will make mapping a lot more fun for some CartoDB users.

<iframe frameborder="0" height="400" src="http://examples.cartodb.com/viz/aa2befe4-211d-11e3-bce0-3085a9a9563c/embed_map?title=false&amp;description=false&amp;search=false&amp;shareable=false&amp;cartodb_logo=true&amp;layer_selector=false&amp;legends=false&amp;scrollwheel=true&amp;sublayer_options=1&amp;sql=&amp;sw_lat=38.2554363763797&amp;sw_lon=-79.28558149609376&amp;ne_lat=47.1149998262079&amp;ne_lon=-49.292905714843755" width="100%"></iframe>

**Embedding content**

One capability that HTML editing gives you is the ability to add non-dynamic content to your infowindows. Similar to the infowindow image header template we already provide, you can now add a direct link to images to be added to your infowindows. These links do not need to be controlled by the information in your tables, but can be static and replicated across all of your infowindows. This can be really useful to create themes or add logos to your infowindows, or even to add maps within your map, like in the example above.

This is the the infowindow HTML code that we have used in the example above. As you can see you can reference any columns on your table or in your applied SQL just by adding them between {{}}.

{% gist saleiva/6622056 %}

It isn’t limited to non-dynamic content though. You have the ability to add images and other markup that is dependant on the dynamic content of each window. For example, you may have images stored on your personal server that reflect each row in a table. You can store the id of each image in your table and then render those images in each infowindow dynamically. If you get creative, the same could be done for Soundcloud tracks, YouTube videos, and Vimeo videos.

<a href="http://mustache.github.io"><img alt="" src="http://cartodb.s3.amazonaws.com/tumblr/posts/mustache.jpg"/></a>

**Mustache**

Our templates use the <a href="http://mustache.github.io">Mustache</a> templating library. By accessing the HTML templates directly, you can use the full power of that library to create your custom infowindows. This will let you create logical statements that change the content of your infowindows dependant on the data in your rows; we think your infowindows can get really interesting using this feature. If you have been using our CartoDB.js library, maybe this is nothing new to you, but if you don’t we hope you like the new feature! If you do use the CartoDB.js, infowindow templates you customize with HTML will be accessible in your visualizations just like our library of templates were before.

**Future improvements**

We are rolling out this feature in its most basic form so that we can see how you use it and determine the best way to develop it into the future. Styling for example, still takes place in our own CSS. For you to modify that CSS, you will need to include inline styling parameters, perhaps we will streamline that in the future. Let us know how you use the new feature and share your maps with us on Twitter.
