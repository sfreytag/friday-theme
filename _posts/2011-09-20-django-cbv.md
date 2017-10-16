---
layout: defaults/post
title: Django Class Based Views
tags:
 - django
 - uml
 - python
---

This might be a bit out of date now, but in 2011 I was was working with Django a lot and one of the arguments I heard against using Django's then new-ish class-based views was poor docs.

I wrote a Python scripts to traverse the CBVs and produce a [Yuml](http://yuml.me)  output. I think yuml uses GraphViz to produce its final output, so essentially this is a shortcut to running GraphViz over CBV, thanks to Yuml. I was inspired to try this when I saw nice output from [DjangoGraphviz](https://code.djangoproject.com/wiki/DjangoGraphviz|DjangoGraphviz).

<!--more-->

Here's the diagram - click it for a bigger version:

<div class="card">
    <div class="card-body">
        <a href="http://yuml.me/939db673?.png?300" target="_blank">
            <img src="http://yuml.me/939db673?.png?300" style="width: 100%" class="w-100" />
        </a>
    </div>
</div>

It was generated using the Python script below.

{% highlight python %}

"""
Generate a http://yuml.me definition of Django's class-based views to get a 
nice class diagram of those views.
"""

import inspect
import django.views.generic.list as list_views
import django.views.generic.edit as edit_views
import django.views.generic.detail as detail_views
import django.views.generic.base as base_views

def print_classes_in_module(module):
    for name, obj in inspect.getmembers(module, inspect.isclass):
        methods = ""
        attributes = ""
        in_our_module = False        
        for attr in obj.__dict__:
            val = getattr(obj, attr)
            if attr == "__module__" and val == module.__name__:
                in_our_module = True
            elif inspect.ismethod(val):
                methods = methods + attr + "()" + ";"
            elif attr[0:2] != "__":
                attributes = attributes + attr + ";"   
        if in_our_module is True:
            for base in obj.__bases__:
                print "[%s|%s|%s]^[%s]" % (name, attributes[:-1], methods[:-1], base.__name__) 
                        
print_classes_in_module(list_views)
print_classes_in_module(edit_views)
print_classes_in_module(detail_views)
print_classes_in_module(base_views)

{% endhighlight %}



