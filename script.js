const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
});

/* Swipe support for mobile */
let startX = 0;
slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextBtn.click(); // swipe left
  if (endX - startX > 50) prevBtn.click(); // swipe right
});
