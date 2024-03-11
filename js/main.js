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
const message = document.getElementById("message");
const emailError = document.getElementById("email-error");
const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const phoneNumberError = document.getElementById("phoneNumber-error");
const messageError = document.getElementById("message-error");

let isValid = true;
if (firstName) {
  firstName.addEventListener("keyup", (e) => {
    if (firstName.value === "" || firstName.value == null) {
      isValid = false;
      firstNameError.innerHTML = "";
    } else if (firstName.value.length < 3) {
      firstNameError.innerHTML = "should atleast be 3 characters";
    } else {
      firstNameError.innerHTML = "";
    }
  });
}
if (lastName) {
  lastName.addEventListener("keyup", (e) => {
    if (lastName.value === "" || lastName.value == null) {
      isValid = false;
      lastNameError.innerHTML = "";
    } else if (lastName.value.length < 3) {
      lastNameError.innerHTML = "should atleast be 3 characters";
    } else {
      lastNameError.innerHTML = "";
    }
  });
}
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
// if (phoneNumber) {
//   phoneNumber.addEventListener("keyup", (e) => {
//     //let phone_check = /^\07[8923][0-9]{7}$/;
//     let phone_check = /^\+?25?07([8923])\d{8}$/;

//     if (phoneNumber.value === "" || phoneNumber.value == null) {
//       isValid = false;
//       phoneNumberError.innerHTML = "";
//     } else if (!phone_check.test(phoneNumber.value)) {
//       isValid = false;
//       phoneNumberError.innerHTML = "valid phonenumber required";
//     } else {
//       phoneNumberError.innerHTML = "";
//     }
//   });
// }

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
  //let phone_check = /^\07[8923][0-9]{7}$/;
  let phone_check = /^\+?25?07([8923])\d{8}$/;

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
  }
  // if (!phone_check.test(phoneNumber.value)) {
  //   isValid = false;
  //   phoneNumberError.innerHTML = "valid phonenumber is required";
  // } else
  else {
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
  if (isValid) {
    //createQuery();
    e.preventDefault();
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      message: message.value,
    };
    //console.log(data);
    const url = "https://my-brand-be-3ift.onrender.com";
    fetch(url + "/api/queries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((output) => {
        if (output.message === "sent") {
          //messageError.innerHTML = "sent";
          swal("Success", "Message sent!", "success")
            //alert("sent");
            .then(() => {
              location.reload(); // Reload the page after the user clicks OK
            });
        }
      })
      .catch((err) => {
        console.err("error", err);
      });
  } else {
    e.preventDefault();
  }
});

// async function createQuery() {
//   const formData = new FormData();
//   formData.append("firstName", firstName.value);
//   formData.append("lastName", lastName.value);
//   formData.append("email", email.value);
//   formData.append("phoneNumber", phoneNumber.value);
//   formData.append("message", message.value);

//   const url = "https://my-brand-be-3ift.onrender.com";
//   const response = await fetch(url + "/api/queries", {
//     method: "POST",
//     body: formData,
//   });
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   const data = await response.json();
//   alert("query sent successfully");
// }

// all projects
let gridProject = document.querySelector(".grid-container");
let viewAllProject = document.querySelector("#view-all-project");
viewAllProject.addEventListener("click", () => {
  let viewText = document.querySelector(".viewAllProject-btn");
  gridProject.classList.toggle("more");
  viewText.innerHTML = gridProject.classList.contains("more")
    ? "show Less"
    : "View All project";
});
