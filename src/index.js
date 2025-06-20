import './styles.css';
import { setupDropdown } from './dropdown';
import steakOne from './assets/steak1.jpg';
import steakTwo from './assets/steak2.jpg';
import tomahawk from './assets/tomahawk.jpg';

function addCarouselImages() {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('carousel');

  const track = document.createElement('div');
  track.classList.add('carousel-track');

  const images = [steakOne, steakTwo, tomahawk];
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Delicious Steak';
    img.classList.add('carousel-image');
    track.appendChild(img);
  });

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '<';
  prevBtn.classList.add('carousel-btn', 'prev');

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '>';
  nextBtn.classList.add('carousel-btn', 'next');

  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('carousel-dots');

  const dots = images.map((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    return dot;
  });

  imageContainer.appendChild(prevBtn);
  imageContainer.appendChild(track);
  imageContainer.appendChild(nextBtn);
  imageContainer.appendChild(dotsContainer);

  document.body.appendChild(imageContainer);

  let currentIndex = 0;
  const totalImages = images.length;
  const intervalTime = 3000;
  let autoplayInterval;

  function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel()
    }, intervalTime);
  }
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
      startAutoplay();
    });
  });
  updateCarousel();
  startAutoplay();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown[data-trigger="click"]').forEach((el) => {
    setupDropdown(el, { trigger: 'click' });
  });

  document.querySelectorAll('.dropdown[data-trigger="hover"]').forEach((el) => {
    setupDropdown(el, { trigger: 'hover' });
  });

  // Global click listener to close all dropdowns (only for click-based dropdowns)
  document.addEventListener('click', () => {
    document
      .querySelectorAll(
        '.dropdown[data-trigger="click"] .dropdown-menu.visible'
      )
      .forEach((menu) => {
        menu.classList.remove('visible');
      });
  });
  addCarouselImages();
});
