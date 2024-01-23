// adding sticky transparent menu

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.8;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
