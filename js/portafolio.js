document.addEventListener("DOMContentLoaded", function() {
//Pop up de portafolio
const images = document.querySelectorAll('.portfolio-img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupDescription2 = document.getElementById("popup-description2");
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
//Menu hamburgesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const carrito = document.querySelector("#carrito");
//menu hambiurguesa
let currentIndex = 0;
//cierre pop up portafolio

//Menu hamburguesa
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  carrito.src = '../img/btn_carritooros.svg';
})
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  carrito.src = '../img/btn_carritooros.svg';
})
//Termina menu hamburguesa

//Pop up Portafolio
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openPopup(img);
    });
});

function openPopup(img) {
    popupImg.src = img.src;
    popupTitle.innerHTML = img.dataset.title;
    popupDescription.innerHTML = img.dataset.description;
    popupDescription2.innerHTML = img.dataset.description2;
    popup.classList.add('show');
}

function closePopup() {
    popup.classList.remove('show');
}
//Navegacion entre imagenes
function showImage(index) {
    if (index >= 0 && index < images.length) {
      const img = images[index];
      popupImg.src = img.src;
      popupTitle.innerHTML = img.dataset.title;
      popupDescription.innerHTML = img.dataset.description;
      currentIndex = index;
    }
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  closeBtn.addEventListener('click', closePopup);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });
//Termina Pop up Portafolio
});