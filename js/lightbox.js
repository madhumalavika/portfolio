// Slideshow functionality
let slideIndices = {};

function changeSlide(n, btn) {
  const container = btn.closest('.slideshow-container');
  const slides = container.querySelectorAll('.slide');
  const dots = container.querySelectorAll('.dot');
  const containerId = container.parentElement.getElementsByTagName('h4')[0].innerText;
  
  if (!slideIndices[containerId]) slideIndices[containerId] = 1;
  showSlide(slideIndices[containerId] += n, container);
}

function currentSlide(n, dot) {
  const container = dot.closest('.slideshow-container');
  const containerId = container.parentElement.getElementsByTagName('h4')[0].innerText;
  slideIndices[containerId] = n;
  showSlide(n, container);
}

function showSlide(n, container) {
  const slides = container.querySelectorAll('.slide');
  const dots = container.querySelectorAll('.dot');
  
  if (n > slides.length) {
    n = 1;
  } else if (n < 1) {
    n = slides.length;
  }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[n - 1].classList.add('active');
  dots[n - 1].classList.add('active');
}

// Initialize first slide as active on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    const firstSlide = container.querySelector('.slide');
    const firstDot = container.querySelector('.dot');
    if (firstSlide) firstSlide.classList.add('active');
    if (firstDot) firstDot.classList.add('active');
  });
});
