"use strict";

let numberOfMovies;

function start() {
    numberOfMovies = +prompt("Сколько фильмов вы уже просмотрели?", "");

    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)) {
        numberOfMovies = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('Насколько оцените его?');
          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Продолжайте в том же духе');
            }
            else {
                console.log('Error');
                i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено маловато фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
                alert('Вы - киноман!');
    }    
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); 
    }
}

writeYourGenres();