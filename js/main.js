class Pelicula {
    constructor(id, titulo, director, duracion, reparto, genero, poster, video) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion;
        this.reparto = reparto;
        this.genero = genero;
        this.poster = poster;
        this.video = video;
    }
}

const peli1 = new Pelicula(1, "toy story", "john lasseter", 81, "tom hanks, tim allen", "animada", "images/toystory_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dRb0VW14IZY?autoplay=1&si=Eq2M6kmoLaEhouEV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli2 = new Pelicula(2, "coco", "lee unkrich, adrian molina", 105, "anthony gonzalez, gael garcia bernal", "animada", "images/coco_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/awzWdtCezDo?autoplay=1&si=W2LDEiRK7z3hRx2a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli3 = new Pelicula(3, "moana", "ron clements", 107, "auli'i cravalho, dwayne johnson", "animada", "images/moana_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/oG_lt31kFfc?autoplay=1&si=fXdhMERW06nevGTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli4 = new Pelicula(4, "spider-man", "jon watts", 148, "tom holland, zendaya", "accion", "images/spiderman_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/r6t0czGbuGI?autoplay=1&si=mY4NhZhXWHjBUkWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli5 = new Pelicula(5, "el rey leon", "rob minkoff", 88, "matthew broderick, james earl jones", "animada", "images/elreyleon_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bjJvvrKl83M?autoplay=1&si=z_d-1ZJu3DKWE7JT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');

const peli6 = new Pelicula(6, "super 8", "j. j. abrams", 112, "joel courtney, elle fanning", "aventura", "images/super8_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/89u6eSBSZmw?autoplay=1&si=rnwZqxso4Iu-pLPK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli7 = new Pelicula(7, "barbie", "greta gerwig", 114, "ryan gosling, margot robbie", "comedia", "images/barbie_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zh4KhVSMwtQ?autoplay=1&si=G_0oRN0WaLnDLX61" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli8 = new Pelicula(8, "juno", "jason reitman", 96, "ellen page, jannifer garner", "comedia", "images/juno_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hrto4Tx2kxo?autoplay=1&si=mcOEZupXcpzBkdMh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli9 = new Pelicula(9, "chicas pesadas", "mark waters", 97, "lindsay lohan, rachel mcadams", "comedia", "images/meangirls_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fOdxaxJ-EDg?autoplay=1&si=OSNo6FQqwGFriiSD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli10 = new Pelicula(10, "soy leyenda", "francis lawrence", 101, "will smith, alice braga", "ciencia ficcion", "images/soyleyenda_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TXQ7kRnFXS4?autoplay=1&si=YGDV7oK4ucIsJxnr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');

const peli11 = new Pelicula(11, "escape a la libertad", "frank darabont", 142, "tim robbins, morgan freeman", "drama", "images/shawshank_redemption_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_znb1cUiQP8?si=i3akif_bfLEu-MI3&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli12 = new Pelicula(12, "el caballero de la noche", "christopher nolan", 152, "christian bale, michael caine, heath ledger, gary oldman, morgan freeman", "accion", "images/elcaballerooscuro_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dzQtWkpc2-c?si=ZApebbk-JrBqvicm&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli13 = new Pelicula(13, "pulp fiction", "quentin tarantino", 154, "john travolta, samuel l. jackson, uma thurman, bruce willis", "drama", "images/pulpfiction__poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/s7EdQ4FqbhY?si=ksYRuLKZfCg91Csl&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli14 = new Pelicula(14, "milagros inesperados", "frank darabont", 188, "tom hanks, michael clarke duncan", "drama", "images/milagrosinesperados_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ki4haFrqSrw?si=iDwljOhO_ccHGuoS&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
const peli15 = new Pelicula(15, "oppenheimer", "christopher nolan", 180, "cillian murphy, emily blunt, margot robbie, matt damon", "drama", "images/oppenheimer_poster.webp", '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MVvGSBKV504?si=QXTGi_GVCJf7J_JE&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');

let grillaPeliculas = document.getElementById("grillaPeliculas");

const peliculas = [peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10, peli11, peli12, peli13, peli14, peli15];

peliculas.forEach((e) => crearPeliDom(e));
agregarBotones();

function crearPeliDom(pel) {
    let div = document.createElement("div");
    div.className = "pelicula";
    div.innerHTML = `
        <img class="imagenPeli" src="${pel.poster}" alt="">
        <div>
            <button id="${pel.id}" class="btnMirar">Mirar</button>
        </div>
`;
    grillaPeliculas.append(div);
}




function displayPelis(e) {
    grillaPeliculas.innerHTML = "";
    const pelisFitro = peliculas.filter((el) => el.genero === e.target.id);
    if (e.target.id === "todas") {
        peliculas.forEach((e) => crearPeliDom(e));
        agregarBotones();
    } else {
        pelisFitro.forEach((e) => crearPeliDom(e));
        agregarBotones();
    }
}

const botonesGenero = document.querySelectorAll(".btnGenero");
botonesGenero.forEach((el) => el.addEventListener("click", displayPelis));


function agregarBotones() {
    const botonMirar = document.querySelectorAll(".btnMirar");
    botonMirar.forEach((e) => e.addEventListener("click", reproducir));
}

function reproducir(e) {
    const target = e.target.id;
    const peli = peliculas.find((e) => e.id == target);
    const contenedor = document.querySelector(".contenedor")
    contenedor.innerHTML = `${peli.video}`;
    contenedor.style.display = 'block';


    if (localStorage.getItem("nombreUsuario") != null) {
        let pelisLS = JSON.parse(localStorage.getItem(`"mirarDeNuevo${nombreUsuario.value}"`)) || [];
        pelisLS.push(peli)
        localStorage.setItem(`"mirarDeNuevo${nombreUsuario.value}"`, JSON.stringify(pelisLS))
    }
}



const buscadorPelicula = document.getElementById("buscadorPelicula");

buscadorPelicula.addEventListener("input", filtrarPorBuscador)


function filtrarPorBuscador(e) {
    grillaPeliculas.innerHTML = "";
    let filtrar = e.target.value;
    const pelisFiltradas = peliculas.filter((e) => e.titulo.toUpperCase().trim().includes(filtrar.toUpperCase().trim()));
    pelisFiltradas.forEach((e) => crearPeliDom(e));
    agregarBotones();
}

// formulario ingreso
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
        recordarNombre = confirm("¿Desea recordar su nombre?")
        if (recordarNombre) {
            localStorage.setItem("nombreUsuario", nombreUsuario.value)
            btnSalir.classList.remove("ocultar")
        }
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
    let checkout = confirm("¿Esta seguro que desea salir?")
    checkout && salir();
})

function salir() {
    titulo.innerText = `Hasta pronto ${nombreUsuario.value}!`;
    localStorage.removeItem("nombreUsuario");
    encabezado.classList.add("ocultar");
    ingreso.classList.remove("ocultar");
    main.classList.add("ocultar");
    btnSalir.classList.add("ocultar")
    nombreUsuario.value = ""
}