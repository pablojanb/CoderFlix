const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzMyYTQwYjU5NjcyNzllMDEwN2M0ZDUyMWI1YzkxZCIsInN1YiI6IjY2Njc3ZDRkNmEzYjViY2Y3ZDE1ZDUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9Xq2qRwOn3Yh_7hxQ9RgSt33oQJ32a41HnAz9tKAWM'
    }
};


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        const pelisAccion = [];
        const pelisDrama = [];
        const pelisSciFi = [];
        const pelisAnimada = [];
        const pelisComedia = [];
        const pelisAventura = [];

        const peliculas = (data.results).map((peli) => {

            return {
                id: peli.id,
                titulo: peli.title,
                poster: `https://image.tmdb.org/t/p/w500${peli.poster_path}`,
                genero: peli.genre_ids,
            }
        });

        peliculas.forEach((peli) => peli.genero.forEach((el) => {
            el == 28 && pelisAccion.push(peli);
            el == 12 && pelisAventura.push(peli);
            el == 18 && pelisDrama.push(peli);
            el == 878 && pelisSciFi.push(peli);
            el == 16 && pelisAnimada.push(peli);
            el == 35 && pelisComedia.push(peli);
        }))

        let grillaPeliculas = document.getElementById("grillaPeliculas");

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
            e.target.id === "todas" && peliculas.forEach((e) => crearPeliDom(e));
            e.target.id === "drama" && pelisDrama.forEach((e) => crearPeliDom(e));
            e.target.id === "aventura" && pelisAventura.forEach((e) => crearPeliDom(e));
            e.target.id === "comedia" && pelisComedia.forEach((e) => crearPeliDom(e));
            e.target.id === "ciencia ficcion" && pelisSciFi.forEach((e) => crearPeliDom(e));
            e.target.id === "accion" && pelisAccion.forEach((e) => crearPeliDom(e));
            e.target.id === "animada" && pelisAnimada.forEach((e) => crearPeliDom(e));
            agregarBotones();
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
    })
    .catch(err => console.error(err));


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