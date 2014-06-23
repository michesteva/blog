---
layout: post
title: 'Map of the Week: Areas prone to flooding in Norway'
date: '2014-06-03T15:49:00+02:00'
tags:
- map of the week
- cartodb
- norway
- nrk
- "Øyvind bye skille"
tumblr_url: http://blog.cartodb.com/post/87694623989/map-of-the-week-areas-prone-to-flooding-in-norway
---
Welcome Øyvind Bye Skille to our Map of the Week series. Øyvind works for NRK (the Norwegian Broadcasting Corp.), the public broadcaster of Norway which produces content for both radio, TV and digital. Almost 9 out of 10 Norwegians use content from the NRK every week (88% in 2013). All development and production of web content these days require it to work both on mobile devices and desktop computers.

Several areas of central Norway were affected by flooding and most news media in Norway had their reporters out literally getting their feet wet. Inside the newsroom a question came up in an editorial meeting to the group of reporters Øyvind is part of: How can you contribute with content regarding the floods in central Norway?



We talked a bit about flood barriers, regulation of house building and where floods would hit the hardest. When discussing the last question about which areas were prone to flooding, and how we could tell our readers about it I remembered there might be some good datasets showing that as GIS data.

The idea was to visually show our web users something they could not get the same way in a news story aired on TV. From playing around earlier with other projects using maps and CartoDB I had good experiences with using datasets projected and styled on a map of Norway.

This time I made two sets of map visualizations:

1) How areas hit by flooding in central Norway this spring would get affected at different flood levels as predicted by Norwegian government (50, 100 and 200 years flooding)

2) How areas waiting for flood barriers would get hit by flooding as predicted by the government directorate planning for national flood contingency

The story of areas waiting for flood barriers were produced as a collaboration between a radio reporter and me as web reporter. She talked to sources who admitted over 50 cities and towns in Norway await flood barriers and other measures to minimize damages of floods. We also looked at a dataset showing existing flood barriers. The web stories with maps got promotion in nationwide broadcast on both radio and TV.

Data sources



In Norway the authority for water resources and national flood contingency are the Norwegian Water Resources and Energy Directorate (NVE). So I checked their web pages and found what I was looking for: Datasets showing floods happening statistically every 50, 100 and 200 years in Norway. The datasets can be found here: Geodata from NVE. English description of data from the authority here: NVE’s geographic databases

NVE call these maps of areas prone to flooding  “Flood inundation maps”. They also share more than the flooding zones as open data, and most of the data have good descriptions (in Norwegian at least). At the download page on nve.no you find the flooding zones under «Flomsoner».

There you find one dataset for each flooding level from the one happening every 10 years to the massive 1000 year flood. The Norwegian Water Resources and Energy Directorate provides the data in two formats. SOSI, which is a special geodata format from Norway, and shapefile which is more common worldwide.

I choose the shapefile format as it is easier to use in tools like QGIS and CartoDB. Not too big shapefiles as a zip-package can be uploaded directly as a table in CartoDB. Then you typically get a table with geographic polygons and data.



In addition to the flood inundation maps provided as open data from Norwegian government NVE we used the the most detailed aerial imagery available in Norway.

Minimizing data in CartoDB

I started by downloading all the datasets for 50, 100 and 200 year flooding as shapefiles. The shapefiles come as zipped packages containing geodata, in this case polygons defining the areas calculated by NVE to be under water at the given flood level. They were all uploaded to CartoDB to their own table. These flooding datasets contain data for all of Norway. As a consequence they have a large file size. In order to not occupy too much of our CartoDB account I choose to filter them and only store the areas interesting during this flooding season.

My filtering was done by locating the flood zones visually in CartoDB, and then using another dataset with polygons for Norwegian municipalities to only include the wanted flooding polygons. In the CartoDB account we are using at the NRK we have some datasets of useful Norwegian entities, for instance the areas covered by Norwegian municipalities without ocean areas as prepared by my colleague Bjørn Sandvik – he has also shared it on Github.

Filtering with the two datasets was done with a SQL query similar to this:

https://gist.github.com/furilo/a9eb9130b0f6840e3262

The numbers at the end after the IN are Norwegian municipality IDs, and I chose the one I wanted to cover the necessary areas from looking at the map of Norway.



After running this SQL query I could save my minimized dataset by clicking «create table from query» in the CartoDB table view, and later delete the big table for entire Norway.

