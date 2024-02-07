const update = document.querySelector(".btnAdmin");
const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const choosenBlog = allBlogs.find((blg) => blg.id == blogId);
console.log(choosenBlog);
const toUpdate = document.querySelector(".updateAll");
const title = document.querySelector("#titleUpdate");
const author = document.querySelector("#updateAuthor");
const date = document.querySelector("#upDate");
const content = document.querySelector("#summernote");
title.value = choosenBlog.title;
author.value = choosenBlog.author;
date.value = choosenBlog.date;
content.value = choosenBlog.content;

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
