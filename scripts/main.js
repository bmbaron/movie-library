const movieContainer = document.getElementById('movie-container');

const movieArray = [];

function Movie (name, genre, seen) {
  this.name = name;
  this.genre = genre;
  this.seen = seen;
  this.info = function() {
    return ("name: " + name + ", genre: " + genre + ", seen: " + seen);
  }
}



function addMovieToLibrary(movie) {
  movieArray.push(movie);
}


function buildLibrary () {
  for (let i=0; i<movieArray.length; i++) {
    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.innerText = movieArray[i].name;
    movie.innerText += "\n " + movieArray[i].genre + "\n";

    const movieSeen = document.createElement('input');
    movieSeen.type = 'checkbox';
    movieSeen.checked = movieArray[i].seen;
    
    movieContainer.appendChild(movie);
    movieContainer.appendChild(movieSeen);

  }
}
  
  

  
  
  const button = document.getElementById('submit');
  button.onclick = function () {
    
     const name = document.getElementById('name');
     const genre = document.getElementById('genre');
     const seen = document.getElementById('seen');
    
     const movie = new Movie (name.value, genre.value, seen.checked);
     addMovieToLibrary(movie);
     buildLibrary();
     console.log(movieArray);
  };
  
  
