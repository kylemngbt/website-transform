const icon = document.querySelector("#icon");
const logo = document.querySelector(".logo");

function changeTheme() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
    logo.src = "./images/kyle_logo_dark.png";
  } else {
    icon.src = "./images/moon.png";
    logo.src = "./images/kyle_logo.png";
  }
}

icon.addEventListener("click", changeTheme);