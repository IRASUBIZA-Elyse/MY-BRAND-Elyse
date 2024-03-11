const formSingleBlog = document.querySelector("#form-SingleBlog");
const nameSingleBlog = document.querySelector("#name-SingleBlog");
const emailSingleBlog = document.querySelector("#email-SingleBlog");
const messageSingleBlog = document.querySelector("#message-SingleBlog");

const nameErrorSingleBlog = document.querySelector("#name-errorSingleBlog");
const emailErrorSingleBlog = document.querySelector("#email-errorSingleBlog");
const messageErrorSingleBlog = document.querySelector(
  "#message-errorSingleBlog"
);
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

// displaying
const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
//console.log("blogId", blogId);
// if (formSingleBlog) {
//   formSingleBlog.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // console.log(e);
//     e.stopPropagation();
//     let isValid = true;
//     let email_checkSingleBlog = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (nameSingleBlog.value === "") {
//       e.preventDefault();
//       nameErrorSingleBlog.innerHTML = "";
//       isValid = false;
//     } else {
//       nameErrorSingleBlog.innerHTML = "";
//     }

//     if (emailSingleBlog.value.trim() === "") {
//       e.preventDefault();
//       emailErrorSingleBlog.textContent = "Email is required";
//       isValid = false;
//     } else if (!emailSingleBlog.value.match(email_checkSingleBlog)) {
//       e.preventDefault();
//       emailErrorSingleBlog.textContent = "Enter a valid email";
//       isValid = false;
//     } else {
//       emailErrorSingleBlog.textContent = "";
//     }

//     if (messageSingleBlog.value === "" || messageSingleBlog.value == null) {
//       e.preventDefault();
//       messageErrorSingleBlog.innerHTML = "Enter your message";
//       isValid = false;
//     } else if (messageSingleBlog.value.length < 10) {
//       e.preventDefault();
//       messageErrorSingleBlog.innerHTML =
//         "Your message should be at least 10 characters";
//       isValid = false;
//     } else {
//       messageErrorSingleBlog.innerHTML = "";
//     }

//     if (!isValid) {
//       e.preventDefault();
//     }
//   });
// }
const single = document.querySelector(".singleBlog");
const image = document.querySelector(".singleBlog-image");
const likes = document.querySelector(".column2");
const url = "https://my-brand-be-3ift.onrender.com";
fetch(url + `/api/blogs/${blogId}`)
  .then((res) => res.json())
  .then((output) => {
    //console.log("output", output);
    image.innerHTML = `<img src="${output.image}" alt="blog image" />`;
    likes.innerHTML = `<p class="blog-text">
    ${output.content}
  </p>
  <div class="authorDate">
    <p>Date: <span class="date">${output.date}</span></p>
    <p>Author: <span class="author">Henry</span></p>
    <br><br>
    <div class="feedback likess"><p class="likeAll"></p><i class="fa-regular fa-thumbs-up"id ="singleLike">${output.likes}</i></div>`;
  })
  .catch((error) => console.error("There was a problem:", error));

const countelement = document.getElementById("singleLike");
const allblogs = "https://my-brand-be-3ift.onrender.com";
likes.addEventListener("click", async function (event) {
  const target = event.target;
  console.log(target);
  if (target.classList.contains("fa-regular")) {
    //console.log("blog already");
    const blogId = searchParams.get("id");
    const response = await fetch(
      `https://my-brand-be-3ift.onrender.com/api/blogs/${blogId}/like`,

      {
        method: "POST",
      }
    );
    const data = await response.json;
    location.reload();
    //console.log(data);
    //countelement.innerHTML = 3;
  }
});

const comments = document.querySelector(".recent-comment");
let recent = "";
fetch(url + `/api/blogs/${blogId}/comments`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.length);
    if (data.lenght == 0) {
      comments.innerHTML = `<p>No comments yet</p>`;
    } else {
      let max = data.length < 4 ? data.length : 4;
      for (let i = 0; i < max; i++) {
        recent += `<p>${data[i].name}</p>
  
      <p>${data[i].email}</p>
      <p  class="border">
        ${data[i].content}
      </p>
      <br/>`;
      }
      comments.innerHTML = recent;
    }
  });

if (nameSingleBlog) {
  nameSingleBlog.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (nameSingleBlog.value === "") {
      nameErrorSingleBlog.innerHTML = "";
      isValid = false;
    } else if (nameSingleBlog.value.length < 3) {
      nameErrorSingleBlog.innerHTML = "enter atleast 3 characters";
    } else {
      nameErrorSingleBlog.innerHTML = "";
    }
  });
}
if (emailSingleBlog) {
  emailSingleBlog.addEventListener("keyup", (e) => {
    let email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailSingleBlog.value === "" || emailSingleBlog.value == null) {
      isValid = false;
      emailErrorSingleBlog.innerHTML = "";
    } else if (!emailSingleBlog.value.match(email_check)) {
      isValid = false;
      emailErrorSingleBlog.innerHTML = "valid email is required";
    } else {
      emailErrorSingleBlog.innerHTML = "";
    }
  });
}
if (messageSingleBlog) {
  messageSingleBlog.addEventListener("keyup", (e) => {
    if (messageSingleBlog.value === "" || messageSingleBlog.value == null) {
      messageErrorSingleBlog.innerHTML = "";
    } else if (messageSingleBlog.value.length < 10) {
      messageErrorSingleBlog.innerHTML =
        "Your message should be at least 10 characters";
    } else {
      messageErrorSingleBlog.innerHTML = "";
    }
  });
}
if (formSingleBlog) {
  formSingleBlog.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    e.stopPropagation();
    let isValid = true;
    let email_checkSingleBlog = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameSingleBlog.value === "") {
      e.preventDefault();
      nameErrorSingleBlog.innerHTML = "";
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
    } else {
      createComment();
    }
  });
}
async function createComment() {
  const data = {
    name: nameSingleBlog.value,
    email: emailSingleBlog.value,
    content: messageSingleBlog.value,
  };

  const response = await fetch(url + `/api/blogs/${blogId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameSingleBlog.value,
      email: emailSingleBlog.value,
      content: messageSingleBlog.value,
    }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const datas = await response.json();
  console.log(datas);
  console.log("comment sent successfully!!");

  messageErrorSingleBlog.innerHTML = "comment sent successfully!!";
  nameSingleBlog.textContent === "";
  messageSingleBlog.innerHTML === "";
  emailSingleBlog.innerHTML === "";
  location.reload();
}
