fetch('js/movies.json')
.then(response => response.json())
.then(data => {
    const cards = data.map(movie => 
        `<div class="card" id="${movie.id}">
            <img src="${movie.Poster}" alt='Poster promocional de la película "${movie.Title}"'>
        </div>`
    ).join('');
    document.querySelector('.container').innerHTML = cards;

    const info = data.map(movie =>
        `<div class="info-container">
            <img src="${movie.Poster}" alt='Poster promocional de la película "${movie.Title}"'>
            <div class="info">
                <h3>${movie.Title} (${movie.Year})</h3><span>${movie.Rated}</span>
                <p>Duración: ${movie.Runtime}</p>
                <p>Género: ${movie.Genre}</p>
                <p>Sinopsis: ${movie.Plot}</p>
                <p>Protagonizada por: ${movie.Actors}</p>
                <p>Dirigida por: ${movie.Director}</p>
            </div>
        </div>`
    ).join('');

})