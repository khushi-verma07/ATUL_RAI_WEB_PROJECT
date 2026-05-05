document.addEventListener("DOMContentLoaded", function () {
  // Carousel Logic
  const images = document.querySelectorAll(".carousel img");
  if (images.length > 0) {
    let currentIndex = 0;
    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }
    setInterval(showNextImage, 6000);
  }

  // Hamburger Menu
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Scroll Reveal Animations for premium feel
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('reveal-hidden');
    observer.observe(section);
  });
});

// About Section Load
fetch("about.html")
  .then(response => response.text())
  .then(data => {
    const aboutSec = document.getElementById("about-section");
    if (aboutSec) aboutSec.innerHTML = data;
  })
  .catch(error => console.error("Error loading About section:", error));

// Policy page year functionality
if (document.querySelector('.timeline')) {
  const yearElements = document.querySelectorAll('.year');
  const journeyImage = document.getElementById('journey-image');
  const yearDescription = document.getElementById('year-description');
  const imageCaptionText = document.getElementById('image-caption-text');

  yearElements.forEach(year => {
    year.addEventListener('click', function () {
      yearElements.forEach(y => y.classList.remove('active'));
      this.classList.add('active');

      yearDescription.textContent = this.dataset.year;
      journeyImage.src = this.dataset.image;
      imageCaptionText.textContent = this.dataset.caption;

      const descriptionP = yearDescription.nextElementSibling;
      descriptionP.textContent = this.dataset.description;
    });
  });
}