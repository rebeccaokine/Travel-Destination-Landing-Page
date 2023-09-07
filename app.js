const images = document.querySelectorAll('.carousel-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Show the initial image
showImage(currentIndex);
