document.addEventListener("DOMContentLoaded", function() {
let imagenes = [
    {
        "url": "../img/Portafolio/img_portgt1.jpg",
        "nombre": "Reestructuración y recuerdos",
    },
    {
        "url": "../img/Portafolio/img_portgt4.png",
        "nombre": "Retorno",
    },
    {
        "url": "../img/Portafolio/img_portgt8.jpg",
        "nombre": "Puzzle de recuerdos",
    },
    {
        "url": "../img/Portafolio/img_portgt12.jpg",
        "nombre": "Lo transitorio del andar",
    },
    {
        "url": "../img/Portafolio/img_portgt15.jpg",
        "nombre": "La espera amarga",
    },
    {
        "url": "../img/Portafolio/img_portgt17.JPG",
        "nombre": "Ilusiones",
    },
];
let imagenesTienda = [
    {
        "url": "../img/Tienda/Img_Tienda.jpg",
        "nombre": "Totebag Serigrafía",
    },
    {
        "url": "../img/Tienda/IMG_TIENDA1.jpg",
        "nombre": "Sudadera GatoHongo",
    },
    {
        "url": "../img/Tienda/Img_Tienda2.jpg",
        "nombre": "Totebag Xilografía",
    },
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let textoCarrusel = document.getElementById('textoCarrusel');
let prev = document.getElementById('prev'); 
let next = document.getElementById('next');
let actual = 0;

let atrasTienda = document.getElementById('atrasTienda');
let adelanteTienda = document.getElementById('adelanteTienda');
let imagenTienda = document.getElementById('imgTienda');
let puntosTienda = document.getElementById('puntosTienda');
let textoTienda = document.getElementById('textoTienda');
let prevTienda = document.getElementById('prevTienda'); 
let nextTienda = document.getElementById('nextTienda');
let actualTienda = 0;
//Menu hamburgesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const carrito = document.querySelector("#carrito");
//const abrirIconButton = document.querySelector("#abrirIcons")
//const iconsSocial = document.querySelector("#iconsSocial");
//Cierre menu hamburguesa

//Carruseles
posicionCarrusel();
posicionCarruselTienda();
//Carruseles

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
    var boton = document.getElementById('abrirIcons');
    var iconsRedes = document.getElementById('iconsRedes');
    var icons = document.getElementById('iconsSocial');

    boton.addEventListener('click', function() {
        if (icons.classList.contains('show')) {
            icons.classList.remove('show');
            iconsRedes.src = '../img/btn_chat.svg';  // Imagen de abrir
        } else {
            //icons.classList.remove('show');
            icons.classList.add('show');
            iconsRedes.src = '../img/btn_tacheeros.svg'; //+ new Date().getTime(); // Imagen de cerrar
        }
    });
//});

//Cierre menu hamburguesa

//Carrusel 1
atras.addEventListener('click', function() {
    actual -= 1;
    if (actual < 0) {
        actual = imagenes.length - 1;
    }
    actualizarImagen();
});

adelante.addEventListener('click', function() {
    actual += 1;
    if (actual >= imagenes.length) {
        actual = 0;
    }
    actualizarImagen();
});

puntos.addEventListener('click', function(event) {
    if (event.target.classList.contains('punto')) {
        actual = Array.from(puntos.children).indexOf(event.target);
        actualizarImagen();
    }
});

function actualizarImagen() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`;
    textoCarrusel.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>`;
    posicionCarrusel();

    let prevImagen = actual === 0 ? imagenes.length - 1 : actual - 1; 
    let nextImagen = actual === imagenes.length - 1 ? 0 : actual + 1; 
    prev.src = imagenes[prevImagen].url; 
    next.src = imagenes[nextImagen].url;
}

function posicionCarrusel() {
    puntos.innerHTML = '';
    for (let i = 0; i < imagenes.length; i++) {
        let punto = document.createElement('span');
        punto.classList.add('punto');
        if (i === actual) {
            punto.classList.add('active');
        }
        puntos.appendChild(punto);
    }
}

// Carrusel Tienda 
atrasTienda.addEventListener('click', function() {
    actualTienda -= 1;
    if (actualTienda < 0) {
        actualTienda = imagenesTienda.length - 1;
    }
    actualizarProducto();
});

adelanteTienda.addEventListener('click', function() {
    actualTienda += 1;
    if (actualTienda >= imagenesTienda.length) {
        actualTienda = 0;
    }
    actualizarProducto();
});

puntosTienda.addEventListener('click', function(event) {
    if (event.target.classList.contains('punto')) {
        actualTienda = Array.from(puntosTienda.children).indexOf(event.target);
        actualizarProducto();
    }
});

function actualizarProducto() {
    imagenTienda.innerHTML = `<img class="img" src="${imagenesTienda[actualTienda].url}" alt="logo pagina" loading="lazy">`;
    textoTienda.innerHTML = `
    <h3>${imagenesTienda[actualTienda].nombre}</h3>`;
    posicionCarruselTienda();

    let prevImagenTienda = actualTienda === 0 ? imagenesTienda.length - 1 : actualTienda - 1; 
    let nextImagenTienda = actualTienda === imagenesTienda.length - 1 ? 0 : actualTienda + 1; 
    prevTienda.src = imagenesTienda[prevImagenTienda].url; 
    nextTienda.src = imagenesTienda[nextImagenTienda].url;
}

function posicionCarruselTienda() {
    puntosTienda.innerHTML = '';
    for (let i = 0; i < imagenesTienda.length; i++) {
        let punto = document.createElement('span');
        punto.classList.add('punto');
        if (i === actualTienda) {
            punto.classList.add('active');
        }
        puntosTienda.appendChild(punto);
    }
}

});
