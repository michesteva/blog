---
title: Change the width of your infowindows
date: '2014-06-16T18:56:00+02:00'
tags:
- infoWindows
- new features
- cartodb
categories:
- 'New features'
redirect_from:
- "/post/88969177119/change-the-width-of-your-infowindows/"
---

<img src="http://i.imgur.com/LFkDPf8.gif" alt=""/>

More love to our infowindows, and giving response to a very popular request: changing the width of our infowindows, directly in the CartoDB Editor. Up until now you could change the width of your infowindows with different combinations of not-so-obvious CSS and JS.

<img src="http://i.imgur.com/9ae0Bqq.png" alt=""/>

From now on, you can change the width of any of your infowindows in the Infowindow editor. You have a new “width” control, which lets you, mmm, change the width ;) We have predefined some min and max values so things are not easily broken, but if you have specific needs, you can just write any width you need (but be sure that the resulting infowindow fits in the canvas, and take into account mobile browsers!)

On a more geek side, note that for the width control to apply the desired effect, the **div.cartodb-popup** should also have the **v2** class. The CartoDB Editor will apply this new class to previous and new infowindows, but if for some reason things are looking weird and your infowindow is not correctly resized, just double check for that class in the html code.

Recently: <a href="http://blog.cartodb.com/post/86199203624/new-features-infowindows-on-hover-and-icons-for-your">Infowindow on hover and icons for your markers</a>
