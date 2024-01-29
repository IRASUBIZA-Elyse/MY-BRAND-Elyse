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
const username = document.forms["form"]["username"];
const password = document.forms["form"]["password"];
// const password = document.getElementById("password");
const usernameError = document.getElementsById("user-error");
const passwordError = document.getElementsById("password-error");

// form.addEventListener("submit", (e) => {
//   let message = [];
//   if (username.value === "" || username.value == null) {
//     message.push("username required");
//   }
//   if (message.length > 0) {
//     e.preventDefault();
//     usernameError.innerText = message.join(", ");
//   }
// });
function validate() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email.focus();
    return false;
  }
}
