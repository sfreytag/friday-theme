---
title: Change the Appearance of Friday Theme
---

## Changing the Style

The main stylesheet is `theme\css\site.scss`. This is the one that pulls everything together and creates the final, built output. So if you want to import other SCSS, add it here.

This theme does not use its own SCSS or CSS apart from a few layout tweaks in `theme/_sass/_theme.css`.

You can modify the appearance by customising Bootstrap directly by overriding its SCSS variables. There are some notes in the top of `theme\_sass\_variables.scss` about how to do this.

This theme also bundles `syntax.css` for the pygments highlighting. It is the monokai theme. You can get other syntax.css files from various places. [Here](http://jwarby.github.io/jekyll-pygments-themes/languages/javascript.html) is quite a good one, with previews of a few languages.

## Changing the Theme's HTML

This is Jekyll so you are able to dive into the HTML and make this theme do what you need. The `list` directory contains the two files responsible for listing posts and projects. Quite a few chunks of HTML are tidied off into `_layouts/components`. Otherwise everything else should be standard Jekyll.