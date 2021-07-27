document.addEventListener('DOMContentLoaded', (event) => {
    const div = document.querySelector('div');
    const div2 = document.querySelector('#second');
    const btn = document.querySelector('button');

    const divHandler = (event) => {
        event.target.classList.toggle('frame-red');
        div2.classList.toggle('hidden');
    };


    div.addEventListener('click', divHandler);
    div.addEventListener('touchstart', divHandler);
    btn.addEventListener('click', divHandler);
});