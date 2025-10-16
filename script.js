const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => showSlide(index + 1));
prev.addEventListener("click", () => showSlide(index - 1));

let startX = 0;
carousel.addEventListener("touchstart", e => startX = e.touches[0].clientX);
carousel.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50) showSlide(index - 1);
  else if (diff < -50) showSlide(index + 1);
});
