
const formulario = document.getElementById("formulario");
let nombreUsuario = document.getElementById("nombreUsuario");
const ingreso = document.querySelector(".ingreso");
const titulo = document.querySelector(".titulo");
const main = document.querySelector(".main");
formulario.addEventListener("click", validar);
const invitado = document.querySelector(".invitado");
const btnSalir = document.querySelector(".btnSalir");
const encabezado = document.querySelector(".encabezado");
const mirarDeNuevo = JSON.parse(localStorage.getItem(`"mirarDeNuevo${nombreUsuario.value}"`)) || [];

function validar(e) {
    e.preventDefault();
    if (nombreUsuario.value) {
        titulo.innerText = `Bienvenido ${nombreUsuario.value}`
        ingreso.classList.add("ocultar")
        main.classList.remove("ocultar")
        encabezado.classList.remove("ocultar")

        Swal.fire({
            title: "¿Desea recordar su nombre?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Recordar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success"
                });
                localStorage.setItem("nombreUsuario", nombreUsuario.value)
                btnSalir.classList.remove("ocultar")
            }
        });
    }
}

invitado.addEventListener("click", () => {
    titulo.innerText = "Bienvenido!";
    ingreso.classList.add("ocultar");
    main.classList.remove("ocultar");
    encabezado.classList.remove("ocultar")
}
)

let nombreUsuarioLS = localStorage.getItem("nombreUsuario")
if (nombreUsuarioLS) {
    nombreUsuario.value = nombreUsuarioLS;
    encabezado.classList.remove("ocultar");
    titulo.innerText = `Bienvenido ${nombreUsuario.value}`
    ingreso.classList.add("ocultar")
    main.classList.remove("ocultar")
    btnSalir.classList.remove("ocultar")
}

btnSalir.addEventListener("click", () => {
    Swal.fire({
        title: "¿Esta seguro que desea salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Salir"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `Hasta pronto ${nombreUsuario.value}!`,
                icon: "success"
            });
            salir();
        }
    });
})

function salir() {
    titulo.innerText = "Bienvenido a CoderFlix";
    localStorage.removeItem("nombreUsuario");
    encabezado.classList.add("ocultar");
    ingreso.classList.remove("ocultar");
    main.classList.add("ocultar");
    btnSalir.classList.add("ocultar")
    nombreUsuario.value = ""
}