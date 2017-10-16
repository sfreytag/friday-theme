---
layout: defaults/page
title: A Bootstrap 4 portfolio and blog theme for Jekyll
permalink: projects/theme/about.html
---

I've built my own Bootstrap 4 theme for this Jekyll site. It creates a smart web site that works as a personal homepage, with an about section, a blog supporting tags and a projects collection.

It is quick to configure and simple to use. It is styled almost entirely with Bootstrap 4 so you can roll your own Bootstrap 4 theme for complete customisation.

###Features

* A 2-column portfolio and blog theme
* Responsive layoutr - the sidebar jumps to either top or bottom, depending on content relevance
* Easy to install, with minimal dependencies (but not yet packaged as a theme gem)
* Easy to configure, with minimal options - albeit not that flexible
* Boostrap 4 CSS. No SCSS and no style customisations. Minimal extra theme CSS. Roll your own Bootstrap 4 to change the look and feel
* Bootstrap 4 HTML throughout
* Entypo SVG icons included
* Pygments syntax higlighting using the Monokai syntax theme
* Support for tags and a tag archive page, with a little bit of JS to make the tag display more useful
* Data files to make it easy to change the nav and profile links
* Permalinks using .html for easy deployment to Google App Engine without default directoy indexes

###Quick Start

This theme is not packaged as a gem, so install it directly:

1. Download this repo into your Jekyll site root
2. Upload your avatar image to theme/img/avatar.jpg
3. Edit the three variables in the 'config' section  of `_config.yml`
4. Edit the email address in `_data/nav.yml`
5. (Optionally) Delete everything in `_data/links.yml` (this file is used to share shortcuts throughout the site)
6. Edit the links in `_data/profile.html` for your own social media / portfolio links
4. Edit `index.md`, `about.md` and the shared include, `intro.md`
5. Delete the posts in the `_posts` directory and create your own
6. Delete the projects in the `_projects` directory and create your own
7. (Optional) Download Bootstrap 4 and buld your own theme