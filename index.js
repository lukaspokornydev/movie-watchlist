const searchBtn = document.getElementById("btn");
const movieTitleInput = document.getElementById("movieTitleInput");
const placeEl = document.getElementById("place");

searchBtn.addEventListener("click", searchMovie);

function searchMovie() {
    const movieTitle = movieTitleInput.value;

    fetch(`http://www.omdbapi.com/?apikey=d29e779a&s=${movieTitle}`)
        .then(res => res.json())
        .then(data => {
            placeEl.innerHTML = "";

            data.Search.forEach(movie => {
                const movieHtml =  `
                    <div class="movie">
                        <h2>${movie.Title}</h2>
                        <h3>${movie.Year}</h3>
                        <img src="${movie.Poster}">
                    </div>
                `;
                placeEl.insertAdjacentHTML("beforeend", movieHtml);
            });

            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}
