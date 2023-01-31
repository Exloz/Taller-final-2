const fruitList = document.getElementById("fruit-list");
const toggleThemeButton = document.getElementById("toggle-theme");

let theme = "light";

function switchTheme() {
  const items = fruitList.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("even")) {
      if (theme === "light") {
        items[i].style.backgroundColor = "lightblue";
      } else {
        items[i].style.backgroundColor = "yellow";
      }
    } else {
      if (theme === "light") {
        items[i].style.backgroundColor = "yellow";
      } else {
        items[i].style.backgroundColor = "lightblue";
      }
    }
  }
  theme = theme === "light" ? "dark" : "light";
}

toggleThemeButton.addEventListener("click", switchTheme);
