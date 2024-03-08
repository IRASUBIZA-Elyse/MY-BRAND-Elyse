document.getElementById("menu-button").addEventListener("click", function () {
  var navList = document.querySelector("#navbar ul");
  navList.style.display = navList.style.display === "block" ? "none" : "block";
  navList.style.width = navList.style.width === "100%" ? "0" : "100%";
});

const form = document.getElementById("formsingUp");
const userName = document.getElementById("signUpname");
const userNameError = document.getElementById("signUpname-error");
const email = document.getElementById("signUpEmail");
const emailError = document.getElementById("signUpEmail-error");
const password = document.getElementById("signUppassword");
const passwordError = document.getElementById("signUppassword-error");
let isValid = true;
userName.addEventListener("keyup", (e) => {
  // console.log(e.key);
  if (userName.value.trim() === "" || userName.value == null) {
    isValid = false;
    userNameError.innerHTML = "";
  } else {
    userNameError.innerHTML = "";
  }
});
password.addEventListener("keyup", (e) => {
  //let key = "henryPc";
  if (password.value.trim() === "" || password.value == null) {
    isValid = false;
    passwordError.innerHTML = "can't be empty";
  } else {
    isValid = true;
    passwordError.innerHTML = "";
  }
});
if (email) {
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
}
form.addEventListener("submit", (e) => {
  let isValid = true;
  //let key = "henryPc";
  let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //console.log(password.value.trim() == "");

  if (userName.value.trim() === "" || userName.value == null) {
    isValid = false;
    userNameError.innerHTML = "userName is required";
  } else {
    userNameError.innerHTML = "";
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

  if (password.value.trim() === "" || password.value == null) {
    isValid = false;
    passwordError.innerHTML = "Password is required";
  } else {
    passwordError.innerHTML = "";
  }
  if (!isValid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    signup();
  }
});

const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const userNameValue = userName.value.trim();
const body = {
  email: emailValue,
  password: passwordValue,
  userName: userNameValue,
};
function signup() {
  fetch("https://my-brand-be-3ift.onrender.com/api/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "sent") {
        console.log(data.message);
      } else {
        console.error("signup failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
