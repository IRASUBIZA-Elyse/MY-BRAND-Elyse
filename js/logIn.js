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
  } else {
    usernameError.innerHTML = "";
  }

  if (password.value.trim() === "" || password.value == null) {
    isValid = false;

    passwordError.innerHTML = "Password is required";
  } else if (password.value && password.value.length < 10) {
    isValid = false;
    passwordError.innerHTML = "invalid password";
  } else {
    isValid = true;
    passwordError.innerHTML = "";
    if (password.value.trim() == key) {
    } else {
      isValid = false;
      passwordError.innerHTML = "incorrect password";
    }
  }

  if (!isValid) {
    e.preventDefault();
  }
});
