document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel img");
  let currentIndex = 0;

  function showNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove("active");

    // Calculate the index of the next image, looping back to the start
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].classList.add("active");
  }

  // Set an interval to call the showNextImage function
  // It changes the image every 5 seconds (5000 milliseconds)
  setInterval(showNextImage, 3000);
});


// policy page script

document.addEventListener('DOMContentLoaded', () => {
    const years = document.querySelectorAll('.timeline .year');
    const yearDescription = document.getElementById('year-description');
    const journeyImage = document.getElementById('journey-image');
    const imageCaptionText = document.getElementById('image-caption-text');
    const fullDescription = document.querySelector('.text-section p:not(:first-child)');

    years.forEach(yearElement => {
        yearElement.addEventListener('click', () => {
            // Remove 'active' class from all years
            years.forEach(y => y.classList.remove('active'));

            // Add 'active' class to the clicked year
            yearElement.classList.add('active');

            // Update content based on data attributes
            const year = yearElement.dataset.year;
            const description = yearElement.dataset.description;
            const imageUrl = yearElement.dataset.image;
            const caption = yearElement.dataset.caption;

            yearDescription.textContent = year;
            fullDescription.textContent = description;
            journeyImage.src = imageUrl;
            imageCaptionText.textContent = caption;
        });
    });
});