document.getElementById("toggleBtn").addEventListener("click", () => {
  const text = document.getElementById("myText");

  if (text.style.display === "none") {
    text.style.display = "block";  // show
  } else {
    text.style.display = "none";   // hide
  }
});
document.getElementById("toggle3").addEventListener("click", () => {
  const text2 = document.getElementById("myText2");

  if (text2.style.display === "none") {
    text2.style.display = "block";  // show
  } else {
    text2.style.display = "none";   // hide
  }
});
document.getElementById("toggle2").addEventListener("click", () => {
  const explanation = document.getElementById("explanation");
  
  if (explanation.style.display === "none") {
    explanation.style.display = "block";  // show
  } else {
    explanation.style.display = "none";   // hide
  }
});

// AI-generated code starts here
// Student prompt was: "i would like you to help me add a dark mode toggle."

// STEP 1 — Grab the button from the page using its id.
// This finds: <button id="dark-mode-toggle">...</button>
let darkModeButton = document.querySelector("#dark-mode-toggle");

// STEP 2 — Add a "click" event listener.
// This means "run the following function whenever the user clicks the button."
darkModeButton.addEventListener("click", function () {
  
  // STEP 3 — Grab the <body> element.
  // We want to add/remove the class "dark-mode" on the body.
  let bodyElement = document.querySelector("body");

  // STEP 4 — Toggle the class.
  // If body has "dark-mode", remove it.
  // If body does NOT have it, add it.
  bodyElement.classList.toggle("dark-mode");

  // OPTIONAL (but nice): change the button text depending on the mode.
  // This is a simple example of using a variable and checking a class.
  if (bodyElement.classList.contains("dark-mode")) {
    darkModeButton.textContent = "Light Mode";
  } else {
    darkModeButton.textContent = "Dark Mode";
  }
});
// AI-generated code ends here
// AI-generated code starts here
// Student prompt was: "Can I make it so when the viewer clicks 'Should?',
// it spins?"

// Step 1: Select the <span class="dayoff">Should?</span> element
var shouldWord = document.querySelector(".dayoff");

// Step 2: Add a click event listener to that span
shouldWord.addEventListener("click", function () {
  // When the viewer clicks the word, we want it to rotate.

  // classList.toggle() will ADD the "spin" class if it isn't there,
  // and REMOVE it if it is. This lets the word spin each time you click.
  shouldWord.classList.toggle("spin");

  // Optional note:
  // Some animations only play once unless they are removed and re-added.
  // Using toggle helps reset the animation each click.
});
// AI-generated code ends here
// :) horray!!!!
