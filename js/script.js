"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    }, 
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено маловато фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
                alert('Вы классический зритель');
            } else if (personalMovieDB.count > 30) {
                    alert('Вы - киноман!');
        }    
    }, 
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }, 
    toggleVisibleMyDB: function() {
        // if (personalMovieDB.privat == false) {
        //     personalMovieDB.privat = true;
        // } else {
        //     personalMovieDB.privat = false;
        // }
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`); 

            if (genre == '' || personalMovieDB.genres == null) {
                alert('Ошибка! Вы ввели некорректные данные или не ввели их вовсе!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};