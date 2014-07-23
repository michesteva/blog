---
title: 'Map of the Week: Safest and riskiest areas of New York subway system by the New York Daily News'
date: '2014-07-22T17:35:00+02:00'
tags:
- cartodb
- map of the week
- tutorial
- journalism
categories:
- 'Map of the Week'
---

<a href="http://www.nydailynews.com/new-york/nyc-crime/daily-news-analysis-reveals-crime-rankings-city-subway-system-article-1.1836918"><img src="http://i.imgur.com/I1D8zOW.png"></a>

Welcome [Sarah Ryley](https://twitter.com/MissRyley) to our Map of the Week series. Sarah is the data projects editor at the New York Daily News, which has the second-largest newspaper website in the United States. Crime reporting is the bread and butter of the Daily News, so Sarah has been focused on making crime data interactive and accessible to the publication's millions of readers.

<!--more-->

The Daily News' transit reporter Pete Donohue recently received a Freedom of Information Law request with police data on all felonies and misdemeanors over a roughly five-year period, from July 1, 2008 to Aug. 4, 2013. The data included the time, location, category and crime classification of 48,749 incidents. Sarah developed an [interactive web package](www.nydailynews.com/subway) that allow readers to explore this data in several different ways -by station, crime type, hour, day, month and quarter- while also uncovering trends such as the hours when the most crimes occur and the crowded train line that is the source of half the system's groping complaints. She also calculated a station-by-station crime rate by merging the dataset with the Metropolitan Transportation Authority's (MTA) ridership statistics. The [CartoDB map](http://www.nydailynews.com/new-york/nyc-crime/daily-news-analysis-reveals-crime-rankings-city-subway-system-article-1.1836918) displays both the rate and total of various crime categories by station.

###Prepping the data
 
The raw data, which can be downloaded [here](https://raw.githubusercontent.com/sarahryley/subway-crime-map/master/raw%20data), needed a lot of work before I could load it into CartoDB. First, I removed all records after June 30, 2013 so we would have a clean five-year period.
 
The **train lines** in the New York City Police Department  data are based on an old map, possibly [this one](http://www.nycsubway.org/perl/caption.pl?/img/maps/calcagno-1998-08-01.gif/) from 1998, when an S train stopped at Lexington Avenue and Roosevelt Island, and the Q ran along the B/D line in Manhattan. So I did a "change alias" on many line and station dimensions to match them up with the current system. I did this manually because many of the routes half-matched the current ones and figuring out the rest took some research.
 
![Imgur](http://i.imgur.com/IwZU8DN.png)
 
The **locations** are by post, not station. A post is roughly equivalent to a platform, so a multi-platform station like Union Square has multiple posts, and in some cases an additional post if there is a [district office](http://home.nyc.gov/html/nypd/html/transit_bureau/transit.shtml) located in the station. I did these groupings based on how the MTA does them for the purpose of calculating ridership.
 
Then there are 123 **crime classifications**. I grouped these dimensions based on New York State Penal Law. Then I was ready to do a lot of the more granular queries for the story and other two interactives. For the map, I made a separate set of broader groupings -violent crimes, property crimes, drug crimes, weapon possession, and misdemeanor sex crimes-. I then queried the number of records for each broader group by station, and exported the results into a spreadsheet.
 
I then joined the exported data with annual [ridership figures](http://web.mta.info/developers/data/nyct/subway/StationEntrances.csv) and station entrance [geocodes](http://web.mta.info/developers/data/nyct/subway/StationEntrances.csv) from the MTA's website.
 
###Calculating the rate
 
Once I had all of this in one spreadsheet, I could begin to calculate a rate. I consulted several academics on the best methodology, and finally decided on a calculation per 100,000 trips. 

**A few things to consider:**

- MTA Ridership data is a count of the number of people swiping into a station. That doesn't include transfers at the station, which the MTA has no good way of tracking, or people exiting the station.

- We decided against using the term "riders" to avoid giving the impression we were talking about a population of individuals, versus the traffic in a station.

- Even though the lack of transfer figures obviously skews the data for express and transfer stations, the academics I consulted still agreed it was a worthwhile and interesting exercise, as long as the deficiencies in the analysis were clearly noted. And there are so many stations where riders can transfer between lines, it somewhat evens out the analysis. Further, a city’s crime rate is based on its resident population, but does not include commuters or tourists, even though they can also become the victim or perpetrator of a crime. So, rates are rarely a perfect science.

- The station with the highest crime rate, Broad Channel, is a required transfer station for those continuing on to the last four stops on a branch of the A train, but not many people actually swipe into the station (only an average of 224 per day). So the lack of transfers in the analysis has a significant impact. But even when factoring in the total ridership on the four stops where riders must use Broad Channel as a transfer during non-peak hours, the station still has one of the highest crime rates in the system.

- Interestingly, most of the stations with the highest crime rate are not express or transfer stops, indicating that overall you are MOST LIKELY to encounter crime in low-volume or far-flung stations. This again contradicts the conventional wisdom that had long been held by many academics, that packed stations were the most dangerous, before some studies like [this](https://www.ncjrs.gov/app/abstractdb/AbstractDBDetails.aspx?id=101953&SelectedRange=1,4&SelectedSearchItems=101953%20%3Chttps://www.ncjrs.gov/app/abstractdb/AbstractDBDetails.aspx?id=101953&SelectedRange=1,4&SelectedSearchItems=101953) began debunking that myth. You can see on the map that, for all crime, the stations in the heart of Manhattan have among the lowest rates per 100,000 trips, and that’s not even taking into account transfer traffic.

- I also found it interesting that, for the rates misdemeanor sex crimes, violent crime, and to a certain extent property crime are more evenly distributed throughout the system. But drug crimes and weapon possession incidents -crimes that are more likely to generate reports from police stops versus straphanger reports - have rates more weighted in low-income minority communities.
 
###CartoDB time!
 
Finally, I had a [table](https://leekristena.cartodb.com/tables/mtacartodb_1/public/table) to import into CartoDB, with a column for each of the rate and total categories. I had an ambitious vision for this map given my very novice status as a coder, so here I need to extend my bottomless thanks to **Michael Keller from Al Jazeera America** and **Matt Clark from Newsday** for their help in making this happen.
 
![Imgur](http://i.imgur.com/Ptk0iHC.png)
 
I wanted a **mode change** to switch between the total and rate, and **buttons** to switch between crime categories. Here is a link to a full [tutorial](http://developers.cartodb.com/tutorials/toggle_map_view.html) on how to make buttons that toggle between map views, which would not include a mode change.
 
To solve the double button issue, Michael made LayerActions into an object that under each of the six crime categories has a key called "rate" and another called "total." The variable "mode" tells it which function to use.
 
{% highlight javascript %}
var LayerActions = {
  crime: {
    total: function() {
      sublayers[0].set({
        sql: "SELECT * FROM mtacartodb_1",
        cartocss: "#mtacartodb_1{marker-fill-opacity:0.9;marker-line-color:#960916;marker-line-width:1;marker-line-opacity:1;marker-placement:point;marker-multi-policy:largest;marker-type:ellipse;marker-fill:#eb1024;marker-allow-overlap:true;marker-clip:false;}#mtacartodb_1 [ crime_total <= 1810] { marker-width: 40.6;} ... #mtacartodb_1 [ crime_total <= 5] { marker-width: 2.1;}"
      });
      return true;
    },
    rate: function() {
      sublayers[0].set({
        sql: "SELECT * FROM mtacartodb_1",
        cartocss: "#mtacartodb_1{marker-fill-opacity:0.9;marker-line-color:#960916;marker-line-width:1;marker-line-opacity:1;marker-placement:point;marker-multi-policy:largest;marker-type:ellipse;marker-fill:#eb1024;marker-allow-overlap:true;marker-clip:false;}#mtacartodb_1 [ crime_rate <= 27.4] {   marker-width: 50;} ... #mtacartodb_1 [ crime_rate <= 0.0] { marker-width: 0;}
      "});
      return true;
    }
  }
}
{% endhighlight %}

This sets the active filter (all crime) and mode (total), and allows you to click on a different mode and make that the current mode:

{% highlight scss %}
<script>
var map;
var active_filter = 'crime';
var mode = 'total';
function init() {
  $('#mode-change input').on('change', function(){
    var radio_btn_value = $(this).val();

    // If the mode you clicked on is not the current mode, then make it the current mode and referesh the map
    if (mode != radio_btn_value) {
      mode = radio_btn_value;
      console.log(active_filter, mode)
      LayerActions[active_filter][mode]();
    }
  });
}
{% endhighlight %}

This sets the query for the first layer (from the crime_total column):

{% highlight sql %}
cartodb.createLayer(map, layerUrl)
.addTo(map)
.on('done', function(layer) {
  var subLayerOptions = {
    sql: "SELECT * FROM mtacartodb_1",
    cartocss: "#mtacartodb_1{marker-fill-opacity:0.9;marker-line-color:#960916;marker-line-width:1;marker-line-opacity:1;marker-placement:point;marker-multi-policy:largest;marker-type:ellipse;marker-fill:#eb1024;marker-allow-overlap:true;marker-clip:false;}#mtacartodb_1 [ crime_total <= 1810] { marker-width: 40.6;} ... #mtacartodb_1 [ crime_total <= 5] { marker-width: 2.1;}"
  }
});
{% endhighlight %}

And this is the function for the buttons and the mode, which is written so that once it finds the right function group, it will pick the correct function and execute for that mode:

{% highlight javascript %}
$('.button').click(function() {
  $('.button').removeClass('selected');
  $(this).addClass('selected');
  console.log($(this).attr('id'), mode);
  active_filter = $(this).attr('id');
  LayerActions[active_filter][mode]();
  });
{% endhighlight %}

This assigns IDs and labels for the buttons and mode:

{% highlight html %}
<body onload="init()">
  <div id='map'></div>
  <div id='menu'>
    <div id="mode-change">
      <label><input type="radio" name="mode"  value="total" checked/> <strong>Total incidents</strong></label>
      <label><input type="radio" name="mode" value="rate"/><strong>Rate per 100,000 trips</strong></label>
    </div>
    <a href="#violent" id="violent" class="button violent">VIOLENT CRIME</a>
    <a href="#sex" id="sex" class="button sex">MISD. SEX CRIMES</a>
    <a href="#crime" id="crime" class="button crimet selected">ALL<br> CRIME</a>
    <a href="#weapons" id="weapons" class="button weapons">WEAPON POSSESSION</a>
    <a href="#drug" id="drug" class="button drug">DRUG CRIMES</a>
    <a href="#property" id="property" class="button property">PROPERTY CRIMES</a>
{% endhighlight %}

And here is the code that creates the style for the buttons and mode. (This is without all the adjustments made by our front-end architect, **Wissam Abayad**. All of his code can be found in the project's [GitHub]( https://github.com/sarahryley/subway-crime-map/blob/master/style.html) repository).

{% highlight scss %}
#menu { position: absolute; top: 5px; right: 10px; width: 400px; height:60px; background: transparent; z-index:10; }
#menu a {
  margin: 15px 10px 0 0;
  float: right;
  vertical-align: baseline;
  width: 70px;
  padding: 10px;
  text-align: center;
  font: bold 11px "Helvetica",Arial;
  line-height: normal;
  color: #555;
  border-radius: 4px;
  border: 1px solid #777777;
  background: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
#menu a.selected,
#menu a:hover {
  color: #F84F40;
}
#mode-change{
  text-align: right;
  color: #fff;
}
{% endhighlight %}

I also wanted a **fixed infobox** because it had too much information to float in the page. This script sets the position at the top right:

{% highlight javascript %}
var infobox = new cdb.geo.ui.InfoBox({
  width: 255,
  position: 'top|right',
  layer: sublayer,
  template: '<p> </p>'
});

$("body").append(infobox.render().el);
{% endhighlight %}

And this style sets it 175 px from the top:

{% highlight scss %}
div.cartodb-infobox {
  display: none;
  top: 175px !important;
  font: 13px "Helvetica";
}
{% endhighlight %}

I also needed to **disable the scroll wheel** so the reader doesn't get "stuck" when trying to scroll down the story:
 
{% highlight javascript %}
map.scrollWheelZoom.disable();
{% endhighlight %}
 
**A few other notes:** I set a consistent scale range in the marker widths across all six categories, rather than the default CartoDB setting that changes the scale range based on the range of numbers in each category. I felt this was important because otherwise, the viewer could erroneously perceive a station as having a higher number of sex crimes than violent crimes, for example, because the scales are set differently. If the marker width increments are the same, than the viewer can also see greater than or less than across categories. Michael also made the point that the markers should vary in size based on the area, not the marker width (diameter), so I created a formula that would come up with a marker width based on an area proportionate to the increase or decrease in rate or total.

You can signup for free to learn how to create maps like this in [CartoDB.com](http://cartodb.com/). 
