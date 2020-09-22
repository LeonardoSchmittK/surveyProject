let img = window.document.querySelector("#imageBg");

window.document.addEventListener("scroll", () => {
  if (
    this.document.body.scrollTop > 1100 ||
    this.document.documentElement.scrollTop > 1100
  ) {
    img.className = "imgBgAppear";
    img.style.display = "block";
  }
});

function toTop() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}
