import { v4 as uuidv4 } from "https://cdn.skypack.dev/uuid";
let title = document.querySelector("#createBlog-title");
let content = document.querySelector("#summernote");
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
let blogTitle = document.querySelector(".blogTitle");
let blogSummary = document.querySelector(".blogSummary");
let createButton = document.querySelector(".btnAdmin");
let formCreateBlog = document.querySelector("#createBlogForm");
let date = document.querySelector("#Date");
let author = document.querySelector("#authorName");
// const contentTextarea = document.querySelector(".createBlog-textarea");
// console.log(author.value);
formCreateBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  titleError.textContent = "";
  contentError.textContent = "";
  console.log("hii");
  let isValid = true;

  if (title.value === "") {
    isValid = false;
    titleError.textContent = "Title is required.";
  } else {
    titleError.textContent = "";
  }

  if (content.value === "") {
    isValid = false;
    contentError.textContent = "Content is required.";
  } else {
    contentError.textContent = "";
  }

  if (isValid) {
    // Form submission logic goes here
    console.log("Form submitted successfully!");
  }
  const rareId = uuidv4();
  const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const singleBlog = {
    id: rareId,
    title: title.value,
    author: author.value,
    date: date.value,
    content: content.value,
    image: "./img/product.png",
    comments: [],
    likes: 0,
  };
  allBlogs.push(singleBlog);
  localStorage.setItem("blogs", JSON.stringify(allBlogs));
  // console.log(singleBlog);
  title.innerHTML = "";
  content.innerHTML = "";
});

// validating
// createButton.addEventListener("submit", function (event) {
//   event.preventDefault();

//   titleError.textContent = "";
//   contentError.textContent = "";

//   let isValid = true;

//   if (title.value === "") {
//     isValid = false;
//     titleError.textContent = "Title is required.";
//   } else {
//     titleError.textContent = "";
//   }

//   if (content.value === "") {
//     isValid = false;
//     contentError.textContent = "Content is required.";
//   } else {
//     contentError.textContent = "";
//   }

//   if (isValid) {
//     // Form submission logic goes here
//     console.log("Form submitted successfully!");
//   }
// });
