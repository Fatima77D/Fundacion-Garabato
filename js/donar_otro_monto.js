let parrafoCredicoop = document.getElementById("pFigureCredicoop");
let qrMercadoPago1 = document.getElementById("qrMercadoPago1");
let qrMercadoPago2 = document.getElementById("qrMercadoPago2");


if (window.innerWidth <= 768) {

    parrafoCredicoop.textContent = "Haciendo click en el botón de credicoop podes donar el monto que vos desees 🙌";
}



function cambiarQR() {
    if (window.innerWidth <= 768) {
        
        qrMercadoPago1.style.display = "none";
        qrMercadoPago2.style.display = "block";
    } else {
        qrMercadoPago1.style.display = "block";
        qrMercadoPago2.style.display = "none";
    }
}

cambiarQR();

window.addEventListener("resize", cambiarQR);