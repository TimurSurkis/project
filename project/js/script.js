'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          bg = document.querySelector('.promo__bg'),
          genre = bg.querySelector('.promo__genre'),
          filmList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('input[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newMovie = addInput.value;
        const favorite = checkbox.checked;

        if (newMovie) {

            if (newMovie.length > 21) {
                newMovie = `${newMovie.substring(0, 22)}...`;
            }

            if (favorite == true) {
                console.log('Добавляем любимый фильм...');
            }

            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);

            createFilmList(movieDB.movies, filmList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });    
    };

    // for (let i in adv) {
    // for (let i = 0; i < adv.length; i++) {
    //     // item.remove();
    //     console.log(i);
    // }
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
    bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    filmList.innerHTML = "";
    
    movieDB.movies.sort();
    
    movieDB.movies.forEach((film, i) => {
        filmList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    function createFilmList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createFilmList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createFilmList(movieDB.movies, filmList);
});