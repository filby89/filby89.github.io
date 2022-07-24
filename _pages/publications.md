---
layout: page
permalink: /publications/
title: publications
description: 
years: [2022, 2021, 2019, 2018, 2017, 2016, 1967, 1956, 1950, 1935, 1905]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography --template mybib -s ieee -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
