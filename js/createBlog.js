let title = document.querySelector("#createBlog-title");
let content = document.querySelector("#summernote");
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
let blogTitle = document.querySelector(".blogTitle");
let blogSummary = document.querySelector(".blogSummary");
let createButton = document.querySelector(".btnAdmin");
let formCreateBlog = document.querySelector("#createBlogForm");
const contentTextarea = document.querySelector(".createBlog-textarea");

formCreateBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const singleBlog = {
    title: title.value,
    content: content.value,
    image: "./img/product.png",
    comments: [],
    likes: 0,
  };
  allBlogs.push(singleBlog);
  localStorage.setItem("blogs", JSON.stringify(allBlogs));
  // console.log(singleBlog);
});

// validating
createButton.addEventListener("submit", function (event) {
  event.preventDefault();

  titleError.textContent = "";
  contentError.textContent = "";

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
});

// $("#summernote").addEventListener("keyup", () => {
//   console.log("hii");
// });

// $("#summernote").summernote();
// function getSummernoteContent() {
//   var summernoteContent = $("#summernote").summernote("code");
//   console.log(summernoteContent);
// }
// getSummernoteContent();

// createButton.addEventListener("click", create);
// function create() {
//   localStorage.setItem("title", title.value);
//   getSummernoteContent();
// }
// // blogTitle.innerHTML = localStorage.getItem("value");
// // local storage
// title.addEventListener("keyup", display);
// function display() {
//   localStorage.setItem("value", title.value);
//   // console.log("hii");
//   console.log(localStorage.getItem("value"));
//   blogTitle.innerHTML = localStorage.getItem("value");
// }
