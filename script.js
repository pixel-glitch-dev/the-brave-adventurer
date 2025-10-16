const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function showImage(i) {
  const total = images.length;
  if (i < 0) index = total - 1;
  else if (i >= total) index = 0;
  else index = i;

  const offset = -index * 100;
  document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

// Button controls
prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));

// Swipe support
let startX = 0;
document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".carousel").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) showImage(index + 1);
  if (endX - startX > 50) showImage(index - 1);
});
