
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
        headerMobile.classList.remove("ocultar")
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
            cancelButtonText: "No recordar",
            confirmButtonText: "Si"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success"
                });
                localStorage.setItem("nombreUsuario", nombreUsuario.value)
                btnSalir.classList.remove("ocultar")
                btnSalirMobile.classList.remove("ocultar")
            }
        });
    }
}

const headerMobile = document.querySelector(".headerMobile")


invitado.addEventListener("click", () => {
    headerMobile.classList.remove("ocultar")
    titulo.innerText = "Bienvenido!";
    ingreso.classList.add("ocultar");
    main.classList.remove("ocultar");
    encabezado.classList.remove("ocultar")

}
)
const btnSalirMobile = document.querySelector(".btnSalirMobile")
let nombreUsuarioLS = localStorage.getItem("nombreUsuario")
if (nombreUsuarioLS) {
    nombreUsuario.value = nombreUsuarioLS;
    headerMobile.classList.remove("ocultar")
    encabezado.classList.remove("ocultar");
    titulo.innerText = `Bienvenido ${nombreUsuario.value}`
    ingreso.classList.add("ocultar")
    main.classList.remove("ocultar")
    btnSalir.classList.remove("ocultar");
    btnSalirMobile.classList.remove("ocultar")

}


function salidaCheck() {
    Swal.fire({
        title: "¿Esta seguro que desea salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Salir",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `Hasta pronto ${nombreUsuario.value}!`,
                icon: "success"
            });
            salir();
        }
    });
}


btnSalir.addEventListener("click", salidaCheck)
btnSalirMobile.addEventListener("click", salidaCheck)



function salir() {
    titulo.innerText = "Bienvenido a CoderFlix";
    localStorage.removeItem("nombreUsuario");
    encabezado.classList.add("ocultar");
    headerMobile.classList.add("ocultar")
    ingreso.classList.remove("ocultar");
    barraMobile.classList.add("ocultar")
    main.classList.add("ocultar");
    btnSalir.classList.add("ocultar")
    btnSalirMobile.classList.add("ocultar")
    nombreUsuario.value = ""
}



let menu = false;
const barraMobile = document.querySelector(".barraMobile")
const btnMobile = document.querySelector(".btnMobile")
btnMobile.addEventListener("click", () => {
    if (menu) {
        barraMobile.classList.add("ocultar")
        menu = false;
    }
    else {
        barraMobile.classList.remove("ocultar")
        menu = true;
    }
})


const btnGenero = document.querySelectorAll(".btnGenero")
btnGenero.forEach((btn) => {
    btn.addEventListener("click", () => {
        barraMobile.classList.add("ocultar")
        menu = false;
    })
})



buscadorPelicula.addEventListener("click", () => {
    barraMobile.classList.add("ocultar")
    menu = false;
})