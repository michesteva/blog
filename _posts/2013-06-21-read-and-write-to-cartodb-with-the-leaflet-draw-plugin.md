---
title: Read AND write to CartoDB with the Leaflet.draw plugin
date: '2013-06-21T13:33:00+02:00'
tags:
- draw
- editing
- leaflet
- security definer
categories:
- 'How-to guides'
---

A handful of developers using CartoDB have begun to build tools that incorporate CartoDB data and the <a href="https://github.com/Leaflet/Leaflet.draw">Leaflet.draw</a> plugin. It is a pretty neat combination of tools, that allow anyone to create polygon editing interfaces on top of their datasets. It also lets you build custom data management interfaces on top of a powerful geospatial database. We used it for a fun demo at the recent <a href="http://foss4g-na.org/">FOSS4G-NA</a> meeting and it gave us the chance to see how it could work. The library is pretty straightforward, though it does take a basic grasp of GeoJSON, JavaScript, and the gang of usual suspects. 

<a href="http://cartodb.s3.amazonaws.com/tumblr/posts/leaflet_editor_cartodb/index.html"><img alt="image" src="http://i.imgur.com/chfEGVW.png" width="650px"/></a>

There are a number of examples online already about how to setup the basic interface for Leaflet.draw, so instead, let's take a look at how we can grab geometries from a CartoDB table for use with the library.

{% highlight javascript%}
var url = "https://osm2.cartodb.com/api/v2/sql?format=geojson&q=SELECT cartodb_id,the_geom FROM leaflet_data";
$.getJSON(url, function(data) {
  geojsonLayer = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.cartodb_id=feature.properties.cartodb_id;
      drawnItems.addLayer(layer);
    }
  });
  map.addLayer(drawnItems);
}
{% endhighlight %}

In the above example, we request geometries from CartoDB using the _format=GeoJSON_ parameter to get the right format in our response. Once you have the GeoJSON geometries on the map, you use _drawnItems_ group in our Leaflet.draw control to allow editing.

Simple as that!

Now, what do you do if you want to store those edits quickly back into your CartoDB account? Often times our users set up some type of proxy server to handle the exchange. First, posting the results of the edit to a proxy, wrapping those results in proper SQL on the proxy layer, and then shipping off to CartoDB for storage. If you are creating editable maps for a trusted audience or if you are looking for a truly democratic set of edits, there is another way.

**Security definer**

The security definer gives you the ability create functions on CartoDB that are available in your public API but then within those functions, perform operations only possible from an authenticated user. The way they work is by accepting a small number of defined and typed parameters in the function call, and then using those parameters to do work (updates, inserts, deletes, etc). You can use them to update existing data without authentication or you can even create functions that would allow you to retrieve data from a private table in restricted ways. We have used them to create limits like custom zoom constraints on a table! This is powerful, but obviously be careful. 

So, let's create a function with a security definer that will accept our polygon edits and write them to a table,

{% highlight sql %}
DROP FUNCTION IF EXISTS osm2_upsert_leaflet_data(int[], text[]);

-- Returns a set of op,cartodb_id values where op means:
--
--  deleted: -1
--  updated: 0
--  inserted: 1
--
CREATE OR REPLACE FUNCTION osm2_upsert_leaflet_data(
  cartodb_ids integer[],
  geojsons text[])
  RETURNS TABLE(op int, cartodb_id int)

LANGUAGE plpgsql SECURITY DEFINER
RETURNS NULL ON NULL INPUT
AS $$
DECLARE
sql text;
BEGIN

sql := 'WITH n(cartodb_id,the_geom) AS (VALUES ';

--Iterate over the values
FOR i in 1 .. array_upper(geojsons, 1)
LOOP
  IF i > 1 THEN sql := sql || ','; END IF;
  sql :=sql || '('||cartodb_ids[i]||','
            || 'ST_SetSRID(ST_GeomFromGeoJSON(NULLIF('''|| geojsons[i] ||''','''')),4326))';
END LOOP;

sql := sql || '), do_update AS ('
      || 'UPDATE leaflet_data p '
      || 'SET the_geom=n.the_geom FROM n WHERE p.cartodb_id = n.cartodb_id '
      || 'AND n.the_geom IS NOT NULL '
      || 'RETURNING p.cartodb_id ), do_delete AS ('
      || 'DELETE FROM leaflet_data p WHERE p.cartodb_id IN ('
      || 'SELECT n.cartodb_id FROM n WHERE cartodb_id >= 0 AND '
      || ' n.the_geom IS NULL ) RETURNING p.cartodb_id ), do_insert AS ('
      || 'INSERT INTO leaflet_data (the_geom)'
      || 'SELECT n.the_geom FROM n WHERE n.cartodb_id < 0 AND '
      || ' n.the_geom IS NOT NULL RETURNING cartodb_id ) '
      || 'SELECT 0,cartodb_id FROM do_update UNION ALL '
      || 'SELECT 1,cartodb_id FROM do_insert UNION ALL '
      || 'SELECT -1,cartodb_id FROM do_delete';

RAISE DEBUG '%', sql;

RETURN QUERY EXECUTE sql;

END;
$$;

--Grant access to the public user
GRANT EXECUTE ON FUNCTION osm2_upsert_leaflet_data(integer[],text[]) TO publicuser;
{% endhighlight %}

In the above, our function accepts two parameters, a _cartodb_id_ and _the_geom_. The cartodb_id tells us if we are updating an existing polygon and the_geom is our newly edited or created geometry. Next, it gives itself higher privileges on our table, and creates an upsert statement (updating the_geom if it already existed or inserting it if it is new). That's it! Now, we can share our interface among friends and collect all our edits and additions quickly and easily.

**Combine with Leaflet.draw methods**

Finally, coming back to Leaflet.draw, we have a nice set of functions that help you integrate update, insert and deletes into your Javascript. Take a look at those here,

{% highlight javascript %}
function persistOnCartoDB(action,layers) {
  var cartodb_ids=[];
  var geojsons=[];

  switch(action) {
    case "UPDATE":
      if (layers.getLayers().length<1) return;

      layers.eachLayer(function(layer) {
        cartodb_ids.push(layer.cartodb_id);
        geojsons.push("'"+JSON.stringify(layer.toGeoJSON())+"'");
      });
      break;

    case "INSERT":
      cartodb_ids.push(-1);
      geojsons.push("'"+JSON.stringify(layers.toGeoJSON())+"'");
      break;

    case "DELETE":
      layers.eachLayer(function(layer) {
        cartodb_ids.push(layer.cartodb_id);
        geojsons.push("''");
      });
      break;
  }

  var sql = "SELECT osm2_upsert_leaflet_data(ARRAY[";
  sql += cartodb_ids.join(",");
  sql += "],ARRAY[";
  sql += geojsons.join(",");
  sql += "]);";

  console.log("persisting... " + sql  );
  $.ajax({
    type: 'POST',
    url: 'https://osm2.cartodb.com/api/v2/sql',
    crossDomain: true,
    data: {"q":sql},
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) {
      console.log("Data saved");

      if (action=="INSERT")
        layers.cartodb_id = responseData.rows[0].cartodb_id;
    },
    error: function (responseData, textStatus, errorThrown) {
      console.log("Problem saving the data");
    }
  });
}
{% endhighlight %}
