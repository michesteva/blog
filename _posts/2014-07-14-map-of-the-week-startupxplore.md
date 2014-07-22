---
title: 'Map Of The Week: Startupxplore'
date: '2014-07-14T19:25:39+02:00'
tags:
- cartodb
- starupxplore
categories:
- 'Map of the Week'
---

We welcome <a href="https://twitter.com/nacho_orme">Nacho Ormeño</a> to our Map Of The Week series. Ormeño is a co-founder of <a href="https://startupxplore.com/">Startupxplore</a>, a global platform created to connect and promote the blooming startup community and its main actors. Startupxplore enables visitors to browse startups, investors, entrepreneurs, events, companies giving services&#8230; They started up us a startup map, so maps are an important part of their project. Learn how they have been integrating data maps in their web app using CartoDB.

<img src="http://i.imgur.com/Ue77DBr.png" alt="Imgur"/>

### CartoDB: a story of lessons learned

It was September 2013 and iOS7 left the beta version to be deployed on millions of devices overnight so Spainstartupmap, the inception of Startupxplore, got simply broken. An avalanche of emails reporting this issue flooded our inbox: “I can’t see your map on my iPad” was probably the only sentence that resonated at our office by then.

After trying several fixes and even after deploying a degraded version of our map, we basically bumped into the answer when an acquaintance suggested us to try <a href="http://cartodb.com/">CartoDB</a>. The reason was more than convincing: in contrast to Google Maps, CartoDB can render millions of markers on iPad without effort. So it goes.

### Our Proof of Concept

CartoDB could render millions of markers in a desktop browser, but it will work in a browser with the new iOS7? I had to check that by myself.

I signed up into CartoDB, while a file with several thousands of latitude and longitude data points was being created, and then, I tried to create my first table.

<img src="http://i.imgur.com/YOsiqC1.png" alt="Imgur"/>

A couple of progress bars later, all my data was set, like a magic trick! The longitude and latitude parameters were identified automatically and identifiers were assigned to each row. I remember clicking on the Map View link and…voilà there it was! The map with thousands of markers I had defined previously. It was a streamlined process from signup to map visualization without opening any development environment and without writing a single line of code. Awesome!

<img src="http://i.imgur.com/aJWEjBr.png" alt="Imgur"/>

But wait a minute, don’t count the chickens before they hatch: what is the Basemap link? Are you really telling me that with a couple of clicks I can choose between the maps from different providers (Nokia, Google, Open Street Map…) and all my data will continue to show at the right place without touch a line of code? Chickens hatching and beer toasts.

