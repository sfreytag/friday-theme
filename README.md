# Friday Theme

## A Bootstrap 5 portfolio and blog theme for Jekyll

* Example 1: This repo builds directly to GitHub pages, which is also the documentation:  https://sfreytag.github.io/friday-theme/
* Example 2: my own homepage, http://www.freytag.org.uk

## Quick Start

For Jekyll 4.* on localhost, clone this repo then from within it:

Set baseurl to `""` in `_config.yml` then run: 

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

## Bootstrap 5

In May 2025 this theme was upgraded to use Bootstrap 5. To upgrade your older FridayTheme to also use Bootstrap 5, look back through the commits on the main branch. In brief, you need to:

1. Add the Bootstrap 5.2.3 SCSS files
2. Update site.scss to load Boostrap 5
3. Update classes. The theme needs `ml-`, `mr-`, `border-left-` and `border-right-` to be updated to `ms-`, `me-`, `border-start-`, and `border-end-`. You might have added other classes that need updating.
4. Replace the JS with the Bootstrap 5.3 compiled JS files
5. Update the class `sr-only` to `visually-hidden`
6. Fix the components that use JS. This mostly requires attributes like `data-toggle` to become `data-bs-toggle`
7. Remove the Masonry / `.card-columns` layout if you were using it Unfortunately Bootstrap5 no longer supports it.
8. Add a rule to `_variables.scss` to remove link underlines
9. Remove the old Boostrap SCSS files

You may be able to achieve this by merging this up into your own homepage, if it has not diverged too far away from it.
