this.abc = 'ABC';
console.log('Main script:', this.abc);


const regularFunc = function () {
    console.log('Regular function:', this.abc);
};
regularFunc();

//arrowFunc();

setTimeout(function () {
    this.abc = 'XYZ';

    const arrowFunc = () => {
        console.log('Arrow function:', this.abc);
    };
    
    arrowFunc();
}, 1000);