Understanding and selecting the right data

Now I had to review the dataset in more detail in order to be sure I used it correctly. Sources for this examination were the website of NVE and the dataset descriptions following the shapefiles as a pdf file. In these text you can see the polygons in the dataset not only defines the flooded areas, but also areas of rivers and areas that without it’s flood barriers would had been flooded.

In the dataset description one column is described like this:

https://gist.github.com/furilo/687c5ae103c4dca7cc43

Low points are those areas below the flooding level, but protected in some way the water will not reach it. So then I chose to select only the polygons defined as Area in danger of flooding (Flomutsatt areal = 1). Like this with a SQL query:

SELECT * FROM flomsoner WHERE symbol = 1

In addition to these checks of the data by reading the documentation I contacted the NVE directorate in order to get some advice and ask if the data were up to date. A person employed at NVE then could tell me a flood barrier installed in 2007 in one of the areas I were examining had not been included in the dataset. He provided me with a PDF with the new flood barrier and how it affected the areas flooded at a given level.

With this information I could manipulate some polygons to make the older dataset as close as possible to the pdf. This can be done directly in CartoDB by clicking the polygon covering the area and choosing “edit data”.



I did achieve an area not flooded on the inside of the barrier, but some small areas elsewhere in another area lost their definition as flooded. Though there were few buildings in those areas and I found it as a compromise.

Styling the maps and background layer

All the flood inundation maps were styled in CartoDB before being imported to our own custom map API. In CartoDB I used two different styling approaches:

Maps with only one flood level styled with a simple polygon fill and outline
Maps with three flood levels styled with several polygon fills
The maps showing where The Norwegian Water Resources and Energy Directorate fear a flood and wants more flood barriers were made with one flood level of 50 year flooding. This was chosen to make them simple, and also not to exaggerate and be accused of promoting fear.

To show the inundation areas the polygons was defined with polygon fill and outline in blue representing water. The fill was added with low opacity in order to let the users see the background aerial imagery in the layer beneath.

We used CartoCSS like this:

https://gist.github.com/furilo/629b6319086bf7ce1da0

NRK has extended the functionality of CartoDB by not embedding the visualizations directly, but through CartoDB.js. We have created our own custom map API based on Leaflet, allowing us to mix and match data from various providers. For our flood maps, we’re using the most detailed aerial imagery available in Norway.

Our mapping API also allows us to improve the user experience by only showing a static map image, generated by PhantomJS, on small screens or mobile devices. The mapping library will only be downloaded if the user interacts with the map. To avoid a “scroll trap” in our articles, we’re only allowing panning and mouse wheel zoom when the map is in fullscreen mode. The extendability and open philosophy of CartoDB was important when we decided to use it in our mapping stack.

The maps of different flood levels in the already affected areas this spring we used the same approach, but put three layers on top of each other in the CartoDB visualization view. The layers were styled with different colour variations of blue, and we added a legend to explain the different flood levels.

This approach kept the watery feeling of the visualization, but user testing showed some difficulty for readers keeping the flood levels apart. For further mapping we plan implementing an interactive layer switcher in our in-house mapping stack. With such a feature the users could have shown only one flooding level at the time and checked the difference themselves by clicking the layer switcher.

For Norwegian readers most of this article is also available at nrkbeta.no

More detailed geospatial analysis with CartoDB

Earlier reporting done by the NRK using CartoDB include extensive geospatial queries and analysis.

In the beginning of May we published a story presenting the number of people living outside 30 minutes flight time from ambulance helicopters. The number was calculated using CartoDB, facts about Norwegian ambulance helicopters and population data on a grid provided by Statistics Norway: 166.000 in Norway live outside 30 minutes flight time.

We also published an interactive map where web users could check the flight time to anywhere in Norway by clicking the map or providing the nearest postal code. Part of the backend for this interactive map was also CartoDB.

More about these other maps and how we made them:
Ambulance helicopters, methods and analysis (Norwegian) (Google translate)



Web stories with flood maps published on nrk.no:

Several cities and towns waiting for barriers fearing new floods

See how cities in central Norway would get affected by a major flood

Mjøndalen with 50 years flood

Hamar with 50, 100 and 200 years flood

Check out our other Maps of the Week, and jump right into CartoDB to start creating amazing maps like this.
