const switchBtn = document.querySelector("#switchBtn");
const listItems = document.querySelectorAll(".list li");

let theme = 1;

switchBtn.addEventListener("click", function() {
  for (let i = 0; i < listItems.length; i++) {
    if (i % 2 === 0) {
      if (theme === 1) {
        listItems[i].className = "theme1";
      } else {
        listItems[i].className = "theme2";
      }
    } else {
      if (theme === 1) {
        listItems[i].className = "theme2";
      } else {
        listItems[i].className = "theme1";
      }
    }
  }
  theme = theme === 1 ? 2 : 1;
});
