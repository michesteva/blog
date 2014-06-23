---
layout: post
title: 'Guest Post: TeamUP wins third prize in Urban Data Challenge'
date: '2013-04-10T16:04:00+02:00'
tags:
- guest post
- torque
- cartodb
tumblr_url: http://blog.cartodb.com/post/47619936290/guest-post-teamup-wins-third-prize-in-urban-data
---
Today we here from Chong Zi Xin and a team of hackers that took part in the recent, Urban Data Challenge. The team reached out a few months ago about using CartoDB for their challenge entry and the other day we found that their entry had won 3rd place. We were really impressed with some of the maps they produced, including perspective views with integrated bar charts (wow!). 
The Urban Data Challenge is a competition that aims to improve transportation through the visualization of urban data sets by drawing meaningful insights. Public transport data such as trams, buses, bicycles and pedestrians from Zurich, Geneva and San Francisco is provided for participants to merge and compare mobility data sets from these three cities.

The project, titled “A City’s Heartbeat”, done by core members of three start-ups, won third prize in the Urban Data Challenge. The project utilizes Geneva’s trams and their passenger flow information to help improve urban mobility, tourism experience as well as businesses (such as cafes near tram stops) to make better decisions.
Our first challenge, is to render big, time-series data of tram movements over a two day period. This temporal mapping was achieved by using the CartoDB SQL API and reusing code from their Torque examples. The basic idea is to treat the database table as a cube, while only downloading and visualizing a few slices of the data at a time. It worked beautifully. 

