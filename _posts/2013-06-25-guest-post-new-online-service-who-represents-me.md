---
title: 'Guest post - New online service, "Who Represents Me: NYC"'
date: '2013-06-25T17:22:00+02:00'
tags:
- guest post
- nyc
- examples
categories:
- 'Customer stories'
---

_Today we hear from <a href="https://twitter.com/SR_spatial">Steven </a><a href="https://twitter.com/SR_spatial">Romalewski </a>in a guest post detailing work on the "Who Represents Me: NYC" project. Steven has created several projects using CartoDB, generally focused on topics in the NYC area. We think his work is interesting to people anywhere though! We're happy to let him share his work with you here._

If you wanted to contact your City Councilmember or representatives in Congress or the State Legislature, where would you go for their emails or addresses?  Chances are you’d look it up online, but a simple web search likely won’t tell you *your* representative.  And the boundary lines that determine your districts are not only crazily gerrymandered, but they all changed within the last year due to redistricting.  Each level of government has a district lookup feature, but if you want to contact all of your representatives you’ll need to click around to several websites.

This month the Center for Urban Research at the Graduate Center / CUNY joined with the League of Women Voters of the City of New York to solve these problems.  We launched an online service so anyone can identify their elected officials anywhere in New York City. It’s called “Who Represents Me: NYC”, accessible at <a href="http://www.mygovnyc.org/">www.MyGovNYC.org</a>.

<a href="http://mygovnyc.org/?levelofgovt=city&amp;latlng=40.748724,-73.98420499999997"><img alt="image" src="http://i.imgur.com/yG9YPjC.png" width="650px"/></a>

**How it works**

Anyone can enter a street address at the “Who Represents Me” website, or if they’re using a mobile device they can tap the Use My Current Location link. The site displays a list of all city, state, and federal elected representatives (as well as NYC Community Board), an interactive map of the district and all districts nearby, contact information for local offices, and links for more information such as email addresses, individual websites, Twitter feeds, and Facebook pages of elected officials.

NY1 – New York City’s 24-hour cable news channel – featured the project in an interview last Thursday (June 20) on the “Road to City Hall” segment.  Here’s <a href="http://www.ny1.com/content/politics/road_to_city_hall/184211/ny1-online--exploring-new-website-to-aid-voters">a link to the segment</a>, and we’ve linked directly to <a href="http://spatialityblog.com/2013/06/11/who-represents-you-in-nyc/">the video on the Spatiality Blog</a>.

**District maps**

A key feature of Who Represents Me is the mapping overlay.  Next to each legislator’s contact info, the Who Represents Me service displays a thumbnail map image.  When you click on the map, a larger window is revealed that shows all the district boundaries for that location.  Hover over the list of districts and each one is highlighted on the map.  Double-click on a district in the list, and the map zooms to its extent.

Most important, you can click anywhere on the map and new districts are highlighted for that location.  And the list of representatives is automatically updated when you close the map window.  The maps therefore enable you to determine elected representatives literally for any and every location in the city, even if you don’t have a street address.

<a href="http://www.mygovnyc.org/?levelofgovt=city&amp;latlng=40.748724,-73.98420499999997"><img alt="image" src="http://i.imgur.com/KgwZBKk.png" width="650px"/></a>

We used a combination of cartoDB and the Google Maps API to add the map overlay.  CartoDB enables us to display a vector representation of each district so the user can highlight the boundaries with a mouse-over.  We also rely on cartoDB to determine the district polygon based on the lat/lon we receive from the Google Maps API.  

CartoDB’s SQL API also helped us in displaying the thumbnail map images.  Many of the district boundaries are complex – gerrymandered lines can have many, many vertices – and we didn’t want that to slow down the display of the list of representatives.  We used the cartoDB API feature that returns generalized/simplified polygon geometry, and we display the simplified polygons for the thumbnail maps.  (We use the actual boundaries for the map overlay.)

**Up-to-date data**

Legislative district offices change occasionally, legislators leave office and new ones are elected.  The Who Represents Me service will keep up with these changes through the ongoing work of the League of Women Voters.  The League regularly updates its database of representatives, and we’ll integrate those updates as they come in.

The first iteration of Who Represents Me includes all the contact info from the League’s 2013 They Represent You brochure (which you can <a href="http://www.lwvnyc.org/ordercc.html">order here</a>).  The booklet is helpful for anyone who doesn’t have access to a web browser, and it includes maps of Congressional, State Senate and Assembly, and New York City Council districts organized by borough as well as a description of how New York City Government operates.

We supplemented the League’s info with data from <a href="http://sunlightlabs.github.io/congress/#bulk-data">Sunlight Foundation</a>, the <a href="http://openstates.org/">Open States project</a>, and local websites with contact information and photographs of City Council members, state legislators, congressional representatives, and executive branch officials.

<a href="http://www.mygovnyc.org/?levelofgovt=city&amp;latlng=40.748724,-73.98420499999997"><img alt="image" src="http://i.imgur.com/epLXBVo.png" width="650px"/></a>

Thanks!

“Who Represents Me: NYC” was developed with the generous support of the <a href="http://www.nycommunitytrust.org/">New York Community Trust</a>.  It relies on geographic data from the New York State redistricting task force (LATFOR) and NYC Dept of City Planning’s <a href="http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml">Bytes of the Big Apple</a> website.  In addition to the incredible help provided through CartoDB, the overall site is built with the Twitter Bootstrap framework, and we use the <a href="https://developers.google.com/maps/">Google Maps API</a> for address matching, “typeahead” address search, and basemaps.
