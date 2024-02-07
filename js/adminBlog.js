const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const blogsAdmin = document.querySelector(".blogsAdmin");
let blogs = "";
allBlogs.forEach((blg) => {
  let length = 90;
  let string = blg.content;
  let result = addThreeDotsAfterLength(string, length);
  function addThreeDotsAfterLength(string, length) {
    return string.length > length ? string.slice(0, length) + "..." : string;
  }
  blogs += `<div class="container blogsBox" key=${blg.id}>
<div class="blogImage">
  <img src="./img/blogpic 1.png" alt="blog images" />
</div>
<div class="BlogContent">
  <h2 class="blogHeading">
    <span class="text_primary">${blg.title}</span>
  </h2>
  <p>
    ${result}
    <span class="text_primary">Readmore</span>
  </p>
</div>
<div class="authorDate">
  <p>Date: <span>${blg.auhtor}</span></p>
  <p>Author: <span>${blg.author}</span></p>
</div>

<div class="svgPosition buttonsAdmin">
  <div class="btnAdmin edittingBlog">edit</div>
  <div class="btnAdmin deleteBlog">delete</div>
</div>
</div>`;
});
blogsAdmin.innerHTML = blogs;

const removeBlogs = document.querySelectorAll(".blogsBox");
const removeButton = document.querySelectorAll(".deleteBlog");
const editButton = document.querySelectorAll(".edittingBlog");

removeButton.forEach((remove) => {
  remove.addEventListener("click", (e) => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    e.preventDefault();
    e.stopPropagation();

    const id = e.target.closest(".blogsBox").getAttribute("key");
    console.log(id);
    const updatedBlogs = allBlogs.filter((blog) => blog.id != id);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    location.reload();
  });
});

editButton.forEach((remove) => {
  remove.addEventListener("click", (e) => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    e.preventDefault();
    e.stopPropagation();

    const id = e.target.closest(".blogsBox").getAttribute("key");
    location.reload();
    window.location.href = `./updateBlogs.html?id=${id}`;
  });
});
