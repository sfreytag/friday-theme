---
layout: defaults/list
title: All Projects
narrow: true
permalink: list/projects.html
show_profile: true
---

Here's some documentation and notes about my hobby and open-source projects.

{% for project in site.projects %}
- [{{ project.title }}]({{ site.baseurl }}{{ project.url }})
{% endfor %}
