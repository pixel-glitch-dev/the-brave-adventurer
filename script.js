const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselImages = document.querySelector(".carousel-images");

let index = 0;

function showImage(i) {
  const total = images.length;
  if (i < 0) index = total - 1;
  else if (i >= total) index = 0;
  else index = i;

  const offset = -index * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Click controls
prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));

// Swipe controls
let startX = 0;

carouselImages.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carouselImages.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) showImage(index + 1);
  else if (endX - startX > 50) showImage(index - 1);
});

// Auto slide every 7 seconds
setInterval(() => {
  showImage(index + 1);
}, 7000);

// Resize handler (keeps images scaled correctly)
window.addEventListener("resize", () => {
  carouselImages.style.transform = `translateX(${-index * 100}%)`;
});
