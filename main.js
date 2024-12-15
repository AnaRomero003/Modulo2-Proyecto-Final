//Funcion (Pedacito de codigo reutilizable)

function redirigir(url){
    window.location.href = url;
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});