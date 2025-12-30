---
layout: page
title: Blog
permalink: /blog/
pagination:
  enabled: true
  title: Blog
  collection: blog
---

<div class="blog">
  {% assign posts = paginator.posts %}

  <ul class="post-list">
    {% for post in posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3 class="post-title-preview">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        {% if post.description %}
          {{ post.description }}
        {% else %}
          {{ post.excerpt }}
        {% endif %}
      </li>
    {% endfor %}
  </ul>

  <nav class="pager">
    <div>
      {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path }}">Prev</a>
      {% endif %}
    </div>
    <div>
      {% if paginator.total_pages > 1 %}
        <p>Page {{ paginator.page }} of {{ paginator.total_pages }}</p>
      {% endif %}
    </div>
    <div>
      {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path }}">Next</a>
      {% endif %}
    </div>
  </nav>
</div>
