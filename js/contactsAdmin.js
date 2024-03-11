const url = "https://my-brand-be-3ift.onrender.com";
let recentContact = "";
const queries = document.querySelector(".queries");
fetch(url + "/api/queries")
  .then((res) => res.json())
  .then((output) => {
    console.log(output);
    output.forEach((blg) => {
      recentContact += `
               <tr key=${blg._id}>
               <td>
                 ${blg.firstName} ${blg.lastName}
               </td>
               <td>
                 ${blg.email}
               </td>
               <td>
                 ${blg.phoneNumber}
               </td>
               <td>
                 ${blg.message} 
               </td>
               <td>
      <i class="fa-solid fa-trash-can" id="delete" ></i>
      </td>
             </tr>`;
    });
    queries.innerHTML = recentContact;
  });

queries.addEventListener("click", (e) => {
  let query = e.target;
  if (query.classList.contains("fa-trash-can")) {
    const id = query.closest("tr").getAttribute("key");
    console.log(id);
    const url = "https://my-brand-be-3ift.onrender.com";
    fetch(url + `/api/queries/${id}`, {
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
        alert("query deleted successfully!");
        location.reload();
      })
      .catch((error) => console.error("Error deleting blog:", error));
  }
  //console.log(query);
});
