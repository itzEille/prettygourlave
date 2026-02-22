const movieWall =  document.getElementById("movie-Wall");
const list_id = "8635311"
const api_key = "bab8cb9f4dd392736308dc8e5b42b105"
const movie_api_url = `https://api.themoviedb.org/3/list/${list_id}?api_key=${api_key}`


async function getMovies() { 
    const response = await fetch(movie_api_url);
    const data = await response.json();
    console.log(data)

   
    for (const movie of data.items) {
        const movieCard = await createMovieCard(movie); 
        movieWall.appendChild(movieCard); 
    }
}


async function createMovieCard(movie){
    const { title, poster_path, overview, id} = movie;
    const movieCard = document.createElement("div");

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    const moreData = await response.json();
    console.log(moreData)
    const {runtime, tagline} = moreData
 
    let desc = "error"

    if (overview.length >= 500) {
      desc = tagline
    }
    else {
      desc = overview
    }

    let header_type = "error"

    if (title.length >= 10) {
      header_type = "small"
      console.log(header_type)
    }
    else
      header_type = "regular"


    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
            <a href="https://www.themoviedb.org/movie/${id}"><img class="movie" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}"></img></a>`;
    return movieCard;

}
getMovies()