---
layout: post
title: 'Map of the Week: Insideschools'
date: '2014-05-07T15:06:00+02:00'
tags:
- map of the week
- cartodb
- nyc
- new york city
- insideschools
- how-to
- examples
tumblr_url: http://blog.cartodb.com/post/85018415044/map-of-the-week-insideschools
---
Chris Henrick is a CartoDB collaborator. We welcome him in this guest Map of the Week post to let him tell us about how he is using CartoDB mapping tool to solve the mapping needs of InsideSchools, with maps such as the Guide to pre-kindergarten



In addition to helping make CartoDB’s web-mapping platform more robust and easier to use I also assist the New York City non-profit Insideschools.org with their web-mapping needs. InsideSchools’ mission is to make it easier for both parents and students to navigate NYC’s complex public school application process. Previously I’ve helped them update their elementary school zone maps from static image to dynamic maps that use Leaflet JS to query GeoJSON data based on the user’s search. Another project that will be launched this summer is a High School search engine that will help students and parents select schools based on entering criteria such as commute time from where they live and type of school (performing arts, technical, etc).

Most recently I helped Insideschools map newly launched pre-kindergarden programs in NYC. This follows an announcement made in early April by mayor Bill de Blasio that New York City would be expanding it’s pre-kindergarden program by 4,200 new full-day seats in 140 public schools. This is a big deal in educational politics here in NYC and Insideschools wanted to be sure to get the word out as to where these programs will be located. It happens to be that the majority of new pre-k programs are at schools that happen to not be overcrowded and very popular. Insideschools was then able to suggest “under-the-radar” schools based on in-person school evaluations they do as well as responses from parent and teacher surveys.



Cleaning up data

The first thing I had to do to map this data was clean up two datasets, one for total pre-k programs and another for just the new programs being added to public schools. I did this by first selecting the data from their Excel sheets, copying them to new files, removing white spaces in column headers and saving the data in a CSV format. I then imported both tables to CartoDB and used CartoDB’s geocoding service to map the addresses of each school to lattitude and longitude coordinates. As there was no clear way to tell which programs were the additions in the data set for the total pre-k programs I merged both datasets using the school’s unique identifier (DBN number) to determine which programs were new additions and which were existing. With the newly merged table I made in CartoDB I determined any rows that had null values from all the 2nd table’s columns to be existing programs.

Styling

From here I styled the data so that new programs stood out on the map in an yellow-orange marker while existing programs fell towards the back in a blue marker style. I chose CartoDB’s “GMaps Gray Roadmap style” so that the map colors wouldn’t conflict with the data I was visualizing. (I prefer this basemap style when the user still needs to view details on the map such as street labels, landmarks and parks). To help the new programs stand out even further I used a basic SQL statement that ensures markers representing new programs will be on top of the data stacking order (or so that the yellow-orange markers wouldn’t be covered by the blue markers).

SELECT * FROM pre_k_adds_merge ORDER BY expansion_type DESC

Infowindows

I then added info-windows that when the user clicks on a marker display the school name, address, expansion type (whether it’s a new program or not), 2013 full day applicants and 2014-15 total seats. Lastly I topped it off by creating a legend explaining what each marker color stands for.

The great thing about making a simple map like this in CartoDB is how easy and straightforward the process is. I can import my data, geocode it, merge / join it with another table, implement analysis with Postgresql and PostGIS and immediately style the visualization using CartoDB’s intuitive User Interface all in the same place. No searching through drop-downs in a clunky GIS software, no having to export the data to a web-map friendly format; it all can be accomplished in the same place and is immediately available to be displayed on the web.

This map will likely grow as mayor de Blasio plans on adding even more pre-k programs with certified teachers in places that aren’t official schools such as community centers, YMCA’s and day care centers. With CartoDB it will be easy to update this map and add the locations of these new types of programs.

If you’re interested in reading more on NYC’s public school pre-k program expansion see the Insideschools website.

Remember that you can start creating maps like this without any special coding knowledge. Try CartoDB today to create amazing maps with your data, and check out our past Maps of the Week
