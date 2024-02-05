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
document.getElementById("menu-button").addEventListener("click", function () {
  var navList = document.querySelector("#navbar ul");
  navList.style.display = navList.style.display === "block" ? "none" : "block";
  navList.style.width = navList.style.width === "100%" ? "0" : "100%";
});

// trial
// function showSidebar() {
//   let sidebar = document.getElementById("sidebarIndex");

//   sidebar.style.display = "block";
//   sidebar.classList.toggle("active");
// }
// function hideSidebar() {
//   let sidebar = document.getElementById("sidebarIndex");
//   sidebar.style.display = "none";
// }
// form validation
const form = document.getElementById("form");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("email");

const emailError = document.getElementById("email-error");
const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const phoneNumberError = document.getElementById("phoneNumber-error");
const messageError = document.getElementById("message-error");

firstName.addEventListener("keyup", (e) => {
  if (firstName.value === "" || firstName.value == null) {
    isValid = false;
    console.log(e);
    firstNameError.innerHTML = "";
  }
});
lastName.addEventListener("keyup", (e) => {
  if (lastName.value === "" || lastName.value == null) {
    isValid = false;
    lastNameError.innerHTML = "";
  }
});
email.addEventListener("keyup", (e) => {
  let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "" || email.value == null) {
    isValid = false;
    emailError.innerHTML = "";
  } else if (!email.value.match(email_check)) {
    isValid = false;
    emailError.innerHTML = "valid email is required";
  } else {
    emailError.innerHTML = "";
  }
});
phoneNumber.addEventListener("keyup", (e) => {
  let phone_check = /^\07[8923][0-9]{7}$/;

  if (phoneNumber.value === "" || phoneNumber.value == null) {
    isValid = false;
    phoneNumberError.innerHTML = "";
  } else if (!phoneNumber.value.match(phone_check)) {
    isValid = false;
    phoneNumberError.innerHTML = "valid phonenumber is required";
  } else {
    phoneNumberError.innerHTML = "";
  }
});
message.addEventListener("keyup", (e) => {
  if (message.value === "" || message.value == null) {
    isValid = false;
    messageError.innerHTML = "";
  } else if (message.value.length < 10) {
    messageError.innerHTML = "your message should be atleast 10 characters";
  } else {
    messageError.innerHTML = "";
  }
});
form.addEventListener("submit", (e) => {
  let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phone_check = /^\07[8923][0-9]{7}$/;
  let isValid = true;

  if (firstName.value === "" || firstName.value == null) {
    isValid = false;
    firstNameError.innerHTML = "firstName is required";
  } else {
    firstNameError.innerHTML = "";
  }

  if (lastName.value === "" || lastName.value == null) {
    isValid = false;
    lastNameError.innerHTML = "lastName is required";
  } else {
    lastNameError.innerHTML = "";
  }

  if (email.value === "" || email.value == null) {
    isValid = false;
    emailError.innerHTML = "email is required";
  } else if (!email.value.match(email_check)) {
    isValid = false;
    emailError.innerHTML = "valid email is required";
  } else {
    emailError.innerHTML = "";
  }
  if (phoneNumber.value === "" || phoneNumber.value == null) {
    isValid = false;
    phoneNumberError.innerHTML = "phone number is required";
  } else if (!phoneNumber.value.match(phone_check)) {
    isValid = false;
    phoneNumberError.innerHTML = "valid phonenumber is required";
  } else {
    phoneNumberError.innerHTML = "";
  }

  if (message.value === "" || message.value == null) {
    isValid = false;
    messageError.innerHTML = "Enter your message";
  } else if (message.value.length < 10) {
    messageError.innerHTML = "your message should be atleast 10 characters";
  } else {
    messageError.innerHTML = "";
  }
  if (!isValid) {
    e.preventDefault();
  }
});

// all projects
let gridProject = document.querySelector(".grid-container");
let viewAllProject = document.querySelector("#view-all-project");
viewAllProject.addEventListener("click", () => {
  let viewText = document.querySelector(".viewAllProject-btn");
  // console.log("hii");
  // showproject.style.display = "block";
  gridProject.classList.toggle("more");
  viewText.innerHTML = gridProject.classList.contains("more")
    ? "show Less"
    : "View All project";
});