{% img http://i.imgur.com/os80EUJ.png %}

Of course, I did test the loading of the map on my iPad, and it was rendered smoothly, 40k markers without any problem. Taking into account that our previous release was broken if the number was higher than 3K, that was an astonishing figure to us.

### How are we using CartoDB since then?

Since that doomed September, we have been playing with and embedding CartoDB in our products. We have evolved <a href="http://www.spainstartupmap.com/">spainstartupmap.com</a> into <a href="https://startupxplore.com/">startupxplore.com</a>, a community where startups and investors can explore new business opportunities, but our map and CartoDB remains like a key cornerstone. During these months we have discovered many of the wide range of options this platform can offer, learning different approaches to get things done.

<img src="http://i.imgur.com/vzeJySn.png" alt="Imgur"/>

### Currently, we use the following features from CartoDB:

**1. Data points with custom markers:**

Every single actor from the startup ecosystem is represented with a different marker, to do that, we have a specific column in the markers table, which points the type of actor. We uploaded our own set of images and each image was assigned according to each column value.

<img src="http://i.imgur.com/3B7vchQ.png" alt="Imgur"/>

**2.Layers with interactive markers:**

Our users are able to interact with our maps in three different ways (disclaimer: the most techie part of this post begins here):

a. Hovering over a marker, a tooltip with the organization name is shown. That feature has been developed using the cartodb.js library.

 {% highlight javascript %}
 function main() {
var mapOptions = {
            styles: mapStyles
          };
             cartodb.createVis('map_canvas', '<?= $cartodbConfig['url_vis'] ?>', {
                 shareable: false,
                 title: false,
                 description: false,
                 search: false,
                 tiles_loader: true,
                 center_lat: <?php echo "$lati"; ?>,
                 center_lon: <?php echo "$longi"; ?>,
                 zoom: <?php echo "$zoomi"; ?>,
                 legends: false
             })
             .done(function(vis, layers) {
                 // layer 0 is the base layer, layer 1 is cartodb layer
                 nativeMap = vis.getNativeMap();
                 nativeMap.setOptions(mapOptions);
                 cartodbLayer = layers[1];
                 cartodbLayerEvent = layers[0];
     
                 sublayer0 = cartodbLayer.getSubLayer(0);
     
                 sublayer0.setInteraction(true);
                 sublayer0.infowindow.set('fields', [{name: 'cartodb_id'}, {name: 'title'}, {name: 'description'}, {name: 'address'}, {name: 'uri'}]);
                 sublayer0.infowindow.set('template', $('#infowindow_template').html());
                 sublayer0.set({interactivity: 'cartodb_id,title'});
     
     
                 vis.addOverlay({
                         layer: sublayer0,
                         type: 'tooltip',
                         template: '<p>{{title}}</p>'
                     });
                 sublayer1 = cartodbLayer.getSubLayer(1);
     
                 sublayer1.setInteraction(true);
                 sublayer1.infowindow.set('fields', [{name: 'cartodb_id'}, {name: 'title'}, {name: 'description'}, {name: 'address'}, {name: 'uri'},{name:'start_date'}]);
                 sublayer1.infowindow.set('template', $('#infowindow_template_events').html());
                 sublayer1.set({interactivity: 'cartodb_id,title'});
     
                 vis.addOverlay({
                         layer: sublayer1,
                         type: 'tooltip',
                         template: '<p>{{title}}</p>'
                     });    
    
                 updateMap();   
             })
             .error(function(err) {
                 console.log(err);
             });
         }
    
window.onload = main;
{% endhighlight %}



<img src="http://i.imgur.com/2ZyPWn5.png" alt="Imgur"/>

b. Clicking on a marker, an info window is shown with the most important fields of the table. This includes the name, a link to the organization profile, a short description and the postal address.

As we are technical guys, we got this behavior tip from The Hobbit Locations map source code.

{% highlight javascript %}
sublayer0 = cartodbLayer.getSubLayer(0);
                     
sublayer0.setInteraction(true);
sublayer0.infowindow.set('fields', [{name: 'cartodb_id'}, {name: 'title'}, {name: 'description'}, {name: 'address'}, {name: 'uri'}]);
sublayer0.infowindow.set('template', $('#infowindow_template').html());
sublayer0.set({interactivity: 'cartodb_id,title'});


vis.addOverlay({
     layer: sublayer0,
     type: 'tooltip',
     template: '<p>{{title}}</p>'
 });
{% endhighlight %}

In the previous snippet, we are initializing the sublayer 0 (where the markers live) to show an info window on each marker with the fields we want. The info window has been customized using our own css styles and a little trick to show a screenshot from the organization url:

{% highlight text %}
<script type="infowindow/html" id="infowindow_template">
     <div class="infowindow-custom">
      	<a href="#close" class="cartodb-popup-close-button close">x</a>
      	<div class="cartodb-popup-content-wrapper" style="padding:20px">
               <div class="cartodb-popup-content">
                	<div class='marker_title' style='font-size:120%;font-weight:bold;'>{{content.data.title}}</div>
                    <div class='marker_uri'><a target='_blank' href='{{content.data.uri}}'>{{content.data.uri}}</a></div>
                	<div class='marker_desc'>{{content.data.description}}</div>                              
                    <div id='marker_canvas' class='marker_img'><img id="screenshot" src="#"/></div>
                	<div class='marker_address'>{{content.data.address}}</div>
           	</div>
          </div>	                          
     </div>
     <div class="cartodb-popup-tip-container" ></div>
     <script> 
          var urlName = "{{content.data.uri}}";                                                                    
          if (urlName!=""){                                      
             if (!urlName.match("^http")){                                        
                    urlName='http://'+urlName;  
             }                                                                            
             urlName=decode_url(urlName);
             var uri = parse_url(urlName);                                      
             $("#screenshot").attr("src","images/screenshots/"+uri.host+".png");
             $("#screenshot").hide();
             $("#screenshot").show();
          }else{
             $("#screenshot").hide();
             $("#marker_canvas").hide();
          }                                
     </script>
</script>
{% endhighlight %}

The result is something like this:

<img src="http://i.imgur.com/EuxeJeP.png" alt="Imgur"/>

c. Our users can open some specific info windows, clicking on external links from our application. We made it possible with a javascript function that triggers a click event over the marker:

{% highlight javascript %}
function openInfowindow(layer, latlng, id, sublayer) {
     layer.trigger('featureClick', null, latlng, null, {cartodb_id: id}, sublayer);
}
{% endhighlight %}

d.And finally, our users are able to show and hide a group of markers by type using external links for that purpose.

 {% highlight javascript %}

var filterList = [];
var types = ['startup', 'accelerator', 'incubator', 'service', 'coworking', 'hackerspace', 'education', 'investor', 'award','event'];

// hide all markers of a given type
function hide(type) {
      if (type==='event'){
         cartodbLayer.getSubLayer(1).hide();
      }else{
          filterList.push("'"+type+"'");
          updateMap();
      }
      
      $("#filter_" + type).addClass("inactive");
}

// show all markers of a given type
function show(type) {
      if (type==='event'){
          cartodbLayer.getSubLayer(1).show();
      }else{
          var index=$.inArray("'"+type+"'",filterList);
          if (index > -1) {
             filterList.splice(index, 1);
          }
          updateMap();
      }
     
      $("#filter_" + type).removeClass("inactive");
}
function updateMap(){
      if (filterList.length>0){
          var filter = {
              sql: "SELECT * FROM <?= $placesTable ?> where approved='1' and type not in ("+filterList.join(", ")+")",	      
          }
      }else{
          var filter = {
              sql: "SELECT * FROM <?= $placesTable ?> where approved='1' ",	      
          }
      }
      var sublayer = cartodbLayer.getSubLayer(0);
      sublayer.set(filter);
}
{% endhighlight %}


Hurrah! Techie part is over!

As shown here, most of the interactive elements have implied a little bit, so to speak, of coding. Maybe in following releases of the platform, some of these features will be done with a couple of clicks.

**3. Data synchronization:**

Although there is an option to synchronize tables without writing a single line of code, we opted for the API with OAuth to get the information synchronization. Indeed we are able to synchronize our data every time an organization is included, modified or deleted from our platform. Our backend, first in php (spainstartupmap) and then in grails (startupxplore), is in charge to perform this task.

From my point of view and from our hands-on experience, CartoDB is the ultimate platform for mapping any type of data; it is flexible and playful enough to be used by non-technical users as well as by the most seasoned hacker and it comes with an awesome user experience and a great support team.

Jump into <a href="http://cartodb.com/">CartoDB.com</a>, create a free acount and start creating maps like this one.
