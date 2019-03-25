import it from './gen.js/index.js';

const button = document.createElement('button');
button.innerText = 'A';
button.addEventListener('click', () => {
    console.log(it.next());
})

document.body.appendChild(button)
