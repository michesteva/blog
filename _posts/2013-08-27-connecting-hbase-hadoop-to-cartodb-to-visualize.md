---
title: Connecting HBase / Hadoop to CartoDB to visualize millions of species
date: '2013-08-27T00:44:00+02:00'
tags:
- gbif
- big data
- torque
categories:
- 'Customer stories'
redirect_from:
- "/post/59432614920/connecting-hbase-hadoop-to-cartodb-to-visualize/"
---

_In this guest blog, <a href="https://twitter.com/timrobertson100">Tim Robertson</a> describes how the <a href="http://www.gbif.org/">Global Biodiversity Information Facility</a> (GBIF) are building a dynamic density map with 0.5 billion tiles and supporting 40,000 tile updates per second using components of the CartoDB stack for their forthcoming <a href="http://uat.gbif.org/">portal</a>.  This is the first time the CartoDB stack is connected to an <a href="http://hbase.apache.org/">HBase</a> / <a href="http://hadoop.apache.org/">Hadoop</a> backend to handle large data volumes and velocities. It is a great example on the upcoming configurations we will see of CartoDB connected to Big Data sources._

The <a href="http://www.gbif.org/">Global Biodiversity Information Facility</a> is an international organization, whose mission is to promote and enable free and open access to biodiversity data worldwide. Part GBIF's work includes operating a search, discovery and access system, known as the portal; a sophisticated index to the content shared through GBIF. This content includes both complex taxonomies and occurrence data such as the recording of specimen collection events or species observations. While the taxonomic content requires careful data modeling, it is the growing volume of occurrence data that pose the most technical challenges. Here we describe the high level architecture and how we integrated it with pieces of the CartoDB stack to provide the following customizable map visualizations on the portal.

<a href="http://vizzuality.github.io/gbif/" title="GBIF species visualization"><img alt="image" src="http://i.imgur.com/lLk3cgH.png" width="637px"/></a>

The basic requirements for the map controls include the ability to:

1. View density of records dynamically adjusted to the zoom level; e.g. clustered to 4x4-pixel groupings regardless of zoom
2. View maps by theme: dataset, species, kingdom (e.g. plants or animals), phylum, class, order, family, genus, publishing institution, country and publishing country
3. Customize the displayed map to show records by type (e.g. specimens only, fossils only or observations only) and by decade of occurrence (e.g. only records collected between 1970-1980) and coloring of the data density.
4. Reflect the data that is being indexed constantly in near real-time (target within seconds).

The key challenges to meet these requirements effectively stem from the volume of data and the rate at which it is changing. The following illustrates and describes the architecture implemented.

<img alt="image" src="http://i.imgur.com/GaHsMEm.png" width="637px"/>

**Volume of data**

We have not found a storage engine that can handle the clustering of data at query time (some tiles represent 100s millions of records), while also being open source and meeting the requirements of other applications using the same backend.  We have therefore taken the approach of pre-calculating specific views of the content. 

Measuring across 14 zoom levels at a global scale, we observe 550 million tiles containing data; at higher zooms many of our views are sparsely populated. To support 11 themes (requirement 2) in a customizable display (requirement 3) limited us from relying on PNG files as per a typical tile cache solution; doing so would increase the number of tiles by several orders of magnitude to satisfy all combinations.  Instead we chose to store a small data cube in <a href="http://avro.apache.org/">Apache Avro</a> format for each tile.  The cube is a simple 2-dimensional matrix covering the type and decade, and the rollup holding the count of records in each cell. The storage format maintains our ability to address each tile with X,Y,Z and type (e.g. Animals). The data cubes are stored in HBase.

**Rate of change**

During testing, the highest rate of change observed on the incoming data was around 300 records per second.  However, with the 11 themes and 14 zoom levels we can actually invalidate 46,200 tiles of data per second in worst case scenarios (300 x 11 x 14) – (e.g.) a new record of a butterfly observed affects the views for the dataset, animals, insects, publisher etc.

In truth, the ingestion rate of the crawlers varies and not all themes are typically updated.  We monitor the incoming stream under real load <a href="http://dev.gbif.org/ganglia/">using ganglia</a>, in those conditions HBase reports a peak of 25,000 requests per second per node, scaling linearly with the number of nodes [1].  To reduce the write load seen by HBase, we fan out the update stream across a queue per zoom level, and pre-combine 1000 changes from the queue before flushing to HBase. Many updates cluster in space, category, or both. So together, these two approaches reduce write load by approximately an order of magnitude. During flushing, the current tile is read from HBase, the changes applied and then the final data written back synchronously using the atomic HBase <a href="http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/client/HTable.html#checkAndPut(byte%5B%5D,%20byte%5B%5D,%20byte%5B%5D,%20byte%5B%5D,%20org.apache.hadoop.hbase.client.Put)">checkAndPut</a> method, thus handling concurrent modifications. 

**Rendering**

The early iterations of this mapping rendered on the server side using a custom <a href="https://code.google.com/p/gbif-portal/source/browse/tile-server/trunk/src/main/java/org/gbif/metrics/tile/PNGWriter.java">Java PNG encoder</a> to provide tile rendering at approximately 20msec per tile. This is functional but means that any interactivity by the user, such as changing a year filter, issues more tile requests, which can appear sluggish. To overcome this, we have been working with the CartoDB team to refine their upcoming <a href="https://github.com/andrewxhill/tilecubes/blob/master/1.0/spec.md">TileCubes</a> format, implementing TileCubes and the <a href="https://github.com/CartoDB/torque">Torque rendering library</a> to replace the PNG renderers, and using the forthcoming Torque library to render in the browser.  Torque allows for user interfaces to easily interact with TileCube data to dynamically style the way data is rendered on the client.

The work is still being refined but an early access release of the portal is <a href="http://uat.gbif.org/occurrence">visible for testing</a>. We are always happy to discuss results and how we can better integrate the CartoDB stack – please feel free to <a href="mailto:timrobertson100@gmail.com">contact me</a> for more information on the work introduced here.

_[1] The cluster currently consists of 12 machines, each of Dell r710xd, 64GB memory, 2x6 core processors and 12 x SATA 1TB, but is a shared processing installation – the work introduc2ed here does not call for this amount of power alone._
