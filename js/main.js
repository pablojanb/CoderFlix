class Pelicula {
    constructor(titulo, director, duracion, reparto, genero) {
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion;
        this.reparto = reparto;
        this.genero = genero;
    }
}

const peli1 = new Pelicula("TOY STORY", "JOHN LASSETER", 81, "TOM HANKS, TIM ALLEN", "ANIMADA");
const peli2 = new Pelicula("COCO", "LEE UNKRICH, ADRIAN MOLINA", 105, "ANTHONY GONZALEZ, GAEL GARCIA BERNAL", "ANIMADA");
const peli3 = new Pelicula("MOANA", "RON CLEMENTS", 107, "AULI'I CRAVALHO, DWAYNE JOHNSON", "ANIMADA");
const peli4 = new Pelicula("SPIDER-MAN", "JON WATTS", 148, "TOM HOLLAND, ZENDAYA", "ACCION");
const peli5 = new Pelicula("EL REY LEON", "ROB MINKOFF", 88, "MATTHEW BRODERICK, JAMES EARL JONES", "ANIMADA");

const peli6 = new Pelicula("SUPER 8", "J. J. ABRAMS", 112, "JOEL COURTNEY, ELLE FANNING", "AVENTURA");
const peli7 = new Pelicula("BARBIE", "GRETA GERWIG", 114, "RYAN GOSLING, MARGOT ROBBIE", "COMEDIA");
const peli8 = new Pelicula("JUNO", "JASON REITMAN", 96, "ELLEN PAGE, JENNIFER GARNER", "DRAMA");
const peli9 = new Pelicula("CHICAS PESADAS", "MARK WATERS", 97, "LINDSAY LOHAN, RACHEL MCADAMS", "COMEDIA");
const peli10 = new Pelicula("SOY LEYENDA", "FRANCIS LAWRENCE", 101, "WILL SMITH, ALICE BRAGA", "CIENCIA FICCION");

const peli11 = new Pelicula("ESCAPE A LA LIBERTAD", "FRANK DARABONT", 142, "TIM ROBBINS, MORGAN FREEMAN");
const peli12 = new Pelicula("EL CABALLERO DE LA NOCHE", "CHRISTOPHER NOLAN", 152, "CHRISTIAN BALE, MICHAEL CAINE, HEATH LEDGER, GARY OLDMAN, MORGAN FREEMAN", "ACCION");
const peli13 = new Pelicula("PULP FICTION", "QUENTIN TARANTINO", 154, "JOHN TRAVOLTA, SAMUEL L. JACKSON, UMA THURMAN, BRUCE WILLIS", "DRAMA");
const peli14 = new Pelicula("MILAGROS INESPERADOS", "FRANK DARABONT", 188, "TOM HANKS, MICHAEL CLARKE DUNCAN", "DRAMA");
const peli15 = new Pelicula("OPPENHEIMER", "CHRISTOPHER NOLAN", 180, "CILLIAN MURPHY, EMILY BLUNT, MARGOT ROBBIE, MATT DAMON", "DRAMA");


const peliculasInfantiles = [];
const peliculasAdolescentes = [];
const peliculasAdultos = [];
const peliculasTodas = [];

peliculasInfantiles.push(peli1, peli2, peli3, peli4, peli5);
peliculasAdolescentes.push(peli6, peli7, peli8, peli9, peli10);
peliculasAdultos.push(peli11, peli12, peli13, peli14, peli15);
peliculasTodas.push(peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10, peli11, peli12, peli13, peli14, peli15);


alert("Bienvenido a CODERFLIX\nAcá vas a encontrar tus peliculas y series favoritas");

function pedirNombre() {
    usuario = prompt("Ingrese su usuario");
}

function pedirEdad() {
    edad = parseInt(prompt("Hola " + usuario + "!\n" + "Ingresa tu edad!"));
}

pedirNombre();

while (usuario == "") {
    pedirNombre();
}

