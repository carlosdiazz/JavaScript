let pagina = 1;

const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click',() => {
    if(pagina<1000){
        pagina++
        cargarPeliculas()
    }
})

btnAnterior.addEventListener('click',() => {
    if(pagina>1){
        pagina--
        cargarPeliculas()
    }
})


const cargarPeliculas = async() => {

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=da25399c7ab7bcee46c4a0bfda74d227&language=es-MX&page=${pagina}`);
        //console.log(respuesta)

        if(respuesta.ok){
            const datos = await respuesta.json();
            //console.log(datos)
            let peliculas = ''
            datos.results.forEach(element => {
                console.log(element.poster_path)
                peliculas += `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500${element.poster_path}">
                    <h3>${element.title}</h3>
                </div>
                `
            });
            document.getElementById('contenedor').innerHTML = peliculas;
        }


    }catch(error){
        console.log(error)
    }


}

cargarPeliculas();