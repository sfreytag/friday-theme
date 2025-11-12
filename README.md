# Friday Theme

> [!WARNING]
> November 2025: This theme is not being actively maintained or extended. However, it still works!

## A Bootstrap 5 portfolio and blog theme for Jekyll

This repo builds directly to GitHub pages, so you can see a demo of it here:  https://sfreytag.github.io/friday-theme/

## Quick Start

For Jekyll 4.* on localhost, clone this repo then edit `_config.yml` and set baseurl to `""`

Then run: 

```
bundle install
bundle exec jekyll serve
```

## More Information

There's more installation information in the [install notes](https://sfreytag.github.io/friday-theme/projects/install.html).

## Usage

The theme is free to use, but if you do use it, it would be great to hear from you. Email simon@freytag.org.uk - thanks!

## Compatible with Jekyll 4, and also 3.10 for GitHub pages

This theme uses `{{site.baseurl}}` throughout for compatibility with GitHub Pages running Jekyll 3.9 or 3.10 where the site is served out of a folder - eg https://sfreytag.github.io/friday-theme/. The current GitHub versions are [here](https://pages.github.com/versions.json).

It also works with Jekyll 4.* and where the site is served out of the root of the domain.

However, this means you cannot use Jekyll 4.* and a folder - the base URL will get repeated in the links. For Jekyll 4.* you *must* serve it from the root of the domain.

Look at `_config.yml` and the `baseurl` setting and read the [install notes](https://sfreytag.github.io/friday-theme/projects/install.html).

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
