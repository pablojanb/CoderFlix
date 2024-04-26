let usuario;
let edad;
let seleccion;
let seguir;
let pelicula;
let cantPelis = 0;

alert("Bienvenido a CODERFLIX\nAcá vas a encontrar tus peliculas y series favoritas");

//funciones para asignar valor a usuario y edad

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


    //para menores de 13

    function dashBoardInfantiles() {
        seleccionarPeliInf();
        while ((isNaN(seleccion)) || ((seleccion < 1) || (seleccion > 5))) {
            seleccionarPeliInf();
        }
        switch (seleccion) {
            case 1: pelicula = "Toy Story";
                break;
            case 2: pelicula = "Coco";
                break;
            case 3: pelicula = "Moana";
                break;
            case 4: pelicula = "Spider-Man";
                break;
            case 5: pelicula = "El Rey León";
                break;
            default: pelicula = "No selecciono ninguna pelicula";
                break;
        }
        alert("Termino " + pelicula);
        cantPelis++;
        seguir = confirm("Querés mirar otra pelicula?");
    }


    function seleccionarPeliInf() {
        seleccion = parseInt(prompt("Tenemos estos peliculas para vos!\n 1 Toy Story\n 2 Coco\n 3 Moana\n 4 Spider-Man\n 5 El Rey León\n Si queres mirar alguna solo tenes que ingresar el número que tiene al costado!"));
    }

    //para menores de 18

    function dashBoardAdolescentes() {
        seleccionarPeliAdol();
        while ((isNaN(seleccion)) || ((seleccion < 1) || (seleccion > 5))) {
            seleccionarPeliAdol();
        }
        switch (seleccion) {
            case 1: pelicula = "Super 8";
                break;
            case 2: pelicula = "Barbie";
                break;
            case 3: pelicula = "Juno";
                break;
            case 4: pelicula = "Chicas Pesadas";
                break;
            case 5: pelicula = "Soy Leyenda";
                break;
            default: pelicula = "No selecciono ninguna pelicula";
                break;
        }
        alert("Termino " + pelicula);
        cantPelis++;
        seguir = confirm("Querés mirar otra pelicula?");
    }
    function seleccionarPeliAdol() {
        seleccion = parseInt(prompt("Tenemos estos peliculas para vos!\n 1 Super 8\n 2 Barbie\n 3 Juno\n 4 Chicas Pesadas\n 5 Soy Leyenda\n Si queres mirar alguna solo tenes que ingresar el número que tiene al costado!"));
    }

    //para mayores de 18

    function dashBoardAdultos() {
        seleccionarPeliAdul();
        while ((isNaN(seleccion)) || ((seleccion < 1) || (seleccion > 5))) {
            seleccionarPeliAdul();
        }
        switch (seleccion) {
            case 1: pelicula = "Sueños de libertad";
                break;
            case 2: pelicula = "El caballero de la noche";
                break;
            case 3: pelicula = "Pulp Fiction";
                break;
            case 4: pelicula = "La milla verde";
                break;
            case 5: pelicula = "Oppenheimer";
                break;
            default: pelicula = "No selecciono ninguna pelicula";
                break;
        }
        alert("Termino " + pelicula);
        cantPelis++;
        seguir = confirm("Querés mirar otra pelicula?");
    }
    function seleccionarPeliAdul() {
        seleccion = parseInt(prompt("Tenemos estos peliculas para vos!\n 1 Sueños de libertad\n 2 El caballero de la noche\n 3 Pulp Fiction\n 4 La milla verde\n 5 Oppenheimer\n Si queres mirar alguna solo tenes que ingresar el número que tiene al costado!"));
    }

    if (edad < 13) {
        dashBoardInfantiles();
        while (seguir) {
            dashBoardInfantiles();
        }
    } else if (edad < 18) {
        dashBoardAdolescentes();
        while (seguir) {
            dashBoardAdolescentes();
        }
    } else if (edad >= 18) {
        dashBoardAdultos();
        while (seguir) {
            dashBoardAdultos();
        }
    }

    alert("El monto a abonar por " + cantPelis + " pelicula/s es $" + cantPelis * 2000 + "\nVolvé pronto!");

} else {
    alert("Volvé pronto!");
}