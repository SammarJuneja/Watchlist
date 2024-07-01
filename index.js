const minput = document.getElementById("movie");
const sinput = document.getElementById("series");
const ainput = document.getElementById("anime");
const mainput = document.getElementById("manga");




// MOVIES
function submitMovie() {
const inputmovies = document.getElementById("movie")
const le = document.getElementById("moviestable")
const ho = document.getElementById("moviesrow")

const er = localStorage.getItem("movies") || []

if (inputmovies.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a movie name',
    });
} else if (er.includes(inputmovies.value.trim())) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Movie is already added in watchlist',
    });
} else {
  const mnu = document.getElementById("mnumber")
      var el = document.getElementById("moviesrow");
    const delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    delbtn.style.backgroundColor = "black"
    delbtn.style.color = "white"
    delbtn.style.border = "none"
    delbtn.style.borderRadius = "3px"
    delbtn.style.height = "30px"
    
    
    const row = le.insertRow(2)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1)
    cell1.innerHTML = inputmovies.value;
    cell2.id = "dbt"
    cell1.id = "neid"
    minput.value = ''
    
    const mar = localStorage.getItem("movies") || []
    
    //var button = delbtn.cloneNode(true);
    cell2.appendChild(delbtn)
    
    var idne = document.getElementById("neid").innerHTML
    localStorage.setItem("mconf", 1)
  saveMovieData()
}
}


// SERIES
function submitSeries() {
const inputseries = document.getElementById("series")
const le = document.getElementById("seriestable")
    
if (inputseries.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a series name',
    });
} else {
    const delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    delbtn.style.backgroundColor = "black"
    delbtn.style.color = "white"
    delbtn.style.border = "none"
    delbtn.style.borderRadius = "3px"
    delbtn.style.height = "30px"
    
  const row = le.insertRow(2)
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  cell1.innerHTML = inputseries.value;
  cell2.id = "sdbt"
  cell1.id = "sneid"
  sinput.value = ''

  //var button = delbtn.cloneNode(true);
  cell2.appendChild(delbtn)
  localStorage.setItem("sconf", 1)
  saveSeriesData()
}
}


// ANIME
function submitAnime() {
  const inputanime = document.getElementById("anime")
  const le = document.getElementById("animetable")

if (inputanime.value === '') {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please enter an anime name',
  });
} else {
    const delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    delbtn.style.backgroundColor = "black"
    delbtn.style.color = "white"
    delbtn.style.border = "none"
    delbtn.style.borderRadius = "3px"
    delbtn.style.height = "30px"
    
  const row = le.insertRow(2)
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1)
  cell1.innerHTML = inputanime.value;
  cell2.id = "adbt"
  cell1.id = "aneid"
  ainput.value = ''
  
  
 // var button = delbtn.cloneNode(true);
  cell2.appendChild(delbtn)
  localStorage.setItem("aconf", 1)
  saveAnimeData()
}
}

function submitManga() {
  const inputmanga = document.getElementById("manga")
  const le = document.getElementById("mangatable")

  if (inputmanga.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a manga name',
    });
  } else {
    const delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    delbtn.style.backgroundColor = "black"
    delbtn.style.color = "white"
    delbtn.style.border = "none"
    delbtn.style.borderRadius = "3px"
    delbtn.style.height = "30px"

    const row = le.insertRow(2)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1)
    cell1.innerHTML = inputmanga.value;
    cell2.id = "madbt"
    cell1.id = "maneid"
    mainput.value = ''

    //var button = delbtn.cloneNode(true);
    cell2.appendChild(delbtn)
    localStorage.setItem("maconf", 1)
    saveMangaData()
  }
}

const le = document.getElementById("moviestable")
const sle = document.getElementById("seriestable")
const ale = document.getElementById("animetable")
const male = document.getElementById("mangatable")


function saveMovieData() {
localStorage.setItem("movies", le.innerHTML)
}
function showMovieData() {
  le.innerHTML = localStorage.getItem("movies")
}

function saveSeriesData() {
localStorage.setItem("series", sle.innerHTML)
}
function showSeriesData() {
  sle.innerHTML = localStorage.getItem("series")
}

function saveAnimeData() {
localStorage.setItem("anime", ale.innerHTML)
}
function showAnimeData() {
  ale.innerHTML = localStorage.getItem("anime")
}

function saveMangaData() {
localStorage.setItem("manga", male.innerHTML)
}
function showMangaData() {
  male.innerHTML = localStorage.getItem("manga")
}

le.addEventListener("click", function(m) {
  if(m.target.tagName === "BUTTON") {
    const nlo = document.getElementById("neid")
    const btn = document.getElementById("dbt")
    nlo.remove()
    btn.remove()
    saveMovieData()
  }
}, false);

sle.addEventListener("click", function(s) {
  if(s.target.tagName === "BUTTON") {
    const nlo = document.getElementById("sneid")
    const btn = document.getElementById("sdbt")
    nlo.remove()
    btn.remove()
    saveSeriesData()
  }
}, false);

ale.addEventListener("click", function(a) {
  if(a.target.tagName === "BUTTON") {
    const nlo = document.getElementById("aneid")
    const btn = document.getElementById("adbt")
    nlo.remove()
    btn.remove()
    saveAnimeData()
  }
}, false);

male.addEventListener("click", function(c) {
  if (c.target.tagName === "BUTTON") {
    const nlo = document.getElementById("maneid")
    const btn = document.getElementById("madbt")
    nlo.remove()
    btn.remove()
    saveMangaData()
  }
}, false);

/*
localStorage.removeItem("movies")
localStorage.removeItem("series")
localStorage.removeItem("anime")
localStorage.removeItem("manga")
localStorage.removeItem("mconf")
localStorage.removeItem("sconf")
localStorage.removeItem("aconf")
localStorage.removeItem("mconf")
//*/


if(localStorage.getItem("mconf") === null){
} else {
  showMovieData()
}
if(localStorage.getItem("sconf") === null){
} else {
  showSeriesData()
}
if(localStorage.getItem("aconf") === null){
} else {
  showAnimeData()
}
if(localStorage.getItem("maconf") === null){
} else {
  showMangaData()
}
