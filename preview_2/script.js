'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

const style = window.getComputedStyle(box);


console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

console.log(style.display);

console.log(document.documentElement.scrollTop);