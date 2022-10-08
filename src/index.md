---
title: 🐝 Bee's nest  
layout: "base.pug"
---

## how are you 😉

<strong>Welcome to the Bee's nest</strong> where I place... my stuff? idk.

## pages
<div class="pages">
<!-- 👇 ページを新しいものから古いものへ並べ替える -->
{% assign pages = collections.pages | sort: 'date' | reverse %}
{% for page in pages %}  
<span class="pageLink">
    <a href={{ page.url }}>{{  page.data.title  }}</a>{{ page.data.created | date: "%m-%d-%y" }}
</span>
{% endfor %}
</div>