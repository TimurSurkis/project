function calc(a, b, func) {
    let res = func(a, b);
    console.log(`Результат: ${res}`);
}

function sum(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

calc(3, 3434, mul);