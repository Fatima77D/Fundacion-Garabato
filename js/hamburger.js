const nav = document.getElementsByClassName("nav-cosas")
const barras = document.getElementById("#menu")

barras.addEventListener("click", () => {
    nav.classlist.add("visible")
})