if (usuario != null) {

    pedirEdad();

    while (isNaN(edad) || edad < 1) {
        pedirEdad();
    }

    alert("Recorda que cada pelicula tiene un costo de $2000.-");

    let elegirPeli;
    do {
        elegirPeli = prompt("1 Catalogo completo\n2 Infantiles\n3 Adolescentes\n4 Adultos\n5 Busqueda \n\nIngresa el numero que se corresponde con tu búsqueda.\nEj: Ingresa '4' Para seleccionar 'Adultos'");
    } while (elegirPeli < 1 || elegirPeli > 5 || elegirPeli == "" || isNaN(elegirPeli));

    let peliculaSeleccionada;
    let mostrarPeliculas = [];
    let seguirMirando = true;
    let peliculasVistas = 0;
    if (elegirPeli == 1) {
        do {
            for (let i = 0; i < peliculasTodas.length; i++) {
                mostrarPeliculas.push(peliculasTodas[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            }
            let peliculaElegida = peliculasTodas.find((el) => el.titulo === peliculaSeleccionada);
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?");
            } else {
                alert("No hay coincidencias en su búsqueda");
            }
        } while (seguirMirando)



    } else if (elegirPeli == 2) {
        do {
            for (let i = 0; i < peliculasInfantiles.length; i++) {
                mostrarPeliculas.push(peliculasInfantiles[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            }
            let peliculaElegida = peliculasInfantiles.find((el) => el.titulo === peliculaSeleccionada);
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?");
            } else {
                alert("No hay coincidencias en su búsqueda");
            }
        } while (seguirMirando)
    } else if (elegirPeli == 3) {
        do {
            for (let i = 0; i < peliculasAdolescentes.length; i++) {
                mostrarPeliculas.push(peliculasAdolescentes[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            }
            let peliculaElegida = peliculasAdolescentes.find((el) => el.titulo === peliculaSeleccionada);
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?");
            } else {
                alert("No hay coincidencias en su búsqueda");
            }
        } while (seguirMirando)

    } else if (elegirPeli == 4) {
        do {
            for (let i = 0; i < peliculasAdultos.length; i++) {
                mostrarPeliculas.push(peliculasAdultos[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar").toUpperCase();
            }
            let peliculaElegida = peliculasAdultos.find((el) => el.titulo === peliculaSeleccionada);
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?");
            } else {
                alert("No hay coincidencias en su búsqueda");
            }
        } while (seguirMirando)
    } else {
        let buscarPor = prompt("1 Director\n2 Genero");
        let elegirPelicula;
        if (buscarPor == 1) {
            do {
                let filtrarDirector = prompt("Ingrese el director que desea buscar").toUpperCase();
                let filtrados = peliculasTodas.filter((el) => el.director === filtrarDirector);
                while (filtrados.length === 0) {
                    let filtrarDirector = prompt("No hubo coincidencia, intente nuevamente").toUpperCase();
                    filtrados = peliculasTodas.filter((el) => el.director === filtrarDirector);
                }
                let peliculasFiltradas = [];
                for (let i = 0; i < filtrados.length; i++) {
                    peliculasFiltradas.push(filtrados[i].titulo);
                }

                if (peliculasFiltradas !== undefined) {
                    elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\n\nIngrese la pelicula que desea mirar").toUpperCase();
                    while (elegirPelicula === "" || elegirPelicula === null) {
                        elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\n\nIngrese la pelicula que desea mirar").toUpperCase();
                    }
                } else {
                    alert("No hay coincidencias con su búsqueda");
                }
                if (peliculasFiltradas.find((el) => el === elegirPelicula)) {
                    peliculasVistas++;
                    seguirMirando = confirm("Termino " + elegirPelicula + " \nQuéres seguir mirando?");
                } else {
                    alert("No hay coincidencia con su búsqueda");
                }

            } while (seguirMirando)
        } else {
            let elegirPelicula;
            do {
                let filtrarGenero = prompt("Ingrese el género que desea mirar").toUpperCase();
                let filtrados = peliculasTodas.filter((el) => el.genero === filtrarGenero);
                while (filtrados.length === 0) {
                    filtrarGenero = prompt("No hubo coincidencia, intente nuevamente").toUpperCase();
                    filtrados = peliculasTodas.filter((el) => el.genero === filtrarGenero);
                }
                let peliculasFiltradas = [];
                for (let i = 0; i < filtrados.length; i++) {
                    peliculasFiltradas.push(filtrados[i].titulo);
                }

                if (peliculasFiltradas !== undefined) {
                    elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\nIngrese la pelicula que desea mirar").toUpperCase();
                    while (elegirPelicula === "" || elegirPelicula === null) {
                        elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\n\nIngrese la pelicula que desea mirar").toUpperCase();
                    }
                } else {
                    alert("No hay coincidencias con su búsqueda");
                }
                if ((peliculasFiltradas.find((el) => el === elegirPelicula))) {
                    peliculasVistas++;
                    seguirMirando = confirm("Termino " + elegirPelicula + " \nQuéres seguir mirando?");
                } else {
                    alert("No hay coincidencia con su búsqueda");
                }

            } while (seguirMirando)
        }
    }
    if (peliculasVistas != 0) {
        if (peliculasVistas == 1) {
            alert("El monto a abonar por " + peliculasVistas + " pelicula es de: $" + peliculasVistas * 2000 + "\nVolvé pronto!");
        } else {
            alert("El monto a abonar por " + peliculasVistas + " peliculas es de: $" + peliculasVistas * 2000 + "\nVolvé pronto!");
        }
    }
} else {
    alert("Volvé pronto!");
}