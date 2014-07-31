---
title: CartoDB with a capital R
date: '2012-05-09T18:13:00+02:00'
tags:
- R
- cartodb
- Rstats
categories:
- 'New features'
redirect_from:
- "/post/22719502434/cartodb-with-a-capital-r/"
---

We love <a href="http://cran.r-project.org/">R</a> users, and for a while now we have known that R users would probably love CartoDB. Getting the two together has taken some time and our commitment to that goal is far from over. But today, we are happy to show off our first attempt at helping more R users to analyze and share their geospatial data, our new <a href="https://github.com/Vizzuality/cartodb-r">R package for CartoDB</a>.

As we were developing the CartoDB-R package, the reasons why it would be useful started to pile up, but we’ll do our best to highlight some of the best here and leave the rest for you to discover. 

**PostGIS is for lovers!**

Using your CartoDB account with this package means you get all the power of PostgreSQL/PostGIS without any installation. For many R users, that is a huge bonus. It also means that you can host and share your datasets remotely, which means you can pass URLs instead of huge files. Since the package has methods for passing queries to CartoDB, you can query only the portions of the data or the outputs of server based data analysis instead of the entire dataset at any one time. It can also just be really fun to use R for mapping!

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/kenya_bd.png"/>

**Simplicity is our hero**

We are doing our best to simplify the process of interacting with your data using R. Right now, it is already pretty close to dead simple. No need for SQL unless you want. In just a couple lines you can setup a new connection to CartoDB and download your data to a dataframe. That’s right! CartoDB outputs go directly into a dataframe (though you can override that) so you can use them in your R analysis immediately. 

After you are done cleaning, analyzing and transforming your data, use the CartoDB R package to write it back to your account. Not only does this give you a place to host your data, but it also gives you a way to then share maps of your results with collaborators, in blogs, or elsewhere.

<img src="http://cartodb.s3.amazonaws.com/tumblr/posts/stopfrisk.png"/>

**Developers and dreamers**

Anyone using CartoDB can give their users access to data directly in R! Because the R package can work as read-only, your users can now use your CartoDB SQL API to query and analyze data directly in R. For most projects, we think this will be a value added service they can immediately share with their users. If you are a project hoping to serve data to scientists, hopefully we just made your life, and theirs, a heck of a lot easier!

**Conclusion **

There are still improvements/enhancements to come, but if you start using the CartoDB-R package let us know and shoot us any feature requests! We are going to work on moving it to <a href="http://cran.r-project.org/">CRAN</a> soon, but see the GitHub readme for instructions on installing it from there. We hope this helps a lot more people do cool things with their data. Onward and upward!
