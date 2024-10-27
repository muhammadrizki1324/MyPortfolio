function addToggle(event) {
  const button = event.target;
  const detailElement = button.parentElement.nextElementSibling;

  // Toggle display detail
  detailElement.style.display = detailElement.style.display === 'block' ? 'none' : 'block';

  // Toggle "active" class on button
  button.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.img-thumbnail');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      this.classList.toggle('zoom'); // Menambahkan/removing kelas zoom saat di-click
    });
  });
});
