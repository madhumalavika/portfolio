// Slideshow functionality
let slideIndices = {};
let autoPlayIntervals = {};

function changeSlide(n, btn) {
  const container = btn.closest('.slideshow-container');
  const slides = container.querySelectorAll('.slide');
  const dots = container.querySelectorAll('.dot');
  const containerId = container.parentElement.getElementsByTagName('h4')[0].innerText;
  
  if (!slideIndices[containerId]) slideIndices[containerId] = 1;
  
  // Stop auto-play when user manually changes slides
  stopAutoPlay(containerId);
  
  showSlide(slideIndices[containerId] += n, container);
  
  // Resume auto-play after 5 seconds
  setTimeout(() => startAutoPlay(container, containerId), 5000);
}

function currentSlide(n, dot) {
  const container = dot.closest('.slideshow-container');
  const containerId = container.parentElement.getElementsByTagName('h4')[0].innerText;
  
  // Stop auto-play when user manually changes slides
  stopAutoPlay(containerId);
  
  slideIndices[containerId] = n;
  showSlide(n, container);
  
  // Resume auto-play after 5 seconds
  setTimeout(() => startAutoPlay(container, containerId), 5000);
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

function autoAdvanceSlide(container, containerId) {
  if (!slideIndices[containerId]) slideIndices[containerId] = 1;
  showSlide(++slideIndices[containerId], container);
}

function startAutoPlay(container, containerId) {
  if (!autoPlayIntervals[containerId]) {
    autoPlayIntervals[containerId] = setInterval(() => {
      autoAdvanceSlide(container, containerId);
    }, 4000); // Change slide every 4 seconds
  }
}

function stopAutoPlay(containerId) {
  if (autoPlayIntervals[containerId]) {
    clearInterval(autoPlayIntervals[containerId]);
    autoPlayIntervals[containerId] = null;
  }
}

// Initialize first slide as active on page load and start auto-play
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    const firstSlide = container.querySelector('.slide');
    const firstDot = container.querySelector('.dot');
    if (firstSlide) firstSlide.classList.add('active');
    if (firstDot) firstDot.classList.add('active');
    
    // Start auto-play for this slideshow
    const containerId = container.parentElement.getElementsByTagName('h4')[0]?.innerText || `slideshow-${index}`;
    if (!slideIndices[containerId]) slideIndices[containerId] = 1;
    startAutoPlay(container, containerId);
  });
});
