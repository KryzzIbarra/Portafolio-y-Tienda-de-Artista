document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagen-contenedor");
    const popupExposiciones = document.getElementById("popup-exposiciones");
    const popupFormacion = document.getElementById("popup-formacion");
    const closeBtns = document.querySelectorAll(".close-btn");
    //Menu hamburgesa
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const carrito = document.querySelector("#carrito");
    //menu hambiurguesa
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

    imagenes[0].addEventListener("click", () => {
      popupExposiciones.classList.add("show");
    });
  

    imagenes[1].addEventListener("click", () => {
      popupFormacion.classList.add("show");
    });
  

    imagenes[2].addEventListener("click", () => {
      window.location.href = "../cvdownload/cvCristinaIbarra.pdf"; 
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".popups").classList.remove("show");
      });
    });
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("popups")) {
        e.target.classList.remove("show");
      }
    });
  });