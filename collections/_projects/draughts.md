---
layout: article
title:  "Draughts (A-level project)"
date:   2021-09-14 12:00:00 +0100
categories: projects games java
cover: /assets/images/draughts/draughts-cover.png
---

A Java version of draughts featuring single player (with AI) and LAN multiplayer

<!--more-->

[<i class="fas fa-download"></i> Download project executable](/assets/draughts.jar)

## Explanation

The classic board game Draughts shouldn't need much of an explanation: pieces move diagonally on an 8x8 board and can 'take' an opponent's piece if it can 'jump' over it into an empty space. The winner is the player who takes all of their opponent's pieces or has the most remaining pieces. I implemented the rules of English Draughts, including forcing moves which take an enemy piece, allowing multiple takes in one move and creating 'Kings' when a piece reaches the other side of the board. Since I made this for my A-level project, I have decided not to make the source code public, but if you want to run the program, you can download it from the top of the page.

## Tools

For this project I chose to use Java with Swing for graphics. One of my requirements was cross-compatibility with other operating systems, which ruled out C#. The single-player enemy controller uses the minimax algorithm to choose a move to make. With a high search depth, this can be quite demanding, so Java made more sense than Python.

{% include gallery.html folder="/assets/images/draughts" %}
