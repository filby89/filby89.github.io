---
layout: page
permalink: /publications/
title: publications
description: 
years: [2026, 2022, 2021, 2020, 2019, 2018, 2017]
nav: false
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography --template mybib -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
