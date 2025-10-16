const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.carousel-images');
let index = 0;

function showImage(i) {
  carousel.style.transform = `translateX(${-i * 100}%)`;
  images.forEach((img, idx) => {
    img.classList.toggle('active', idx === i);
  });
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

// Swipe Support
let startX = 0;
document.querySelector('.carousel').addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextBtn.click();
  else if (endX - startX > 50) prevBtn.click();
});

showImage(index);
