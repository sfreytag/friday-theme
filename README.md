# Friday Theme

## A Bootstrap 4 portfolio and blog theme for Jekyll

* Example 1: This repo builds directly to GitHub pages, which is also the documentation:  https://sfreytag.github.io/friday-theme/
* Example 2: my own homepage, http://www.freytag.org.uk

## Quick Start

Jekyll 4.* on localhost.

Set baseurl to `""` in `_config.yml` then:

```
bundle install
bundle exec jekyll serve
```

## Get Started

Follow the [install notes](https://sfreytag.github.io/friday-theme/projects/install.html).

## Usage

The theme is free to use, but if you do use it, it would be great to hear from you. Email simon@freytag.org.uk - thanks!

## Comaptible with Jekyll 4 and GitHub pages

This theme uses `{{site.baseurl}}` throughout for compatibility with GitHub Pages running Jekyll 3.9 where the site is served out of a folder - eg https://sfreytag.github.io/friday-theme/

It also works with Jekyll 4.* and where the site is served out of the root of the domain - eg https://www.freytag.org.uk

However, this means you cannot use Jekyll 4.* and a folder - the base URL will get repeated in the links. For Jekyll 4.* you *must* serve it from the root of the domain.

Look at `_config.yml` and the `baseurl` setting.
