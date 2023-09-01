const headings = document.querySelectorAll('.neon-heading');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function toggleAnimation() {
  headings.forEach((heading) => {
    const box = heading.querySelector('.neon-box');
    if (isElementInViewport(heading)) {
      box.style.animation = 'neonBlink 2s ease-in-out 1';
      box.style.opacity = '1'; // Show the box when in view
    } else {
      box.style.animation = 'none';
      box.style.opacity = '0';
    }
  });
}

function handleScroll() {
  toggleAnimation();
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', toggleAnimation);