function Animal() {
    this.legCount = 4;
    this.name = 'Unknown';

    this.eat = () => {
        console.log(`${this.name} is eating`);
    };
}

const an = new Animal();
an.eat();
console.log(an.legCount);