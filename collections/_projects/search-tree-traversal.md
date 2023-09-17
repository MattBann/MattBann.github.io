---
layout: article
title:  "Search Tree Traversal"
date:   2023-06-21 12:00:00 +0100
categories: projects visualisers godot
cover: /assets/images/search-tree-traversal/stt-cover.png
---

A powerful tool for demonstrating a range of path-finding and traversal algorithms on user-defined search trees.

<!--more-->

[{% include svg/github.svg %} View project on GitHub](https://github.com/MattBann/search-tree-traversal)

## What is this?

In my first year at University studying computer science, I took a module called 'Fundamentals of AI' which covered some basic algorithms for finding a path through a tree, like breadth first search, depth first search, uniform cost search and A* search. I thought to myself, "It would be great if there was an interactive tool to demonstrate these algorithms", so when I couldn't find one I liked I decided to build my own!

Search Tree Traversal has a built-in graph editor which allows you to create nodes and connect them with weighted or unweighted edges. You can then choose a serach algorithm from a selection of 6 and let the program visualise the search in an easy to understand way.

## How do I use it?

Full instructions are available from the projects README. The repository link is at the top of the page.

## Try it here

<iframe frameborder="0" src="https://itch.io/embed/2200103" width="552" height="167"><a href="https://mattbann.itch.io/search-tree-traversal">Search Tree Traversal by MattBann</a></iframe>

## How was it made?

I made this program using the Godot 4 game engine because game engines are also great for creating GUI applications (although not in all use cases).
Godot also has the advantage of being incredibly cross-platform, allowing for Windows, Linux and HTML5 exports out of the box.
This was my first project using version 4, as all my previous Godot projects (all games) have used version 3, which used a different version of GDScript.
I used a model-view-controller design, although I would not recommed this approach for anyone doing a similar project, since Godot is not designed for this data model and has made optimising for larger graphs difficult.
However, I am pleased with how the project turned out, and hope it is of use to at least a few people : )

{% include gallery.html folder="/assets/images/search-tree-traversal" %}
