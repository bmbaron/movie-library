const movieContainer = document.getElementById('movie-container');

let movieArray = [];



window.onload = (event) => {
  console.log(localStorage);
  if(localStorage.hasOwnProperty('movieArray')) {
    setMovies();
  }

};

function Movie (name, genre, seen) {
  this.name = name;
  this.genre = genre;
  this.seen = seen;
  this.info = function() {
    return ("name: " + name + ", genre: " + genre + ", seen: " + seen);
  };
  this.toggleSeen = function() {
    if (this.seen === true) {
      this.seen = false;
    }
    else {
      this.seen = true;
    }
    populateMovies();
    console.log("seen: " + this.seen + " local Storage: " + localStorage.movieArray);
  };
}



function addMovieToLibrary(movie) {
  movieArray.push(movie);
}


function buildLibrary () {
  
  
  const range = document.createRange();
  range.selectNodeContents(movieContainer);
  range.deleteContents();
  
  for (let i=0; i<movieArray.length; i++) {
    
    if (movieArray[i] != null) {
      
    const movie = document.createElement('div');
    movie.classList.add('movie');
    
    const deleteButton = document.createElement('button');
    deleteButton.id = i;
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = 'X';
    deleteButton.onclick = function () {
      //movieArray.splice(movieArray[this.id], 1);
      delete movieArray[this.id];
      populateMovies();
      buildLibrary();
    };
    
    const movieText = document.createElement('div');
    movieText.id = 'movie-text';
    
    const genreLabel = document.createElement('div');
    genreLabel.id = 'genre-label';
    movie.appendChild(genreLabel);
    
    movie.appendChild(movieText);
    
    genreLabel.innerHTML = movieArray[i].genre.toUpperCase().bold();
    movieText.innerHTML = movieArray[i].name.bold() + '<br/>';
    
    movie.style.backgroundSize = "cover";
    switch (movieArray[i].genre) {
      case "action":
        movie.style.backgroundImage = "url('images/action.jpg')";
        break;
      case "comedy":
        movie.style.backgroundImage = "url('images/comedy.jpg')";
        break;
      case "romance":
        movie.style.backgroundImage = "url('images/romance.jpg')";
        break;
      case "horror":
        movie.style.backgroundImage = "url('images/horror.jpg')";
        break;
      case "documentary":
        movie.style.backgroundImage = "url('images/documentary.jpg')";
        break;
    }

    const movieSeenBox = document.createElement('li');
    const movieSeen = document.createElement('input');
    movieSeen.type = 'checkbox';
    movieSeen.checked = movieArray[i].seen;
    console.log(movieSeen.checked);

    //movieArray[i].id = i;
    movieSeen.onchange = function () {
      
      movieArray[i].toggleSeen();
    };
    
    const label = document.createElement('label');
    label.htmlFor = 'seenCheckBox';
    label.textContent = "seen?";
    
    movieSeenBox.appendChild(label);
    movieSeenBox.appendChild(movieSeen);

    
    movieText.appendChild(movieSeenBox);
    movie.appendChild(deleteButton);

    movieContainer.appendChild(movie);

  }
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

     populateMovies();
  };
  
function setMovies() {
  
//  var storedNames = JSON.parse(localStorage.getItem("movieArray"));
 // console.log(localStorage.movieArray + "   " + storedNames);
   let savedMovies=localStorage.getItem("movieArray");
   savedMovies=JSON.parse(savedMovies);
  for (let i = 0; i < savedMovies.length; i++)
  {
    if(savedMovies[i]) {
      const name1 = savedMovies[i].name.toString();
      const genre1 = savedMovies[i].genre.toString();
      const seen1 = savedMovies[i].seen.toString();
      const movie1 = new Movie (name1, genre1, seen1);
      addMovieToLibrary(movie1);
      console.log(movie1.info());
      //console.log(movieArray[i].seen);
    }
  }
  
  buildLibrary();

}
  
  
function populateMovies() {
  localStorage.setItem("movieArray", JSON.stringify(movieArray));
}