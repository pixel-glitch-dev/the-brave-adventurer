const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide();
});

prev.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
});

// Resize fix for mobile
window.addEventListener("resize", showSlide);
