---
layout: defaults/page
title: Projects
---

Some hobby or open-source projects:

{% for project in site.projects %}
- [{{project.title}}]({{site.baseurl}}{{project.url}})
{% endfor %}
