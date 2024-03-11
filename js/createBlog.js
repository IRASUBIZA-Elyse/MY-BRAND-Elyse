import { v4 as uuidv4 } from "https://cdn.skypack.dev/uuid";
let title = document.querySelector("#createBlog-title");
let content = document.querySelector("#summernote");
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
let blogTitle = document.querySelector(".blogTitle");
let blogSummary = document.querySelector(".blogSummary");
let formCreateBlog = document.querySelector("#createBlogForm");
let date = document.querySelector("#Date");
// let author = document.querySelector("#authorName");
// let authorError = document.querySelector("#author-error");
let dateError = document.querySelector("#date-error");

const imageInput = document.querySelector(".update-image");
const fileInput = document.querySelector("#image-file");
let imageUrl = "";

// imageInput.addEventListener("click", () => {
//   fileInput.click();
// });

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    imageInput.style.backgroundImage = `url(${reader.result})`;
    imageUrl = reader.result;
  };

  reader.readAsDataURL(file);
});

formCreateBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  let isValid = true;

  if (title.value === "") {
    isValid = false;
    titleError.innerText = "Title is required.";
  } else {
    titleError.innerText = "";
  }

  if (content.value === "") {
    isValid = false;
    contentError.innerText = "Content is required.";
  } else {
    contentError.innerText = "";
  }
  // if (author.value === "") {
  //   isValid = false;
  //   authorError.innerText = "author is required.";
  // } else {
  //   authorError.innerText = "";
  // }
  // if (date.value === "") {
  //   isValid = false;
  //   dateError.innerText = "data is required.";
  // } else {
  //   dateError.innerText = "";
  // }

  if (isValid) {
    createBlog();
  }
});
async function createBlog() {
  //console.log(content.value);
  const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
  const contents = contentTags;
  //console.log(contents);
  const titles = title.value;
  //console.log(titles);
  const token = localStorage.getItem("token");
  if (!fileInput.files || !fileInput.files[0]) {
    console.error("Please select image");
    return;
  }
  const formData = new FormData();
  formData.append("title", titles);
  formData.append("content", content.value);
  formData.append("image", fileInput.files[0]);

  const url = "https://my-brand-be-3ift.onrender.com";

  const response = await fetch(url + "/api/blogs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  alert("Blog created successfully!!");
  window.location.href = "./dashboard.html";
}
function checkAuthentication() {
  const token = localStorage.getItem("token");
  if (!token) {
    // Redirect to login page if token is not present
    window.location.href = "./logIn.html";
  }
}

// Call checkAuthentication when the dashboard page loads
window.addEventListener("DOMContentLoaded", () => {
  checkAuthentication();
});
