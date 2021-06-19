const movieContainer = document.getElementById('movie-container');

const movieArray = [];

function Movie (name, genre, seen) {
  this.name = name;
  this.genre = genre;
  this.seen = seen;
  this.info = function() {
    return ("name: " + name + ", genre: " + genre + ", seen: " + seen);
  };
  this.toggleSeen = function() {
    if (this.seen) {
      this.seen = false;
    }
    else {
      this.seen = true;
    }
    
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
    
    console.log(movieArray[i]);
    if (movieArray[i] !== undefined) {
      
    const movie = document.createElement('div');
    movie.classList.add('movie');
    
    const deleteButton = document.createElement('button');
    deleteButton.id = i;
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = 'X';
    deleteButton.onclick = function () {
      //movieArray.splice(movieArray[this.id], 1);
      delete movieArray[this.id];
      console.log(movieArray);
      buildLibrary();
    };
    

    movie.innerHTML = movieArray[i].name.bold() + "<br/>";
    movie.innerHTML += movieArray[i].genre.bold() + "<br/>";
    
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
    movieSeen.id = i;
    movieSeen.onchange = function () {
      
      movieArray[this.id].toggleSeen();
      console.log(movieArray);
    };
    
    const label = document.createElement('label');
    label.htmlFor = 'seenCheckBox';
    label.textContent = "seen?";
    
    movieSeenBox.appendChild(label);
    movieSeenBox.appendChild(movieSeen);

    movieSeen.checked = movieArray[i].seen;
    
    movie.appendChild(movieSeenBox);
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
     console.log(movieArray);
  };
  
  
