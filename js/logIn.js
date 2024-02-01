window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
    document.querySelector(".footer2").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    document.querySelector(".footer2").style.opacity = 0.9;
  }
});
// for the navbar menu
document.getElementById("menu-button").addEventListener("click", function () {
  var navList = document.querySelector("#navbar ul");
  navList.style.display = navList.style.display === "block" ? "none" : "block";
  navList.style.width = navList.style.width === "100%" ? "0" : "100%";
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (e) => {
  let isValid = true;
  let key = "henryPc";
  console.log(password.value.trim() == "");

  if (username.value.trim() === "" || username.value == null) {
    isValid = false;
    usernameError.innerHTML = "Username is required";
  } else if (username.value.trim() === "henry") {
    usernameError.innerHTML = "";
  } else {
    usernameError.innerHTML = "invalid username";
  }

  if (password.value.trim() === "" || password.value == null) {
    isValid = false;
    passwordError.innerHTML = "Password is required";
  } else if (password.value.trim() == key) {
    isValid = false;
    passwordError.innerHTML = "";
  } else {
    isValid = false;
    passwordError.innerHTML = "incorrect password";
  }

  if (password.value.trim() == key && username.value.trim() === "henry") {
    isValid = true;
    window.location.assign("Dashboard.html");
  }
  if (!isValid) {
    e.preventDefault();
  }
});
