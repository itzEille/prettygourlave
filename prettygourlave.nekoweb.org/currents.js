const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWI4Y2I5ZjRkZDM5MjczNjMwOGRjOGU1YjQyYjEwNSIsIm5iZiI6MTc0MTM2NDU3Ni45MzcsInN1YiI6IjY3Y2IxZDYwZjcwODQ0MDMzNmNiODA1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._zSn5MIKVWJmcOEp210VHPPxg2Lo3S8yFq-t_cKHxGk'
  }
};

const movieDiv = document.getElementById("movieDiv");
const showDiv = document.getElementById("current-shows");
const account_id = "${{ secrets.MY_TMDB_USER_ID }}"
const api_key = "${{ secret.MY_TMDB_API_KEY }}"
const movie_api_url = `https://api.themoviedb.org/3/account/${account_id}/watchlist/movies`
const tv_api_url = `https://api.themoviedb.org/3/account/${account_id}/watchlist/tv`


async function getMovies() { 
    const response = await fetch(movie_api_url, options);
    const data = await response.json();
    console.log(data)

   
    for (const movie of data.results) {
        const movieCard = await createMovieCard(movie); 
        movieDiv.appendChild(movieCard); 
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

    if (overview.length >= 200) {
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
            <img class="current_movie_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}"></img> 
            <div movie_text>
            <div class="movie_header_${header_type}"><h1>${title}</h1> <p>${runtime}m</p></div>
            <p>${desc}<p>
            </div>

    `;
    return movieCard;

}

async function getShows() { 
    const response = await fetch(tv_api_url, options);
    const data = await response.json();
    console.log(data)

    
    for (const show of data.results) {
        const showCard = await createShowCard(show); 
        showDiv.appendChild(showCard); 
    }
}


async function createShowCard(show){
    const { name, poster_path, overview, id} = show;
    const showCard = document.createElement("div");

    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
    const moreData = await response.json();
    console.log(moreData)
    const {tagline, number_of_seasons} = moreData
 
    let desc = "error"


    if (overview.length >= 200) {
      desc = tagline
      console.log(desc)
    }
    else {
      desc = overview
       console.log(desc)
    }

    let header_type = "error"

    if (name.length >= 10) {
      header_type = "small"
    }
    else
      header_type = "regular"

    showCard.classList.add("show_item")

    showCard.innerHTML = `
            <img class="current_show_img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${name}"></img> 
            <div show_text>
            <div class="show_header_${header_type}"> <h1>${name}</h1> <p>${number_of_seasons}S</p> </div>
            <p>${desc}<p>
            </div>

    `;
    return showCard;

}

getShows()
getMovies()
