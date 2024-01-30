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

// validating login
// const username = document.forms["form"]["username"];
// const password = document.forms["form"]["password"];
// const password = document.getElementById("password");

// const submit = document.getElementById("SubmittButton");
// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// const usernameError = document.getElementById("username-error").value;
// const passwordError = document.getElementById("password-error").value;

// form.addEventListener("submit", (e) => {
//   if (username.value === "" || username.value == null) {
//     e.preventDefault();
//     usernameError.innerHTML = "username required";
//   }
//   if (password.value.length < 10) {
//     e.preventDefault();
//     passwordError.innerHTML = "password must have atleast 8 character";
//   }
//   if (password.value === "" || password.value == null) {
//     e.preventDefault();
//     passwordError.innerHTML = "password must have atleast 8 character";
//   }
// });

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (e) => {
  let isValid = true;

  if (username.value.trim() === "" || username.value == null) {
    isValid = false;
    usernameError.textContent = "Username is required";
  } else {
    usernameError.textContent = "";
  }

  if (password.value.trim() === "" || password.value == null) {
    isValid = false;
    passwordError.textContent = "Password is required";
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    e.preventDefault();
  }
});
