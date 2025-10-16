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