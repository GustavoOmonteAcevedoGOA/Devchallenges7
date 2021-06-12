document.addEventListener('DOMContentLoaded', function() {
    //encargado de llamar a las funciones
    iniciarApp();

});

function iniciarApp() {

    shownav();
}

function shownav() {
    const body = document.querySelector('body');
    
    const nav = document.querySelector('.navigation');
    const navMenu = document.querySelector('.hamburguesa');
    const navClose = document.querySelector('.close');
    navMenu.addEventListener('click', () => {
        nav.classList.toggle('visible');
        body.classList.toggle('fijar-body');
    });
    navClose.addEventListener('click', () => {
        nav.classList.toggle('visible');
        body.classList.toggle('fijar-body');
    });
}