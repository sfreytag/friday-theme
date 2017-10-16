---
layout: defaults/page
title: Projects
permalink: projects/index.html
---

Some hobby or open-source projects:

{% for project in site.projects %}
- [{{project.title}}]({{site.baseurl}}{{project.url}})
{% endfor %}
