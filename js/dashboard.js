const recentContact = document.querySelector(".contactTable");
const url = "https://my-brand-be-3ift.onrender.com";

// icons

//comments
let comments = document.querySelector(".commentsBox");
fetch(url + "/api/comments")
  .then((res) => res.json())
  .then((output) => {
    //console.log(output);
    let number = output.length;
    comments.innerHTML = `<i class="fa-sharp fa-solid fa-comments"></i>
  <p class="sharesNumber">${number} Comments</p>`;
  })
  .catch((error) => {
    console.error(error);
  });
// blogs
let blogs = document.querySelector(".allBlogs");
fetch(url + "/api/blogs")
  .then((response) => response.json())
  .then((output) => {
    let number = output.length;
    blogs.innerHTML = `<i class="fa-solid fa-blog"></i>
  <p class="sharesNumber">${number} Blogs</p>`;
  })
  .catch((error) => {
    console.error(error);
  });
//queries
let queries = "";

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

//blogs
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
