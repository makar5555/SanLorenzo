const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let index = 0;

function nextSlide() {
  index++;
  if (index === slides.length) {
    index = 0;
  }
  updateSlide();
}

function updateSlide() {
  const offset = -index * slides[0].offsetWidth;
  document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
