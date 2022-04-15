# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Article preview component solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Desktop Layout](/Screenshots/Desktop_Capture.png)
Desktop Layout (1440 px)  

![Desktop Layout](/Screenshots/Desktop_Active_Capture.png)
Desktop Active State (1440 px) 

![Mobile Layout](/Screenshots/Mobile_Capture.png)
Mobile Layout (375 px)  

![Mobile Layout](/Screenshots/Mobile_Active_Capture.png)
Mobile Hover State (375 px)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass preprocessor for CSS
- CSS variables
- Flexbox
- Mobile-first workflow
- Pure Javascript
- DOM Events

### What I learned

Throughout this challenge, I was introduced to a new aspect in FrontEnd development - interactivity using *Javascript*.

- HTML DOM Events 
  - Mouse Events :  `onclick` , `ondbclick` , `oncontextmenu` , `onmouseover` , `onmouseout` , `onmouseleave` , `onmousedown` , `onmouseup`
- `async`/`defer` vs render blocking
- Accessing elements using `getElementById` and modifying styles.
  
  ```javascript
  document.getElementById(id).style.property = "new style";
  ```
- Using Media Queries with Javascript
  ```javascript
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if (mediaQuery.matches) { }  else {  };
  ```

## Author

- [Frontend Mentor](https://www.frontendmentor.io/profile/Muhammad-Nabeel-Sh)
- [LinkedIn](https://www.linkedin.com/in/muhammad-nabil-ibrahim-728b571b8/)