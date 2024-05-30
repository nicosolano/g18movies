fetch('js/movies.json')
.then(response => response.json())
.then(data => {
    const cards = data.map(movie => 
        `<a href="info-pelis.html#${movie.id}" class="card">
            <img src="${movie.Poster}" alt='Poster promocional de la película "${movie.Title}"'>
        </a>`
    ).join('');
    document.querySelector('.container').innerHTML = cards;
})