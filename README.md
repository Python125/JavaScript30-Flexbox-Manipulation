# Examples on how the JS would be used in a real world website setting

1. const panels = document.querySelectorAll(".panel");
This line of code can be used for an image gallery, quiz, or a image carousel by matching the CSS selector.
For example, I can have an image slider with CSS selectors called "slide", and when I want to select all CSS selectors with the class name "slide", it will grab all of those CSS selectors.
Another example would be if I created a quiz. In the HTML, the CSS selectors would be called "question", when I use querySelectorAll, it will grab all of the "question" classes.

2. function toggleOpen() {this.classList.toggle("open");}
Examples where this could be used in other real life websites include modal windows (clicking on a picture or button to open a modal window), menu toggles (the user clicks on the hamburger icon and it pops up a menu), and dropdown menus (the user clicks on the down arrow and it drops down with a list of options). In order for these clicks to work, addEventListener("click", function) must be included in the JS file.

3. function toggleActive(e) {if (e.propertyName.includes("flex")) {this.classList.toggle("open-active");}}
One example that I can see using this is in an image slider. If I used this function in that project, it would enable the transition of sliding between different images. In order for the transition to work, addEventListener("transitionend", toggleActive) must be included in the JS file.


4. panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));