const mainContainer = document.getElementById('main-container');

const movieArray = [{name: "The Matrix"}, {name: "Star Wars"}];




  for (let i=0; i<movieArray.length; i++) {
    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.innerText = movieArray[i].name;
    mainContainer.appendChild(movie);
    
  }
