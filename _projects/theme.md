---
layout: defaults/page
title: A Bootstrap 4 portfolio and blog theme for Jekyll
---

I've built my own Bootstrap 4 theme for this Jekyll site. The theme creates a web site that works as a personal homepage with an about section, a blog supporting tags and a collection of projects.

It is quick to configure and simple to use. It is styled almost entirely with Bootstrap 4 so you can roll your own Bootstrap 4 theme for complete customisation.

##Features

* A 2-column portfolio and blog theme
* Easy to install, with minimal dependencies (but not yet packaged as a theme gem)
* Easy to configure, with minimal options - albeit not that flexible
* Responsive layout - the sidebar jumps to either top or bottom, depending on content relevance
* Context-sensitive sidebar content - configurable if you want to change the layout, but it starts with sensible defaults
* Boostrap 4 CSS with no packaged SCSS or customisations and minimal additional theme CSS
* Roll your own Bootstrap 4 to change the look and feel
* Entypo SVG icons included
* Pygments syntax higlighting using the Monokai syntax theme
* Support for tags and a tag archive page, with a little bit of JS to make the tag display more useful
* Data files to make it easy to change the nav and profile links
* A collection to list your projects
* Permalinks using a base url throughout, so the site can run under a folder to share a docroot with your other projects
* Permalinks using .html extensions thoughtout for portability to environments that might not provide default directory indexes

##Quick Start

This theme is not packaged as a gem, so install it directly:

1. Download this repo into your Jekyll site root
2. Upload your avatar image to theme/img/avatar.jpg
3. Edit the three variables in the 'config' section  of `_config.yml`
4. Edit the email address in `_data/nav.yml`
5. (Optionally) Delete everything in `_data/links.yml` (this file is only used as a convenience to share shortcuts throughout the site)
6. Edit the data in `_data/profile.html` to include your own social media and portfolio links
7. Edit `index.md`, `about.md` and the shared include, `intro.md`
8. Delete the posts in the `_posts` directory and create your own
9. Delete the projects in the `_projects` directory and create your own
10. (Optional) Download Bootstrap 4 and buld your own theme

##Using Icons

This theme is bundled with the SVG icon set from [Entypo](http://www.entypo.com/). To work out how to use them, have a read of [this blog post]({{ site.baseurl }}{% link _posts/2017-10-05-icons-in-bootstrap4.md %}).
