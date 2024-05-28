fetch('js/movies.json')
.then(response => response.json())
.then(data => {
    const cards = data.map(movie => 
        `<div class="card">
            <img src="${movie.Poster}">
        </div>`
    ).join('');
    document.querySelector('.card-container').innerHTML = cards;
})