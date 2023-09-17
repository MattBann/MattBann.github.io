---
layout: article
title:  "Game of Life"
date:   2021-06-13 12:00:00 +0100
categories: projects java
cover: /assets/images/game-of-life/game-of-life-cover.png
---

An implementation of John Conway's Game of Life

<!--more-->

[{% include svg/github.svg %} View project on GitHub](https://github.com/MattBann/game-of-life)

## Explanation

The Game of Life works by having a grid of cells where each cell is in one of two states: alive or dead. The simulation progresses iteratively where each new generation is defined by the previous; a live cell survives to the next iteration only if it has two living neighbours, otherwise it will become a dead cell. A dead cell will become alive only if there are exactly 3 living neighbours. This simple set of rules can result in some interesting behaviour, including that the system is Turing-complete, or in other words it can be programmed to perform data-manipulation. However, that behaviour is outside of the scope of my interest in this project.

## Tools

For this project I chose to use Java with Swing. At the time I was in the process of learning Java, and this seemed like an appropriate challenge. My other choices were C# using Windows Forms or Python. C# was a poor choice since I wanted my program to be easily cross-platform (the UI wouldn't work non-Windows OSes) and I didn't have enough experience with Python GUI libraries.

{% include gallery.html folder="/assets/images/game-of-life" %}
