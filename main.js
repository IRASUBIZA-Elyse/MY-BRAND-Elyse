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
