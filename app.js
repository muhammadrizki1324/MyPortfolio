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

function openToWhatsapp(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const waUrl = `https://wa.me//6287880152514?text=hallo, nama saya ${name} dengan email  ${email} 
  tujuan saya ${subject} ${message}`;

  window.open(waUrl, '_Blank');
}
