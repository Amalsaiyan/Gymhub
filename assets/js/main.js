window.onload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    document.querySelector("header").classList.add("scrolled");
  } else {
    document.querySelector("header").classList.remove("scrolled");
  }
});

console.log("haii");

