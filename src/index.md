---
title: 🐝 Bee's nest 
layout: "base.pug"
---

## how are you 😉

<strong>Welcome to the Bee's nest</strong> where I place... my stuff? idk.

## pages
{% for page in collections.pages %}
 [{{ page.data.title }}]({{ page.url}}) 
{% endfor %}
