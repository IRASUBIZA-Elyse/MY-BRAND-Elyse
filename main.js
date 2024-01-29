// adding sticky transparent menu

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
    document.querySelector(".footer2").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    document.querySelector(".footer2").style.opacity = 0.9;
  }
});
// for the navbar menu
// document.getElementById("menu-button").addEventListener("click", function () {
//   var navList = document.querySelector("#navbar ul");
//   navList.style.display = navList.style.display === "block" ? "none" : "block";
//   navList.style.width = navList.style.width === "100%" ? "0" : "100%";
// });

// trial
function showSidebar() {
  let sidebar = document.getElementById("sidebarIndex");

  sidebar.style.display = "block";
}
function hideSidebar() {
  let sidebar = document.getElementById("sidebarIndex");
  sidebar.style.display = "none";
  sidebar.style.transition = "all 0.5s ease-in";
}
// form validation
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
