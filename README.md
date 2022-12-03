# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Toggle the mobile menu

### Screenshot

![](/assets/images/Screenshot_desktop.png)
![](/assets/images/Screenshot_mobile.png)

### Links

- Solution URL: [Github Code](https://github.com/explorem/news-homepage-main-solution)
- Live Site URL: [Nelify Live Server](https://resilient-muffin-31a3cf.netlify.app/)

## My process

I'm still learning how to use the flexbox property on the page. This is the first time I've created a hamburger menu using JavaScript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to create a hamburger menu for mobile devices using JavaScript.

```js
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".hamburger__closed");
const menuIcon = document.querySelector(".hamburger__opened");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)
```

### Continued development

In the next projects, I have to focus on the structure of files that will facilitate the management of content on the website. In addition, I will continue to learn how to use Javascript code in practice.

## Author

- GitHub - [Explorem](https://github.com/explorem)
- Frontend Mentor - [@yexplorem](https://www.frontendmentor.io/profile/explorem)
- Twitter - [@ydkedzierska91](https://www.twitter.com/dkedzierska91)
