---
title: Install and Use Friday Theme
---

## About

Friday Theme creates a web site that works as a personal homepage with an about section, a blog supporting tags and a collection of projects.

It is quick to configure and simple to use. It is styled almost entirely with Bootstrap 4 so you can roll your own Bootstrap 4 theme for complete customisation.

I'm assuming you have Jekyll installed already. If not, [look here.](https://jekyllrb.com/docs/installation/)

The installation instructions below are Linux-flavoured instructions. There's some notes on the Jekyll site [about running it on Windows](https://jekyllrb.com/docs/windows/).

## Download and Install

1. Create a directory for your new site.
2. Download this repo into it from [GitHub](https://github.com/sfreytag/friday-theme). (Sorry, this theme is not available as a theme gem yet).
3. If using Ruby3, run `bundle install`
3. cd to your directory and run either `bundle exec jekyll serve` (Ruby 3) or just `jekyll serve` for older versions. This theme uses `markdown` and `pygments` so if they are missing, install them with `gem install pygments`, etc
4. Open the resulting site (probably `http://localhost:4000`) in your browser to check it works

If it does, you can begin customising it.

## Configuration

Open `_config.yml` and change the `title` and `name` fields to your settings. Copy your own avatar image to `/theme/img/avatar.jpg` - it helps if this image is square.

Set a `baseurl` if needed. This lets you run your site under a folder like `/site` if need be.

## Tweak the Data Files

There's two data files that help create elements of the web site.

1. `_data/nav.yml` - use this to build a list of links that will be in the top nav bar. The defaults expose all elements of the theme. If you delete eg the about page, don't forget to edit this file. The Jekyll build will not warn you, because this file cannot use the `{% raw %}{% link %}{% endraw %}` tag.

2. `_data/profile.yml` - this contains a list of links that will be in the left-hand profile bar. Typical usage would be to add your social media and other portfolio links.








