---
title: "Example Build"
slug: "example-build"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
date: "2019-02-02"
topics: 
    - "artificial-intelligence"
    - "cloud"
    - "devops"
    - "ethics"
    - "deep-learning"
tags:
    - "JavaScript"
---

This page is going to show all of the elements we need to style for the site.

## Lists

**Unordered Lists**

- Unordered
- Lists
- Are like 
- This

**Ordered Lists**

1. Ordered
1. Lists
1. Are like 
1. This

**Nested lists**

1. Ordered
    - Lists
    - Are like 
        1. Lists
        1. Lists
        1. Lists
    - Are like 
1. This

- Ordered
    1. Lists
    1. Are like 
        - Lists
        - Lists
        - Lists
    1. Are like 
- This


## Block quotes

> This is what a block quote would look like

> And again with a **Some bold text** inside it

## General font styles

You can have *italics* and **bolded text** as well as [links](www.google.com).

## Code

**Inline snippets**

Find the variable `serviceEndpoint = {add-service-endpoint-here}` and replace the text `{add-service-endpoint-here}` with you service endpoint url.

**Code Blocks**

``` javascript
function setCodeFromGist() {
    var message = {
        type: "setWorkspaceFromGist",
        gistId: "df44833326fcc575e8169fccb9d41fc7",
        bufferId: "FibonacciGenerator.cs"
    };

    postMessageToEditor(message);
}

function postMessageToEditor(message) {
    document.getElementById('example-iframe').contentWindow
        .postMessage(message, "https://trydotnet.microsoft.com");
}
```

## Headings (This is the biggest heading style Heading 2)

Below are all the heading types with lorum ipsum in between to show margin sizes.

### Heading 3

Tincidunt eget nullam non nisi est. Mauris vitae ultricies leo integer malesuada nunc vel risus. Morbi tristique senectus et netus et. Tortor id aliquet lectus proin. Enim sed faucibus turpis in eu mi bibendum neque.

#### Heading 4

Tincidunt eget nullam non nisi est. Mauris vitae ultricies leo integer malesuada nunc vel risus. Morbi tristique senectus et netus et. Tortor id aliquet lectus proin. Enim sed faucibus turpis in eu mi bibendum neque.

##### Heading 5

Tincidunt eget nullam non nisi est. Mauris vitae ultricies leo integer malesuada nunc vel risus. Morbi tristique senectus et netus et. Tortor id aliquet lectus proin. Enim sed faucibus turpis in eu mi bibendum neque.

###### Heading 6

Tincidunt eget nullam non nisi est. Mauris vitae ultricies leo integer malesuada nunc vel risus. Morbi tristique senectus et netus et. Tortor id aliquet lectus proin. Enim sed faucibus turpis in eu mi bibendum neque.