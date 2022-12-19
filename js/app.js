import servicios from './servicios.js'

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    paintService();
}

const paintService = () => {
    getServices( servicios );
}

const getServices = ( services ) => { 
    services.forEach( service => {
        const { id, titulo, contenido } = service;

        const title = document.createElement('H3');
        title.textContent = titulo;

        const content = document.createElement('P');
        content.textContent = contenido;

        const serviceDiv = document.createElement('DIV');
        serviceDiv.classList.add('service');
        serviceDiv.appendChild(title);
        serviceDiv.appendChild(content);

        document.querySelector('#services').appendChild(serviceDiv);
    });
}
