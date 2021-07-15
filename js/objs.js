const o = {
    year: 2009,
    nam: 'Timur',
    city: 'Kyiv',
    0: false
};

const a = ['Alex', 2009, 'Kate', 345];

o[11] = true;
a[11] = 55;

console.log(Array.isArray(o));
console.log(Array.isArray(a));

console.log(typeof(o));
console.log(typeof(a));

// const year = o.year;
// let {nam, year} = o;
// year = 1;
// console.log(nam, year);
// console.log(o);

// const nam1 = a[0];
// const year1 = a[1];
// const nam2 = a[2];
// const year2 = a[3];
// const [nam1, year1, nam2, year2] = a;
// console.log(nam1, year1);
// console.log(nam2, year2);

function printInfo({nam, year}) {
    console.log(nam, year);
}
// const n = 'Monya';
// const y = 2009;
printInfo({nam: 'Monya', year: 2009});

function changeO(oo) {
    oo.nam = oo.nam + '!';
}

changeO(o);
console.log(o.nam);

function changeN(nn) {
    // nn = nn * 2;
    nn *= 2;
    console.log(nn);
}
let n = 11;
changeN(n);
console.log(n);

function changeS(ss) {
    ss += '?';
}

let s = 'Ice cream';
changeS(s);
console.log(s);