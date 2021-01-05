import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const button=document.querySelector('.button_js');
button.addEventListener('click', toggleLight);

function toggleLight() {
    
    var body=document.querySelector('.body');
    body.classList.toggle("dark");
    console.log("function toggle was fired");
    
};

