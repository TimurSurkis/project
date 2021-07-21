const handler = (event) => {
    if (event.srcElement.tagName == 'BUTTON') {
        alert('Кряяя!');
    }
    console.dir(event.srcElement.tagName);
};

const btn = document.querySelector('button');
btn.onclick = handler;

document.body.onclick = event => { 
    console.log(`body onclick handler ${event.srcElement.tagName}`); 
    event.preventDefault();
};

document.body.onkeydown = (event) => {
    console.dir(event);
    event.preventDefault();
};