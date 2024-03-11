const update = document.querySelector(".btnAdmin");
const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
console.log("blogId", blogId);
const title = document.querySelector("#titleUpdate"); // title inpit
const date = document.querySelector("#upDate"); // date
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
const content = document.querySelector("#summernote"); //text editor
let formUpdateBlog = document.querySelector("#updateBlogForm"); // update form id
const fileInput = document.querySelector("#image-file");
const url = "https://my-brand-be-3ift.onrender.com";
fetch(url + `/api/blogs/${blogId}`)
  .then((res) => res.json())
  .then((output) => {
    //console.log(output.content);
    title.value = output.title;
    let fetchedContent = output.content;
    $(document).ready(function () {
      $("#summernote").summernote({
        toolbar: [
          ["style", ["bold", "italic", "underline", "clear"]],
          ["font", ["strikethrough", "superscript", "subscript"]],
          ["fontsize", ["fontsize"]],
          ["color", ["color"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["height", ["height"]],
          ["misc", ["fullscreen", "codeview"]],
        ],
      });

      // Set the content of Summernote
      $("#summernote").summernote("code", fetchedContent);
    });
    content.value = output.content;
    //fileInput.value = output.image;
  });
formUpdateBlog.addEventListener("submit", (e) => {
  //console.log("ok");
  e.preventDefault();
  let isValid = true;

  // if (title.value === "") {
  //   isValid = false;
  //   titleError.innerText = "Title is required.";
  // } else {
  //   titleError.innerText = "";
  // }

  // if (content.value === "") {
  //   isValid = false;
  //   contentError.innerText = "Content is required.";
  // } else {
  //   contentError.innerText = "";
  // }
  if (isValid) {
    updateBlog();
  }
  // // const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
  // const updatedBlog = {
  //   ...choosenBlog,
  //   title: title.value,
  //   //author: author.value,
  //   date: date.value,
  //   content: content.value,
  // };
  // console.log(updatedBlog);
  // allBlogs[choosenBlogIndex] = updatedBlog;
  // localStorage.setItem("blogs", JSON.stringify(allBlogs));
  // title.value = "";
  // //author.value = "";
  // date.value = "";
  // content.value = "";
  //windows.location.href = "./adminBlogs.html";
});
async function updateBlog() {
  const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
  const contents = contentTags;
  const titles = title.value;
  if (!fileInput.files || !fileInput.files[0]) {
    console.error("Please select image");
    return;
  }
  const formData = new FormData();
  formData.append("title", titles);
  formData.append("content", contents);
  formData.append("image", fileInput.files[0]);

  const response = await fetch(url + `/api/blogs/${blogId}`, {
    method: "PATCH",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  alert("Blog updated successfully!!");
  location.reload();
  window.location.href = "./adminBlogs.html";
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
  //const token = localStorage.removeItem("token");
  checkAuthentication();
  //requireAuth;
  //const token = localStorage.removeItem("token");
});
