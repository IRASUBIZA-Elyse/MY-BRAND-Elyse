const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
//console.log("blogId", blogId);
const queries = document.querySelector(".commentsAdmin");
const url = "https://my-brand-be-3ift.onrender.com";
let allcomments = "";
fetch(url + `/api/blogs/${blogId}/comments`)
  .then((res) => res.json())
  .then((output) => {
    output.forEach((blg) => {
      allcomments += `
    <tr key=${blg._id}>
    <td>
      ${blg.name}
    </td>
    <td>
      ${blg.email}
    </td>
    <td>
      ${blg.content}
    </td>
    <td>
<i class="fa-solid fa-trash-can" id="delete" ></i>
</td>
  </tr>
    `;
    });
    queries.innerHTML = allcomments;
  });
queries.addEventListener("click", (e) => {
  let comments = e.target;
  if (comments.classList.contains("fa-trash-can")) {
    const id = comments.closest("tr").getAttribute("key");
    console.log(id);
    const url = "https://my-brand-be-3ift.onrender.com";
    fetch(url + `/api/blogs/${blogId}/comments/${id}`, {
      method: "DELETE",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
      body: JSON.stringify(id),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("comment deleted successfully!");
        location.reload();
      })
      .catch((error) => console.error("Error deleting blog:", error));
  }
});
