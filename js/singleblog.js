const formSingleBlog = document.querySelector("#form-SingleBlog");
const nameSingleBlog = document.querySelector("#name-SingleBlog");
const emailSingleBlog = document.querySelector("#email-SingleBlog");
const messageSingleBlog = document.querySelector("#message-SingleBlog");

const nameErrorSingleBlog = document.querySelector("#name-errorSingleBlog");
const emailErrorSingleBlog = document.querySelector("#email-errorSingleBlog");
const messageErrorSingleBlog = document.querySelector(
  "#message-errorSingleBlog"
);

formSingleBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  e.stopPropagation();
  let isValid = true;
  let email_checkSingleBlog = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameSingleBlog.value === "") {
    e.preventDefault();
    nameErrorSingleBlog.innerHTML = "Please enter your name";
    console.log("Please enter your name");
    isValid = false;
  } else {
    nameErrorSingleBlog.innerHTML = "";
  }

  if (emailSingleBlog.value.trim() === "") {
    e.preventDefault();
    emailErrorSingleBlog.textContent = "Email is required";
    isValid = false;
  } else if (!emailSingleBlog.value.match(email_checkSingleBlog)) {
    e.preventDefault();
    emailErrorSingleBlog.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailErrorSingleBlog.textContent = "";
  }

  if (messageSingleBlog.value === "" || messageSingleBlog.value == null) {
    e.preventDefault();
    messageErrorSingleBlog.innerHTML = "Enter your message";
    isValid = false;
  } else if (messageSingleBlog.value.length < 10) {
    e.preventDefault();
    messageErrorSingleBlog.innerHTML =
      "Your message should be at least 10 characters";
    isValid = false;
  } else {
    messageErrorSingleBlog.innerHTML = "";
  }

  if (!isValid) {
    e.preventDefault();
  }
});
