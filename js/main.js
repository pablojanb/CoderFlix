class Pelicula {
    constructor(id, titulo, director, duracion, reparto, genero, poster) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion;
        this.reparto = reparto;
        this.genero = genero;
        this.poster = poster;
    }
}

const peli1 = new Pelicula(1, "toy story", "john lasseter", 81, "tom hanks, tim allen", "animada", "images/toystory_poster.webp");
const peli2 = new Pelicula(2, "coco", "lee unkrich, adrian molina", 105, "anthony gonzalez, gael garcia bernal", "animada", "images/coco_poster.webp");
const peli3 = new Pelicula(3, "moana", "ron clements", 107, "auli'i cravalho, dwayne johnson", "animada", "images/moana_poster.webp");
const peli4 = new Pelicula(4, "spider-man", "jon watts", 148, "tom holland, zendaya", "accion", "images/spiderman_poster.webp");
const peli5 = new Pelicula(5, "el rey leon", "rob minkoff", 88, "matthew broderick, james earl jones", "animada", "images/elreyleon_poster.webp");

const peli6 = new Pelicula(6, "super 8", "j. j. abrams", 112, "joel courtney, elle fanning", "aventura", "images/super8_poster.webp");
const peli7 = new Pelicula(7, "barbie", "greta gerwig", 114, "ryan gosling, margot robbie", "comedia", "images/barbie_poster.webp");
const peli8 = new Pelicula(8, "juno", "jason reitman", 96, "ellen page, jannifer garner", "drama", "images/juno_poster.webp");
const peli9 = new Pelicula(9, "chicas pesadas", "mark waters", 97, "lindsay lohan, rachel mcadams", "comedia", "images/meangirls_poster.webp");
const peli10 = new Pelicula(10, "soy leyenda", "francis lawrence", 101, "will smith, alice braga", "ciencia ficcion", "images/soyleyenda_poster.webp");

const peli11 = new Pelicula(11, "escape a la libertad", "frank darabont", 142, "tim robbins, morgan freeman", "drama", "images/shawshank_redemption_poster.webp");
const peli12 = new Pelicula(12, "el caballero de la noche", "christopher nolan", 152, "christian bale, michael caine, heath ledger, gary oldman, morgan freeman", "accion", "images/elcaballerooscuro_poster.webp");
const peli13 = new Pelicula(13, "pulp fiction", "quentin tarantino", 154, "john travolta, samuel l. jackson, uma thurman, bruce willis", "drama", "images/pulpfiction__poster.webp");
const peli14 = new Pelicula(14, "milagros inesperados", "frank darabont", 188, "tom hanks, michael clarke duncan", "drama", "images/milagrosinesperados_poster.webp");
const peli15 = new Pelicula(15, "oppenheimer", "christopher nolan", 180, "cillian murphy, emily blunt, margot robbie, matt damon", "drama", "images/oppenheimer_poster.webp");

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
            <button class="btnMirar">Mirar</button>
        </div>
`;
    grillaPeliculas.append(div);
}




function displayPelis(e) {
    grillaPeliculas.innerHTML = "";
    const pelisFitro = peliculas.filter((el)=> el.genero === e.target.id);
    if (e.target.id==="todas") {
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
    botonMirar.forEach((e)=>e.addEventListener("click", reproducir));
    
    function reproducir() {
        alert("peli");
    }
}




const buscadorPelicula = document.getElementById("buscadorPelicula");

buscadorPelicula.addEventListener("input", filtrarPorBuscador)


function filtrarPorBuscador(e) {
    grillaPeliculas.innerHTML = "";
    let filtrar = e.target.value;
    const pelisFiltradas = peliculas.filter((e)=>e.titulo.toUpperCase().includes(filtrar.toUpperCase()));
    pelisFiltradas.forEach((e) => crearPeliDom(e));
}