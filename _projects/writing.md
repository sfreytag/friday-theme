---
title: Writing Content for Friday Theme
---

## Writing Content

1. `_pages/index.md` - this is the default home page.
2. `_includes/components/intro.md` - this chunk is reused between the top of the homepage and the top of the about page.
3. `_pages/about.md` reuses the intro and adds a bit more content about yourself.
4. `_posts` is the default Jekyll collection of blog posts. Each post has a list of tags. These lists are combined into a tag cloud on the post list page.
5. `_projects` is a directory of project pages. These are not organised into a collection. Each page can hold a description or documentation about a hobby or open-source project.

## HTML Content

Jekyll lets you mix HTML into Markdown in the content, so it is possible to add HTML content. You can use this to utilise Bootstrap 4's components. The [blog posts]({{ site.baseurl }}{% link list/posts.html %}) have some examples.