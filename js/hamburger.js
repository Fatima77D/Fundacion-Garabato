const nav = document.getElementById("nav-cosas")


barras.addEventListener("click", () => {
    
})

function desplegarMenu(){
    const barras = document.getElementById("b-menu")
    const desplegar = document.getElementById("nav-cosas")
    
        
    desplegar.style.display = (desplegar.style.display === "none" || desplegar.style.display === "") ? "flex" : "none";
    

}