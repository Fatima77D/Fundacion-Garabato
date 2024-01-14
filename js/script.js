document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("carousel-slide");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos (ajusta según sea necesario)
    }
});


window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");
    header.classList.toggle('sticky', this.window.scrollY > 0);
})

let splide = new Splide( '.splide', {
    type: 'loop',
    autoplay:true,
    interval: '2000'
} );
splide.mount();

const boton = document.querySelector('header img[alt="menu"]');
const nav = document.querySelector('header nav');

let estado = 'up';
boton.addEventListener(
    'click',
    function (){
        nav.classList.toggle('desplegado');
        if( estado == 'up' ){
            boton.src = 'imgs/close-b.png';
            estado = 'down';
        }
        else{
            boton.src = 'imgs/menu-b.png';
            estado = 'up';
        }
    }
);