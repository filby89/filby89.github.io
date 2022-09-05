---
layout: page
title: research projects
permalink: /research-projects/
description:
nav: false
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

 This is a list of EU Horizon 2020 and Greek National projects I have worked on as a research assistant in <a href="https://robotics.ntua.gr/"> IRAL </a> and <a href="https://www.athenarc.gr/en"> Athena RC </a>.

<!-- pages/projects.md -->
<div class="projects">
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.research_projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
</div>
