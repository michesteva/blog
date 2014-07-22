---
title: 'CartoDB on iOS: Interactive 3D globe with WhirlyGlobe-Maply for native apps'
date: '2013-06-14T00:09:00+02:00'
tags:
- ios
- 3dglobe
- iphone
- ipad
categories:
- 'How-to guides'
---

_Today we hear a fun guestpost from Steve Gifford of <a href="http://www.mousebirdconsulting.com/">Mousebird Consulting</a>. Steve has done some very interesting work with maps using iOS, 3D globes, and CartoDB. Today, he tells us a bit about that work._

Way back I whipped up a little demo with <a href="http://cartodb.com/">CartoDB</a>.  For various reasons it seemed like a good idea to refresh that.  Plus playing with their interface is just FUN.

Anyway, as a little background, I make the <a href="http://mousebird.github.io/WhirlyGlobe/">WhirlyGlobe-Maply</a> open source toolkit for iOS (iPad, iPhone).  It's a 3D globe, it's a map, it's a dessert topping, it's free.  We're going to use the globe here.

**The App**

CartoDB is a cloud backed geospatial database.  You can get map tiles from it or you can make SQL queries and get <a href="http://www.geojson.org/geojson-spec.html">GeoJSON</a> back.  For this demo I'm going to replicate something I do a lot in client apps:  country and region boundaries.

<img alt="image" src="http://1.bp.blogspot.com/-Hz0oqvOMxlM/UboPxukXPMI/AAAAAAAAAPc/raWjJmrzeRI/s1600/cartodb.jpg" width="650px"/><br/>_France?  Sure, France.  Why not._

It goes a little something like this:

1. App comes up, it shows a tiled base map.
2. User taps on a country, country shows up with a label.
3. Regions show up with outlines.

Lots of users do this for background and it takes up a few MBs of data on their app.  I've always wanted to shove it in the cloud and not schlep it around.

**The Data**

All we're using here are the admin0 and admin1 10 meter data sets from <a href="http://www.naturalearthdata.com/">Natural Earth Data</a>.  That's a good set of consistent, pretty, logical data sets for doing fairly coarse work.  Big enough to be interesting, small enough to fit in storage.

<img alt="image" src="http://4.bp.blogspot.com/-PU8X4oZwoos/UboO_SwnGOI/AAAAAAAAAPU/D3eUUlVSoYU/s1600/Screen+Shot+2013-06-13+at+11.25.56+AM.png" width="650px"/><br/>_Orange!_

Uploading to CartoDB is pretty slick.  I just zipped up the shape files (and all their attendant garbage) and it figured out the rest.  Now I've got two tables I can hit and a nice SQL query tab to try things out.

**The Source**

It's all up on <a href="https://github.com/mousebird/cartodbexample">GitHub</a>, of course.  Just clone that and do the dance of submodules (check the <a href="https://github.com/mousebird/cartodbexample/blob/master/README.md">README</a>).  WhirlyGlobe-Maply pulls in all its examples so it gets a little large.  There's a binary distribution if you roll that way.

Let's start with the basics.  We want to toss up a globe and we want to get the user taps back via the delegate.

 {% highlight text %}
 // Create an empty globe and tie it in to the view hierarchy
globeViewC = [[WhirlyGlobeViewController alloc] init];
globeViewC.delegate = self;
[self.view addSubview:globeViewC.view];
globeViewC.view.frame = self.view.bounds;
[self addChildViewController:globeViewC];
{% endhighlight %}


Next, we want a nice base layer to look at and we'll rotate to San Francisco on startup.

 {% highlight text %}
 // This is a nice base layer with water and elevation, but no labels or boundaries
MaplyQuadEarthWithRemoteTiles *layer = [[MaplyQuadEarthWithRemoteTiles alloc] initWithBaseURL:@"http://a.tiles.mapbox.com/v3/mousebird.map-2ebn78d1/" ext:@"png" minZoom:0 maxZoom:12];
[globeViewC addLayer:layer];

 // Let's start up over San Francisco, center of the universe
[globeViewC animateToPosition:MaplyCoordinateMakeWithDegrees(-122.4192, 37.7793) time:1.0];
{% endhighlight %}

Here's what that gets you: An interactive globe with an automatically paging tiled base map.

<img alt="image" src="http://1.bp.blogspot.com/-sN_qKJpVMb0/Ubn3kbPOn9I/AAAAAAAAAO0/9P-oVlmtc4k/s1600/Screen+Shot+2013-06-13+at+9.44.19+AM.png" width="650px"/>

