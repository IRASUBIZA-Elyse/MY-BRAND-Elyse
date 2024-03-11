const recentContact = document.querySelector(".contactTable");
let queries = "";
const url = "https://my-brand-be-3ift.onrender.com";
fetch(url + "/api/queries")
  .then((res) => res.json())
  .then((output) => {
    output.forEach((query) => {
      queries += `
            
                <tr>
                  <td>
                    ${query.firstName} ${query.lastName}
                  </td>
                  <td>
                    ${query.email}
                  </td>
                  <td>
                    ${query.phoneNumber}
                  </td>
                  <td>
                    ${query.message} 
                  </td>
                </tr>
           `;
    });
    recentContact.innerHTML = queries;
  });

const recentBlog = document.querySelector(".recentBlog");
let recent = "";
fetch(url + "/api/blogs")
  .then((res) => res.json())
  .then((output) => {
    //console.log("output", output);
    const max = output.length < 5 ? output.length : 5;
    //console.log("max", max);
    // for (let i = output.length; i < max; output.length--) {

    output.forEach((data) => {
      let string = data.content;
      let weight = 90;
      let result = addThreedots(string, weight);
      function addThreedots(string, weight) {
        return string.length > weight
          ? string.slice(0, weight) + "... "
          : string;
      }
      recent += `
    <tr>
      <td>
        ${data.title}
      </td>
      <td>
        Elyse
      </td>
      <td>
        ${data.date}
      </td>
      <td>
        ${result}
      </td>
    </tr>
`;
    });

    recentBlog.innerHTML = recent;
  });
const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "./index.html";
});
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
