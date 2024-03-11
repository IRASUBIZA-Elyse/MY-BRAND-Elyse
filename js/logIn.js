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
const email = document.getElementById("username");
const password = document.getElementById("password");
const emailError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

// username.addEventListener("keyup", (e) => {
//   // console.log(e.key);
//   if (username.value.trim() === "" || username.value == null) {
//     isValid = false;
//     usernameError.innerHTML = "";
//   } else if (username.value.trim() === "henry") {
//     usernameError.innerHTML = "";
//   } else {
//     usernameError.innerHTML = "invalid username";
//   }
// // });
// password.addEventListener("keyup", (e) => {
//   let key = "henryPc";
//   if (password.value.trim() === "" || password.value == null) {
//     isValid = false;
//     passwordError.innerHTML = "";
//   } else if (password.value.trim() == key) {
//     isValid = false;
//     passwordError.innerHTML = ""
// };
if (email) {
  email.addEventListener("keyup", (e) => {
    let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value === "" || email.value == null) {
      emailError.innerHTML = "";
    } else if (!email.value.match(email_check)) {
      emailError.innerHTML = "valid email is required";
    } else {
      emailError.innerHTML = "";
    }
  });
}
// form.addEventListener("submit", (e) => {
//   let isValid = true;
//   let key = "henryPc";
//   let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   console.log(password.value.trim() == "");

//   // if (username.value.trim() === "" || username.value == null) {
//   //   isValid = false;
//   //   usernameError.innerHTML = "Username is required";
//   // } else if (username.value.trim() === "henry") {
//   //   usernameError.innerHTML = "";
//   // } else {
//   //   usernameError.innerHTML = "invalid username";
//   // }

//   if (email.value === "" || email.value == null) {
//     isValid = false;
//     emailError.innerHTML = "email is required";
//   } else if (!email.value.match(email_check)) {
//     isValid = false;
//     emailError.innerHTML = "valid email is required";
//   } else {
//     emailError.innerHTML = "";
//   }

//   if (password.value.trim() === "" || password.value == null) {
//     isValid = false;
//     passwordError.innerHTML = "Password is required";
//   } else {
//     passwordError.innerHTML = "";
//     isValid = true;
//   }
//   if (valid) {
//     const inEmail = email.value.trim();
//     const firstPass = password.value.trim();
//     const body = { email: inEmail, password: firstPass };
//     function loginUser(body) {
//       const url = "https://my-brand-be-3ift.onrender.com";
//       fetch(url + "/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       })
//         .then((res) => res.json())
//         .then((response) => {
//           if (response.status) {
//             // User logged in successfully
//             console.log("User logged in successfully");
//             alert("logged in successfully");
//             const resData = response.data;
//             localStorage.setItem("token", resData);
//           } else {
//             // Login failed
//             console.error("Login failed");
//             alert("oops invalid credentials!!!");
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     }
//     loginUser(body);
//     console.log("login successful");
//     //window.location.href = "./dashboard.html";
//   }
// });
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.trim() === "") {
    emailError.innerHTML = "please enter the email";
    return false;
  } else if (email.value.length < 3) {
    emailError.innerHTML = "name should have 3 character and over";
    return false;
  } else {
    emailError.innerHTML = "";

    if (password.value.trim() === "") {
      passwordError.innerHTML = "please enter the password";
      return false;
    } else if (password.value.length < 4) {
      passwordError.innerHTML = "your password should be atleast 4";
      return false;
    } else {
      // window.location.href="dashboard.html"
      passwordError.innerHTML = "";
      const inEmail = email.value.trim();
      const firstPass = password.value.trim();
      const body = { email: inEmail, password: firstPass };
      function loginUser(body) {
        // Assuming you're using fetch for API calls
        fetch("https://my-brand-be-3ift.onrender.com/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);

            if (response.status) {
              // User logged in successfully
              console.log("User logged in successfully");

              const resData = response.data;
              localStorage.setItem("token", resData);
              alert("logged in successfully");

              window.location.href = "./dashboard.html";
            } else {
              // Login failed
              console.error("Login failed");
              alert("oops invalid credentials!!!");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      loginUser(body);

      //console.log("jj");
    }
  }
});

// function uservalid() {
//   var form = document.getElementById("login");
//   var email = document.getElementById("logName").value;
//   var text = document.getElementById("logNameErrors");

//   var pattern = /^[a-z]{3,}$/;
//   if (email.match(pattern)) {
//     form.classList.add("valid");
//     form.classList.remove("invalid");
//     text.innerHTML = "";
//     text.style.color = "black";
//   } else {
//     form.classList.remove("valid");
//     form.classList.add("invalid");
//     text.innerHTML = "ooops your username please";
//     text.style.color = "#ff0000";
//   }
// }
// function passwordvalid() {
//   var form = document.getElementById("login");
//   var email = document.getElementById("logpassword").value;
//   var text = document.getElementById("logpasswordErrors");
//   if (email >= 4) {
//     form.classList.add("valid");
//     form.classList.remove("invalid");
//     text.innerHTML = "valid";
//     text.style.color = "#00ff00";
//   } else {
//     form.classList.remove("valid");
//     form.classList.add("invalid");
//     text.innerHTML = "it should have 4 character and over";
//     text.style.color = "#ff0000";
//   }
// }
