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

form.addEventListener("submit", (e) => {
  let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phone_check = /^\+2507[0-9]{8}$/;
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
    phoneNumberError.innerHTML =
      "valid phonenumber is required and start with +250";
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
  console.log("hii");
  // showproject.style.display = "block";
  gridProject.classList.toggle("more");
  viewText.innerHTML = gridProject.classList.contains("more")
    ? "show Less"
    : "View All project";
});

// single blog

// create blog validation
// var quill = new Quill("#editor-container", {
//   theme: "snow", // Specify theme ('snow' or 'bubble')
// });
// document
//   .getElementById("createBlogForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     let title = document.getElementById("createBlog-title").value.trim();
//     let content = quill.root.innerHTML.trim();
//     let titleError = document.getElementById("title-error");
//     let contentError = document.getElementById("content-error");

//     titleError.textContent = "";
//     contentError.textContent = "";

//     let isValid = true;

//     if (title === "") {
//       isValid = false;
//       titleError.textContent = "Title is required.";
//     }

//     if (content === "<p><br></p>") {
//       isValid = false;
//       contentError.textContent = "Content is required.";
//     }

//     if (isValid) {
//       // Form submission logic goes here
//       console.log("Form submitted successfully!");
//     }
//   });
