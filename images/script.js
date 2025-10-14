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