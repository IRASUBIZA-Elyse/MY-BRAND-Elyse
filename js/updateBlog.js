const update = document.querySelector(".btnAdmin");
const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const choosenBlog = allBlogs.find((blg) => blg.id == blogId);
console.log(choosenBlog);
