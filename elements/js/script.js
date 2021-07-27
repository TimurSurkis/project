'use strict'; 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} покинул систему.`);
};

const timur = new User('Timur', 12);
const alex = new User('Alex', 23);

timur.exit();

timur.hello();
alex.hello();

console.log(timur);
console.log(alex);