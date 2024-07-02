const panels = document.querySelectorAll(".panel"); // This selects all elements with the class "panel"

function toggleOpen() {
  this.classList.toggle("open");
  // 'this' refers to the panel that was CLICKED
  // classList returns the CSS classnames of an element. In this case, it is 'panel'.
  // toggle allows users to switch between two states. for this function, it determines if the panel is open or closed depending on if the user clicks on a panel
}

function toggleActive(e) { // 'e' refers to the event listener object, which is "transitionend" on line 23
  if (e.propertyName.includes("flex")) { // This if statement checks for a specific element in the CSS selector '.panel', which is 'flex'. If 'flex' was not included in the '.panel' selector, then it would be false.
    this.classList.toggle("open-active"); // 'this' refers to the transition on line 22
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen)); // This calls 'toggleOpen' when a panel is clicked
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive)); // This calls 'toggleActive' when a CSS transition occurs on a panel