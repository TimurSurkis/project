"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    callback();
    console.log(`Я учу: ${lang}!`);
}

function done() {
    console.log('Какой язык программирования ты учишь?');
};

learnJS('JavaScript', done);