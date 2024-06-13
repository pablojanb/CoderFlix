const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzMyYTQwYjU5NjcyNzllMDEwN2M0ZDUyMWI1YzkxZCIsInN1YiI6IjY2Njc3ZDRkNmEzYjViY2Y3ZDE1ZDUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9Xq2qRwOn3Yh_7hxQ9RgSt33oQJ32a41HnAz9tKAWM'
    }
};


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', options)
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
            botonMirar.forEach((e) => e.addEventListener("click", pelisVistas));
        }

        function pelisVistas(e) {
            const target = e.target.id;
            const peli = peliculas.find((e) => e.id == target);


            if (localStorage.getItem("nombreUsuario") != null) {
                let pelisLS = JSON.parse(localStorage.getItem(`"mirarDeNuevo${nombreUsuario.value}"`)) || [];
                const repetida = pelisLS.find((el)=>el.id === peli.id)
                if(!repetida){
                    pelisLS.push(peli)
                    localStorage.setItem(`"mirarDeNuevo${nombreUsuario.value}"`, JSON.stringify(pelisLS))
                }
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