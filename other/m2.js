import it from './gen.js';

const button = document.createElement('button');
button.innerText = 'B';
button.addEventListener('click', () => {
    console.log(it.next());
});

document.body.appendChild(button)