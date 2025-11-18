document.getElementById("toggleBtn").addEventListener("click", () => {
  const text = document.getElementById("myText");

  if (text.style.display === "none") {
    text.style.display = "block";  // show
  } else {
    text.style.display = "none";   // hide
  }
});
/* Dark mode toggle */
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});