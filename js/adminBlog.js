//const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
const url = "https://my-brand-be-3ift.onrender.com";
const blogsAdmin = document.querySelector(".blogsAdmin");
let blogs = "";
fetch(url + "/api/blogs")
  .then((res) => res.json())
  .then((output) => {
    //console.log("output", output);
    output.forEach((blg) => {
      //console.log("blg", blg.date);
      let length = 100;
      let string = blg.content;
      let result = addThreeDotsAfterLength(string, length);
      function addThreeDotsAfterLength(string, length) {
        return string.length > length
          ? string.slice(0, length) + "..."
          : string;
      }
      let newDate = blg.date;
      let Date = goodFormat(newDate);
      function goodFormat(dt) {
        let result = "";
        let format = dt.split(" ");
        for (let i = 0; i < format.length; i++) {
          if (!format[i].startsWith("T")) {
            result += format[i] + " ";
          }
        }
        return result;
      }
      //console.log(Date);
      blogs += `<div class="container blogsBox" key=${blg._id}>
      <div class="blogImage">
  <img src="${blg.image}" alt="blog images" />
   </div>
   <div class="BlogContent">
  <h2 class="blogHeading">
    <span class="text_primary">${blg.title}</span>
  </h2>
  <p>
    ${result}
    
  </p>
   </div>
  <div class="authorDate">
  <p>Date: <span>${Date}</span></p>
  <p>Author: <span>Henry Elyse</span></p>
  </div>

  <div class="svgPosition buttonsAdmin">
  <div class="btnAdmin editingBlog">edit</div>
  <div class="btnAdmin deleteBlog">delete</div>
  </div>
  </div>`;
    });
    const removeBlogs = document.querySelectorAll(".blogsBox");
    const removeButton = document.querySelectorAll(".deleteBlog");
    const editButton = document.querySelectorAll(".editingBlog");

    blogsAdmin.innerHTML = blogs;
    blogsAdmin.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("editingBlog")) {
        //console.log("hii");
        const id = target.closest(".blogsBox").getAttribute("key");
        window.location.href = `./updateBlogs.html?id=${id}`;
      }
    });
    blogsAdmin.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("deleteBlog")) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        })
        .then(() => { const id = target.closest(".blogsBox").getAttribute("key");
        console.log("id: ", id);
        const url = "https://my-brand-be-3ift.onrender.com";
        fetch(url + `/api/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(id),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            alert("Blog deleted successfully!");
            location.reload();
          })
          .catch((error) => console.error("Error deleting blog:", error));
      }
      //window.location.href = `./updateBlogs.html?id=${id}`;
        )
        //console.log("hii");
        
    

// editButton.forEach((remove) => {
//   remove.addEventListener("click", (e) => {
//     console.log("hii");
//     //const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     // e.preventDefault();
//     // e.stopPropagation();

//     const id = e.target.closest(".blogsBox").getAttribute("key");
//     //location.reload();
//     window.location.href = `./updateBlogs.html?id=${id}`;
//   });
// });

// removeButton.forEach((remove) => {
//   remove.addEventListener("click", (e) => {
//     const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     e.preventDefault();
//     e.stopPropagation();

//     const id = e.target.closest(".blogsBox").getAttribute("key");
//     console.log(id);
//     const updatedBlogs = allBlogs.filter((blog) => blog.id != id);
//     localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
//     location.reload();
//   });
// });
