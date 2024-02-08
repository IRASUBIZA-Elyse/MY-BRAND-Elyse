import { v4 as uuidv4 } from "https://cdn.skypack.dev/uuid";
let title = document.querySelector("#createBlog-title");
let content = document.querySelector("#summernote");
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
let blogTitle = document.querySelector(".blogTitle");
let blogSummary = document.querySelector(".blogSummary");
let formCreateBlog = document.querySelector("#createBlogForm");
let date = document.querySelector("#Date");
let author = document.querySelector("#authorName");
let authorError = document.querySelector("#author-error");
let dateError = document.querySelector("#date-error");

const imageInput = document.querySelector(".update-image");
const fileInput = document.querySelector("#image-file");
let imageUrl = "";

imageInput.addEventListener("click", () => {
  fileInput.click();
});

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
    img: imageUrl,
    comments: [],
    likes: 0,
  };
  allBlogs.push(singleBlog);
  localStorage.setItem("blogs", JSON.stringify(allBlogs));
  // console.log(singleBlog);
  alert("Form submitted successfully!");
  title.value = "";
  author.value = "";
  content.value = "";
  date.value = "";
  imageUrl = "";
  window.location.href = "./Dashboard.html";
});
