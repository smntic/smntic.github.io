---
layout: project
title: Super Polygon
description: >
  A web-based survival game with Boids and convex hull.
  Built in Python with pygame and FastAPI.
start_date: 2025-09-01
end_date: 2025-12-01
---

Super Polygon is a browser-based survival game built in Python with pygame and
features a user service supporting authentication and a public leaderboard. The
project started from asking the question: "what if the cursor was the player
and enemies targeted it?""

The game was developed as a group project for the course *CMPT 276: Introduction
to Software Engineering*, in which teams were required to extend an existing,
low-quality user service and integrate it into a web application or game of
their choice.

In Super Polygon, enemies follow Boid mechanics, meaning they simulate birds by
maintaining cohesion, separation and alignment. The player scores points by
surviving inside the convex hull of enemy positions, creating a risk–reward
tradeoff, since staying closer to enemies increases score, but any collision
costs one of three lives.

Powerups spawn randomly across the game area, granting temporary
invulnerability, point multipliers, or freezing enemies.

![labeled screenshot of super polygon]({{ "/assets/projects/super_polygon/screenshot.png" | relative_url }})

## Technical Design

The user service was implemented as a REST API built with FastAPI, using
postgres and redis. The repositories for both the user service and the game
used Github Actions for automated testing and style checks.

The game is currently offline because the free Render.com database expired. It
can still be hosted locally by following the instructions in the repository
README. With paid hosting, the deployment would be straightforward and more
reliable.

Super Polygon was intentionally a medium-fidelity implementation. Due to course
deadlines and team constraints, we frequently sacrificed code quality to
expedite development, ensuring we delivered a complete, working system by the
deadline. As a result, the codebase does not reflect my usual code quality
standards.

## My Role

I developed Super Polygon in a team of five SFU students with varying levels of
experience and motivation. As the team member with the most technical
experience, I naturally took on a leadership role.

This was my first time leading a team in a technical project, and it pushed me
to become more comfortable with recognizing my teammates' individual strengths
and being more comfortable delegating tasks.

## What I Learned

This project primarily taught me how to work on and lead in a software
development project in a team. I also became more comfortable working with
python-based backend development, designing REST APIs with FastAPI and working
in a containerized environment with Docker.
