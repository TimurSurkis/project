let i = 5;
const timer = setInterval(function() {
    if (i == 0) {
        clearInterval(timer);
    } else {
        console.log(i);
        i--;
    }
}, 500);

// let i = 0;

// function timerHandler() {
//     i++;
//     console.log(i);

//     if (i <= 3) {
//         setTimeout(timerHandler, 500);
//     }
// }

// setTimeout(timerHandler, 500);