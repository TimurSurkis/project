class Animal {
    constructor() {
        // super();
        this.legCount = 4;
        this.name = 'Unknown';
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Horse extends Animal {
    constructor() {
        super();
        this.name = 'Horse';
    }

    run() {
        console.warn('Igogo!!!');
        super.run();
    }
}

const an = new Horse();
an.run();
console.dir(an);