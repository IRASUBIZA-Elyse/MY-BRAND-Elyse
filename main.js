// adding sticky transparent menu

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.8;
    document.querySelector(".footer2").style.opacity = 0.8;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    document.querySelector(".footer2").style.opacity = 0.8;
  }
});
// for the navbar menu
document.getElementById("menu-button").addEventListener("click", function () {
  var navList = document.querySelector("#navbar ul");
  navList.style.display = navList.style.display === "block" ? "none" : "block";
  navList.style.width = navList.style.width === "100%" ? "0" : "100%";
});

// for the admin sidebar
document.getElementById("menu-admin").addEventListener("click", function () {
  var adminList = document.querySelector(".sidebarAdmin");
  adminList.style.display === "block" ? "none" : "block";
  adminList.style.width = adminList.style.width === "100%" ? "0" : "100%";
});
