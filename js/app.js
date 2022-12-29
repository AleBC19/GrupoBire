import servicios from './servicios.js';

const curpInpt = document.querySelector('#curp');
const nav = document.querySelector('.nav');

document.addEventListener('DOMContentLoaded', () => {    
    initApp();
});

function initApp() {
    paintService();
    if (window.location.pathname === '/contacto.php') { 
        toUppercase(); 
    }
    if (window.location.pathname === '/index.php') {
        drawMap();
    }
    changeNav();
    removeAlerts();
}

const drawMap = () => {
    let map = L.map('map').setView([19.4440253, -99.175875], 8399);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker([19.4440253, -99.175875]).addTo(map);
}

const changeNav = () => {
    const linkContacto = document.createElement('A');
    if( window.location.pathname === '/index.php') {
        linkContacto.setAttribute('href', 'contacto.php');
        linkContacto.textContent = 'Contactenos';
    } else if ( window.location.pathname === '/contacto.php') {
        linkContacto.setAttribute('href', 'index.php');
        linkContacto.textContent = 'Página Principal';
    }
    
    nav.appendChild(linkContacto);
}

const toUppercase = () => {
    curpInpt.addEventListener('change', e => {
        let curp = e.target.value;
        return curp.toUpperCase();
    });
}

const paintService = () => {
    if ( window.location.pathname === '/index.php') {
        getServices( servicios );
    }
}

const getServices = ( services ) => { 
    services.forEach( service => {
        const { titulo, contenido, img } = service;

        const title = document.createElement('H3');
        title.textContent = titulo;
        title.classList.add('no-margin');
        const content = document.createElement('P');
        content.textContent = contenido;
        const imgHTML = document.createElement('IMG');
        imgHTML.setAttribute('src', img);
        const serviceDiv = document.createElement('DIV');

        serviceDiv.classList.add('service');
        serviceDiv.appendChild(imgHTML);
        serviceDiv.appendChild(title);
        serviceDiv.appendChild(content);
        document.querySelector('#services').appendChild(serviceDiv);
    });
}

const removeAlerts = () => {
    setTimeout(() => {
        document.querySelector('.message').remove();
    }, 3500);
    
    setTimeout(() => {
        document.querySelector('.alerta').remove();
    }, 3500);
}