const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const blogsAdmin = document.querySelector(".blogsAdmin");
let blogs = "";
allBlogs.forEach((blg) => {
  blogs += `<div class="container blogsBox">
<div class="blogImage">
  <img src="./img/blogpic 1.png" alt="blog images" />
</div>
<div class="BlogContent">
  <h2 class="blogHeading">
    <span class="text_primary">${blg.title}</span>
  </h2>
  <p>
    ${blg.content}
    <span class="text_primary">Readmore</span>
  </p>
</div>
<div class="authorDate">
  <p>Date: <span>${blg.auhtor}</span></p>
  <p>Author: <span>${blg.author}</span></p>
</div>

<div class="svgPosition buttonsAdmin">
  <div><a href="updateBlogs.html" class="btnAdmin edittingBlog">edit</a></div>
  <div class="btnAdmin deleteBlog">delete</div>
</div>
</div>`;
});
blogsAdmin.innerHTML = blogs;

const removeBlogs = document.querySelectorAll(".blogsBox");
const removeButton = document.querySelector(".deleteBlog");
const editButton = document.querySelector(".edittingBlog");

removeBlogs.forEach((removeButton, editButton) => {
  removeButton.addEventListener("click", (e) => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    e.preventDefault();
    // e.stopPropagation();
    console.log(allBlogs);
    // const id = e.target.closest(".blogsBox").getAttribute("key");
    // const updatedBlogs = allBlogs.filter((blog) => blog.id != id);
    // localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // location.reload();
  });
  // editButton.addEventListener("click", (e) => {
  //   const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  //   e.preventDefault();
  //   console.log(allBlogs);
  // });
});
