---
layout: project
title: Temperature Server
description: >
  An embedded web server for monitoring temperature and humidity
  on a local network using an ESP8266.
start_date: 2025-12-20
end_date: 2025-12-20
---

Temperature Server is a lightweight embedded web server that displays
temperature and humidity data over a local network over time intervals ranging
from 24 hours to 15 minutes. It shows the data visually through two graphs to
detect trends and patterns in the data.

The system runs on an ESP8266-12F microcontroller with built-in Wi-Fi, allowing
it to collect data from a DHT22 sensor and directly serve a web interface to
clients on the local network.

![Example of the web server interface]({{ "/assets/projects/temperature-server/sample.gif" | relative_url }})

## Technical Design

I developed the project incrementally through three proof-of-concepts: serial
communication with the board, sensor data collection, and a minimal web server.
Then, I integrated these componented into a single system.

Due to the ESP8266's tight memory constraints (limited static memory and about
30KB available for the heap), I had to carefully optimize the data flow. I
chose to stream website content to the client in multiple stages to avoid
loading the full page into heap memory, and used intentional coupling between
components to reduce data duplication.

## Results

The project was built to remotely monitor room temperature while caring for a
friend's hamster and gerbil over the winter. The server has maintained 100%
uptime and reports values consistent with both perceived temperature and an
external thermostat. And, yes, the hamster and gerbil are doing well too :).
