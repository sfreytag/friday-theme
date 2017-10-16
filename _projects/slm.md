---
layout: defaults/page
title: Simon Likes Maps
---

##About

This is an ongoing hobby project, designed to solve a really simple thing: draw  a line on a British Ordnance Survey map and then share it with someone as an  idea for a walk, bike or run. It's since expanded to have other good maps, such as Austria's Kompass maps, which are great for ski touring.

I use it myself all the time and have added quite a range of features. You can get started quicky by drawing and sharing a route, then advanced functions reveal themselves the more you use it. I hope it's a good example of the kind of work I can do as a freelancer.

- Try it at [http://www.simonlikesmaps.com](http://www.simonlikesmaps.com)
- The full feature list [is here](http://www.simonlikesmaps.com/maps#view=HelpView/tab=tab-here)

##Tech

It uses:

- Javascript for client side, Python for server side, Cordova for the Android app
- Client-side libraries: jQuery, Bootstrap 3 CSS & JS, KnockoutJS
- Server-side libraries: Google App Engine, webapp2, jinja2
- Mobile libraries: Cordova
- Map tools: OpenLayers3 for map rendering, proj4js for handling map projections
- APIS: Bing Maps, Open Street Maps and OS Open Space APIs for some map functions (eg search, elevation)
- Tile servers from Bing, Google, Open Street Map, Kompass maps and others
- A JSON API for everything
- Google Accounts for authentication
- Grunt to build the web app (both dev and prod) and mobile app from a single codebase

