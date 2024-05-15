class Pelicula {
    constructor(titulo, director, duracion, reparto, genero) {
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion;
        this.reparto = reparto;
        this.genero = genero;
    }
}

const peli1 = new Pelicula("Toy Story", "John Lasseter", 81, "Tom Hanks, Tim Allen", "Animada");
const peli2 = new Pelicula("Coco", "Lee Unkrich, Adrián Molina", 105, "Anthony Gonzalez, Gael García Bernal", "Animada");
const peli3 = new Pelicula("Moana", "Ron Clements", 107, "Auli'i Cravalho, Dwayne Johnson", "Animada");
const peli4 = new Pelicula("Spider-Man", "Jon Watts", 148, "Tom Holland, Zendaya", "Acción");
const peli5 = new Pelicula("El Rey León", "Rob Minkoff", 88, "Matthew Broderick, James Earl Jones", "Animada");

const peli6 = new Pelicula("Super 8", "J. J. Abrams", 112, "Joel Courtney, Elle Fanning", "Aventura");
const peli7 = new Pelicula("Barbie", "Greta Gerwig", 114, "Ryan Gosling, Margot Robbie", "Comedia");
const peli8 = new Pelicula("Juno", "Jason Reitman", 96, "Ellen Page, Jennifer Garner", "Drama");
const peli9 = new Pelicula("Chicas Pesadas", "Mark Waters", 97, "Lindsay Lohan, Rachel McAdams", "Comedia");
const peli10 = new Pelicula("Soy Leyenda", "Francis Lawrence", 101, "Will Smith, Alice Braga", "Ciencia ficción");

const peli11 = new Pelicula("Escape a la libertad", "Frank Darabont", 142, "Tim Robbins, Morgan Freeman");
const peli12 = new Pelicula("El caballero de la noche", "Christopher Nolan", 152, "Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Morgan Freeman", "Acción");
const peli13 = new Pelicula("Pulp Fiction", "Quentin Tarantino", 154, "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis", "Drama");
const peli14 = new Pelicula("Milagros inesperados", "Frank Darabont", 188, "Tom Hanks, Michael Clarke Duncan", "Drama");
const peli15 = new Pelicula("Oppenheimer", "Christopher Nolan", 180, "Cillian Murphy, Emily Blunt Margot Robbie, Matt Damon", "Drama");


const peliculasInfantiles = [];
const peliculasAdolescentes = [];
const peliculasAdultos = [];
const peliculasTodas = [];

peliculasInfantiles.push(peli1, peli2, peli3, peli4, peli5);
peliculasAdolescentes.push(peli6, peli7, peli8, peli9, peli10);
peliculasAdultos.push(peli11, peli12, peli13, peli14, peli15);
peliculasTodas.push(peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10, peli11, peli12, peli13, peli14, peli15)


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

    alert("Recorda que cada pelicula tiene un costo de $2000.-")

    let elegirPeli;
    do {
        elegirPeli = prompt("1 Catalogo completo\n2 Infantiles\n3 Adolescentes\n4 Adultos\n5 Busqueda \n\nIngresa el numero que se corresponde con tu búsqueda.\nEj: Ingresa '3' Para seleccionar 'Adultos'")
    } while (elegirPeli < 1 || elegirPeli > 5 || elegirPeli == "")

    let peliculaSeleccionada;
    let mostrarPeliculas = [];
    let seguirMirando = true;
    let peliculasVistas = 0;
    if (elegirPeli == 1) {
        do {
            for (let i = 0; i < peliculasTodas.length; i++) {
                mostrarPeliculas.push(peliculasTodas[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            }
            let peliculaElegida = peliculasTodas.find((el) => el.titulo === peliculaSeleccionada)
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?")
            } else {
                alert("No hay coincidencias en su búsqueda")
            }
        } while(seguirMirando)



    } else if (elegirPeli == 2) {
        do {
            for (let i = 0; i < peliculasInfantiles.length; i++) {
                mostrarPeliculas.push(peliculasInfantiles[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            }
            let peliculaElegida = peliculasInfantiles.find((el) => el.titulo === peliculaSeleccionada)
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?")
            } else {
                alert("No hay coincidencias en su búsqueda")
            }
        } while (seguirMirando)
    } else if (elegirPeli == 3) {
        do {
            for (let i = 0; i < peliculasAdolescentes.length; i++) {
                mostrarPeliculas.push(peliculasAdolescentes[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            }
            let peliculaElegida = peliculasAdolescentes.find((el) => el.titulo === peliculaSeleccionada)
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?")
            } else {
                alert("No hay coincidencias en su búsqueda")
            }
        } while (seguirMirando)

    } else if (elegirPeli == 4) {
        do {
            for (let i = 0; i < peliculasAdultos.length; i++) {
                mostrarPeliculas.push(peliculasAdultos[i].titulo);
            }
            peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            while (peliculaSeleccionada === "" || peliculaSeleccionada === null) {
                peliculaSeleccionada = prompt(mostrarPeliculas.join("\n") + "\n\nIngrese el titulo que desea mirar");
            }
            let peliculaElegida = peliculasAdultos.find((el) => el.titulo === peliculaSeleccionada)
            if (peliculaElegida !== undefined) {
                peliculasVistas++;
                seguirMirando = confirm("Termino " + peliculaElegida.titulo + " \nQuéres seguir mirando?")
            } else {
                alert("No hay coincidencias en su búsqueda")
            }
        } while (seguirMirando)
    } else {
        let buscarPor = prompt("1 Director\n2 Genero")
        let elegirPelicula
        if (buscarPor == 1) {
            do {
                let filtrarDirector = prompt("Ingrese el director que desea buscar")
            let filtrados = peliculasTodas.filter((el) => el.director === filtrarDirector);
            let peliculasFiltradas = [];
            for (let i = 0; i < filtrados.length; i++) {
                peliculasFiltradas.push(filtrados[i].titulo)
            }

            if (peliculasFiltradas !== undefined) {
                elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\n\nIngrese la pelicula que desea mirar");
                while (elegirPelicula === "" || elegirPelicula === null) {
                    elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\n\nIngrese la pelicula que desea mirar");
                }
            } else {
                alert("No hay coincidencias con su búsqueda")
            }
            peliculasVistas++;
            seguirMirando = confirm("Termino " + elegirPelicula + " \nQuéres seguir mirando?")
            } while (seguirMirando)
        } else {
            do {
                let filtrarGenero = prompt("Ingrese el género que desea mirar")
            let filtrados = peliculasTodas.filter((el) => el.genero === filtrarGenero);
            let peliculasFiltradas = [];
            for (let i = 0; i < filtrados.length; i++) {
                peliculasFiltradas.push(filtrados[i].titulo)
            }

            if (peliculasFiltradas !== undefined) {
                let elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\nIngrese la pelicula que desea mirar");
                seguirMirando = confirm("Termino " + elegirPelicula + " \nQuéres seguir mirando?")
                while (elegirPelicula === "" || elegirPelicula === null) {
                    elegirPelicula = prompt(peliculasFiltradas.join("\n") + "\n\nIngrese la pelicula que desea mirar");
                }
            } else {
                alert("No hay coincidencias con su búsqueda")
            }
            peliculasVistas++;
            seguirMirando = confirm("Termino " + elegirPelicula + " \nQuéres seguir mirando?")
            } while (seguirMirando)
        }
    }
    if (peliculasVistas != 0) {
        alert("Miraste" + peliculasVistas)
    }
} else {
    alert("Volvé pronto!");
}



/*   alert("El monto a abonar por " + cantPelis + " pelicula/s es $" + cantPelis * 2000 + "\nVolvé pronto!"); */

