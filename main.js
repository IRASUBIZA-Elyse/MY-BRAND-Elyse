// adding sticky transparent menu

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
// document.getElementById("menu-button").addEventListener("click", function () {
//   var navList = document.querySelector("#navbar ul");
//   navList.style.display = navList.style.display === "block" ? "none" : "block";
//   navList.style.width = navList.style.width === "100%" ? "0" : "100%";
// });

// trial
function showSidebar() {
  let sidebar = document.getElementById("sidebarIndex");

  sidebar.style.display = "block";
  sidebar.classList.toggle("active");
}
function hideSidebar() {
  let sidebar = document.getElementById("sidebarIndex");
  sidebar.style.display = "none";
}
// form validation
const form = document.getElementById("form");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

const emailError = document.getElementById("email-error");
const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const phoneNumberError = document.getElementById("phoneNUmber-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", (e) => {
  let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phone_check = /^\+2507[0-9]{8}$/;

  if (firstName.value === "" || firstName.value == null) {
    e.preventDefault();
    firstNameError.innerHTML = "firstName is required";
  }

  if (lastName.value === "" || lastName.value == null) {
    e.preventDefault();
    lastNameError.innerHTML = "lastName is required";
  }

  if (email.value === "" || email.value == null) {
    e.preventDefault();
    emailError.innerHTML = "email is required";
  } else if (!email.value.match(email_check)) {
    e.preventDefault();
    emailError.innerHTML = "valid email is required";
  }
  if (phoneNumber.value === "" || phoneNumber.value == null) {
    e.preventDefault();
    phoneNumberError.innerHTML = "phone number is required";
  } else if (!phoneNumber.value.match(phone_check)) {
    e.preventDefault();
    phoneNumberError.innerHTML =
      "valid phonenumber is required and start with +250";
  }

  if (message.value === "" || message.value == null) {
    e.preventDefault();
    messageError.innerHTML = "your message should be atleast 10 characters";
  }
});
