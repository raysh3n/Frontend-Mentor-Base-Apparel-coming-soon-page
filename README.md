# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot
<br>Mobile</br>
![](/mobile%20Screenshot%202025-02-05%20204953.png)
<br>Desktop</br>
![](/desktop%20Screenshot%202025-02-05%20204915.png)


**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/responsive-base-apparel-coming-soon-page-n55kFJ9l_G)
- Live Site URL: [here](https://fem-base-apparel-coming-soon-raysh3n.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow



### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Manually set the height to prevent empty space at the bottom after submitting the button. 
```css
.details .message {
  text-align: left;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
  height: 1rem; /*this*/
}
```


Can have nested ternary operator
```js
message.textContent = isValid ? 'Submitted' : result ? 'Please provide a valid email' : 'No email provided';
}
```

Toggle. The second parameter can be used. Add show class based on the 2nd parameter. 
```js
    errorIcon.classList.toggle('show', !isValid);

```

### Continued development

To write in BEM for the HTML. 
To imlpement variables for some CSS to further clean up the code. 
