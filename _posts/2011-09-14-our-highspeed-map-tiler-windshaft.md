---
title: 'Our highspeed map tiler: Windshaft'
date: '2011-09-14T00:14:00+02:00'
categories:
- 'New features'
---

We often find ourselves needing a simple, high speed and decoupled map tile server to generate maps from PostGIS as fast as possible without sacrificing developmental flexibility.

At the same time, we wouldn't be Vizzuality without also <a href="http://www.vizzuality.com/projects/spanishelections">needing</a> <a href="http://www.vizzuality.com/projects/protectedplanet">to</a> <a href="http://www.vizzuality.com/projects/gmba">style</a> these <a href="http://www.vizzuality.com/projects/imazon">maps</a> with a modern cartographic language.

Today we're really pleased to introduce a node.js library called <a href="https://github.com/Vizzuality/Windshaft">windshaft</a> that makes integrating a simple high speed map tiler with your application as simple as possible.

<a href="https://github.com/Vizzuality/Windshaft">Windshaft</a> give you:

- Pluggable routing to provide customisable tile API URL endpoints
- Renders all data, or data restricted by SQL query
- Generates image and UTFGrid tiles
- Accepts, stores, serves, and applys map styles written in the Carto markup language (same markup as Mapbox Tilemill)
- Serves Infowindow information
- Focus on handling concurrent requests

These days we are using more and more Javascript for front and back end development. We think this _little language that could_ really hits the sweet spot for map tile servers, including great concurrency, small footprint, and deep support for Mapnik, the popular Open Source map renderer.

Being a dynamic map renderer, windshaft commits some map server _sins_ in it's raw form, but the idea is that you the developer actually want to graft your own auth/metrics/caching/scaling on top of decent core components. Same old story: high cohesion, low coupling makes us happy.

To download and start using Windshaft today, <a target="_blank" href="https://github.com/Vizzuality/Windshaft">check out the source on Github</a>
