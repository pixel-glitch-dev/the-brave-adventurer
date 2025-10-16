const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Button navigation
next.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide();
});

prev.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
});

// Swipe support for mobile
let startX = 0;
let endX = 0;

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) { // prevent accidental triggers
    if (diff > 0) {
      // Swipe left
      index = (index + 1) % totalSlides;
    } else {
      // Swipe right
      index = (index - 1 + totalSlides) % totalSlides;
    }
    showSlide();
  }
}

// Resize fix for mobile
window.addEventListener("resize", showSlide);
