let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 80) {
    // Always show header near the top of page
    header.classList.remove("hide");
  } else if (currentScrollY > lastScrollY) {
    // Scrolling down
    header.classList.add("hide");
  } else {
    // Scrolling up
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'));

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === slideIndex);
    });

    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});
