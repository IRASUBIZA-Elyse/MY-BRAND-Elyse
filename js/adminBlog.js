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
  <div><a href="updateBlogs.html" class="btnAdmin">edit</a></div>
  <div class="btnAdmin">delete</div>
</div>
</div>`;
});
blogsAdmin.innerHTML = blogs;
