---
layout: page
title: Projects
permalink: /projects/
---

<div class="projects">
  {% assign projects = site.projects | sort: "end-date" | reverse %}

  <ul class="post-list">
    {% for project in projects %}
      <li>
        <div class="project-title">
          <h3 class="post-title-preview">
              <a class="post-link" href="{{ project.url | relative_url }}">
                  {{ project.title | escape }}
              </a>
          </h3>
          <span class="post-meta">
            {% assign start_month = project.start_date | date: "%b" %}
            {% assign start_year  = project.start_date | date: "%Y" %}
            {% assign end_month   = project.end_date   | date: "%b" %}
            {% assign end_year    = project.end_date   | date: "%Y" %}
            
            {% if start_month == end_month and start_year == end_year %}
              {{ start_month }} {{ start_year }}
            {% elsif start_year == end_year %}
              {{ start_month }} - {{ end_month }} {{ start_year }}
            {% else %}
              {{ start_month }} {{ start_year }} - {{ end_month }} {{ end_year }}
            {% endif %}
          </span>
        </div>

        {% if project.description %}
          <p class="post-excerpt">{{ project.description }}</p>
        {% else %}
          {{ project.excerpt }}
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>
