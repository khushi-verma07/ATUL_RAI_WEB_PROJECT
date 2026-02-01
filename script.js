document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 3000);
});

// About Section
 fetch("about.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("about-section").innerHTML = data;
    })
    .catch(error => console.error("Error loading About section:", error));

// Policy page year functionality
if (document.querySelector('.timeline')) {
  const yearElements = document.querySelectorAll('.year');
  const journeyImage = document.getElementById('journey-image');
  const yearDescription = document.getElementById('year-description');
  const imageCaptionText = document.getElementById('image-caption-text');

  yearElements.forEach(year => {
    year.addEventListener('click', function() {
      // Remove active class from all years
      yearElements.forEach(y => y.classList.remove('active'));
      // Add active class to clicked year
      this.classList.add('active');
      
      // Update content
      yearDescription.textContent = this.dataset.year;
      journeyImage.src = this.dataset.image;
      imageCaptionText.textContent = this.dataset.caption;
      
      // Update description paragraph
      const descriptionP = yearDescription.nextElementSibling;
      descriptionP.textContent = this.dataset.description;
    });
  });
}