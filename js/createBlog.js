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
let authorError = document.querySelector("#author-error");
let dateError = document.querySelector("#date-error");
let image = document.querySelector(".image-lc");
// const contentTextarea = document.querySelector(".createBlog-textarea");
// console.log(author.value);
formCreateBlog.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  // image.addEventListener("change", () => {
  //   const fr = new FileReader();
  //   fr.readAsDataURL(image.files[0]);
  //   fr.addEventListener("load", () => {
  //     const url = fr.result;
  //   });
  // });
  // console.log("hii");
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
  const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
  const singleBlog = {
    id: rareId,
    title: title.value,
    author: author.value,
    date: date.value,
    content: contentTags,
    // img: image.scr,
    comments: [],
    likes: 0,
  };
  allBlogs.push(singleBlog);
  localStorage.setItem("blogs", JSON.stringify(allBlogs));
  // console.log(singleBlog);
});
