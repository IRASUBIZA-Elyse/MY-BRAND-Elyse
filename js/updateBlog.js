const update = document.querySelector(".btnAdmin");
const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const choosenBlogIndex = allBlogs.findIndex((blog) => blog.id == blogId);
// console.log(choosenBlog.id);
const title = document.querySelector("#titleUpdate"); // title inpit
const author = document.querySelector("#updateAuthor"); // author
const date = document.querySelector("#upDate"); // date
const content = document.querySelector("#summernote"); //text editor
let formUpdateBlog = document.querySelector("#updateBlogForm"); // update form id

if (choosenBlogIndex !== -1) {
  const choosenBlog = allBlogs[choosenBlogIndex];
  console.log(choosenBlog);
  title.value = choosenBlog.title;
  author.value = choosenBlog.author;
  date.value = choosenBlog.date;
  content.value = choosenBlog.content;
  console.log("ok");
  formUpdateBlog.addEventListener("submit", (e) => {
    console.log("ok");
    e.preventDefault();

    const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
    const updatedBlog = {
      ...choosenBlog,
      title: title.value,
      author: author.value,
      date: date.value,
      content: contentTags,
    };
    console.log(updatedBlog);
    allBlogs[choosenBlogIndex] = updatedBlog;
    localStorage.setItem("blogs", JSON.stringify(allBlogs));
    title.value = "";
    author.value = "";
    date.value = "";
    content.value = "";
    windows.location.href = "./adminBlogs.html";
  });
}

// console.log(choosenBlog);

//   console.log(e.target);
//
// e.stopPropagation();
// let isValid = true;

// if (title.value === "") {
//   isValid = false;
//   titleError.textContent = "Title is required.";
// } else {
//   titleError.textContent = "";
// }

// if (content.value === "") {
//   isValid = false;
//   contentError.textContent = "Content is required.";
// } else {
//   contentError.textContent = "";
// }

// if (isValid) {
//   // Form submission logic goes here
//   console.log("Form submitted successfully!");
// }

// const rareId = uuidv4();
//
// console.log(choosenBlog);
// localStorage.setItem("blogs", JSON.stringify(allBlogs));
// alert("updated");
