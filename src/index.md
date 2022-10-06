---
title: 🐝 Bee's nest  
layout: "base.pug"
---

## how are you 😉

<strong>Welcome to the Bee's nest</strong> where I place... my stuff? idk.

## pages
<div class="pages">
{% for page in collections.pages %}  
[{{ page.data.title }} ー {{ page.data.created | date: "%m-%d-%y" }}]({{ page.url }})
{% endfor %}
</div>