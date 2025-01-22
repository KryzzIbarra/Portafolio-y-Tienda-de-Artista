let imagenes = [
    {
        "url": "../img/Portafolio/img_portgt1.jpg",
        "nombre": "Obra 1",
    },
    {
        "url": "../img/Portafolio/img_portgt4.png",
        "nombre": "Obra 2",
    },
    {
        "url": "../img/Portafolio/img_portgt8.jpg",
        "nombre": "Obra 3",
    },
];

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;
posicionCarrusel();

prev.addEventListener('click', function() {
    actual -= 1;
    if (actual < 0) {
        actual = imagenes.length - 1;
    }
    actualizarImagen();
});

next.addEventListener('click', function() {
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
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>`;
    posicionCarrusel();
    prev.style.opacity = 1;
    next.style.opacity = 1;
    // Actualizar previsualizaciones
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


document.getElementById('abrirIcons').addEventListener('click', function() {
    var icons = document.getElementById('iconsSocial');
    if (icons.classList.contains('show')) {
        icons.classList.remove('show');
        this.textContent = 'Mostrar Redes Sociales';
    } else {
        icons.classList.add('show');
        this.textContent = 'Ocultar Redes Sociales';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('abrirIcons').addEventListener('click', function() {
        var icons = document.getElementById('iconsSocial');
        var iconoRedes = document.getElementById('iconoRedes');
    
        if (icons.classList.contains('show')) {
            icons.classList.remove('show');
            iconoRedes.src = '../img/btn_chat.svg';
        } else {
            icons.classList.add('show');
            iconoRedes.setAttribute('src', '../img/btn_tacheemdo.svg');
        }
    });
    });