Cool, but the whole point is display the country where the user taps.  We can get that by filling in one of the delegate methods and then kicking off a query to CartoDB.

 {% highlight text %}
 - (void)globeViewController:(WhirlyGlobeViewController *)viewC didTapAt:(WGCoordinate)coord
{
    // We need degrees for the query, even if we work in radians internally
    float lat = coord.y * 180.0 / M_PI;
    float lon = coord.x * 180.0 / M_PI;

    // We want the geometry and a couple of attributes for just one feature under the point
    NSString *account = @"mousebird";
    NSString *admin0Table = @"table_10m_admin_0_map_subunits";
    NSString *queryStr = [NSString stringWithFormat:
            @"http://%@.cartodb.com/api/v2/sql?format=GeoJSON&q=\
                          SELECT sovereignt,adm0_a3,the_geom FROM %@ \
                          WHERE ST_Intersects(the_geom,ST_SetSRID(ST_Point(%f,%f),4326)) \
                          LIMIT 1",account,admin0Table,lon,lat];

    // Kick off the request with AFNetworking.  We can deal with the result in a block
    NSURLRequest *request = [NSURLRequest requestWithURL:
                             [NSURL URLWithString:[queryStr stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding]]];
    AFJSONRequestOperation *operation =
    [AFJSONRequestOperation JSONRequestOperationWithRequest:request
            success:
     // We'll do this if we succeed
     ^(NSURLRequest *request, NSHTTPURLResponse *response, id JSON)
     {
         // Convert to GeoJSON and add the country outline
         [self addCountry:[MaplyVectorObject VectorObjectFromGeoJSONDictionary:(NSDictionary *) JSON]];
     }
            failure:
     // And nothing if we fail
     ^(NSURLRequest *request, NSHTTPURLResponse *response,NSError *error, id JSON)
     {
     }
     ];
    
    // Kick off the network request
    [operation start];
}
{% endhighlight %}


I'm using <a href="https://github.com/AFNetworking/AFNetworking">AFNetworking</a> here which is a really nice library for doing network calls on iOS and it uses a lot of modern Objective-C constructs, like <a href="http://developer.apple.com/library/ios/#documentation/cocoa/Conceptual/Blocks/Articles/00_Introduction.html">blocks</a>.  Block syntax often looks like a cat puked on your keyboard, but it works really, really well.

All we're doing here is:

- Building up the CartoDB request, which is a point in polygon test
- Firing it off
- Adding the vector outline when it comes back as GeoJSON
- Adding a label right in the middle of the country

Adding the vector outline and label looks like this.

 {% highlight text %}
 // Add an admin0 (country, basically) outline and label
- (void)addCountry:(MaplyVectorObject *)vecs
{
    if (!vecs)
        return;
    
    // Add the the vectors to the globe with a line width a color and other parameters
    [globeViewC addVectors:@[vecs] desc:
     @{kMaplyColor: [UIColor whiteColor],kMaplyVecWidth: @(5.0),kMaplyDrawOffset: @(4.0),kMaplyFade: @(1.0)}];
    // But hey, what about a label?  Let's figure out where it should go.
    MaplyCoordinate center = [vecs center];
    NSString *name = vecs.attributes[@"sovereignt"];
    if (name)
    {
        // We'll create a 2D (screen) label at that point and the layout engine will control it
        MaplyScreenLabel *admin0Label = [[MaplyScreenLabel alloc] init];
        admin0Label.text = name;
        admin0Label.loc = center;
        admin0Label.selectable = NO;
        admin0Label.layoutImportance = 1.0;
        [globeViewC addScreenLabels:@[admin0Label] desc:
         @{kMaplyColor: [UIColor whiteColor],kMaplyFont: [UIFont boldSystemFontOfSize:20.0],kMaplyShadowColor: [UIColor blackColor], kMaplyShadowSize: @(1.0), kMaplyFade: @(1.0)}];
    }    
}
{% endhighlight %}


We toss the vector feature up there with a little styling and then do the same for the label.  Tap around a little bit and you'll get something like this.

<img alt="image" src="http://4.bp.blogspot.com/-s18cJY80_fs/UboH3A_igLI/AAAAAAAAAPE/tftPMIm4BD8/s1600/Screen+Shot+2013-06-13+at+10.54.37+AM.png" width="650px"/>

Pretty easy, and all based on open source.

**The Conclusion**

CartoDB is really neat and I'd love to see more apps using it as their spatial data back end.  Setting this example up was incredibly easy and it's very fluid.

The version on <a href="https://github.com/mousebird/cartodbexample">GitHub</a> does a few more things, like query the admin1 outlines and keep track of how much we're displaying.  It does all this on other threads, because when you do your data processing on the main thread you make an Apple UX designer cry.
