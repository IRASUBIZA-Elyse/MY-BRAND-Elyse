const url = "https://my-brand-be-3ift.onrender.com";
let recentContact = "";
const queries = document.querySelector(".queries");
fetch(url + "/api/queries")
  .then((res) => res.json())
  .then((output) => {
    console.log(output);
    output.forEach((blg) => {
      recentContact += `
               <tr>
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
             </tr>`;
    });
    queries.innerHTML = recentContact;
  });
