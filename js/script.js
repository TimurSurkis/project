"use strict";

const numberOfMovies = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    alert('Просмотрено маловато фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
            alert('Вы - киноман!');
}

console.log(personalMovieDB);