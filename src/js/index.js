import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

function toggleLight() {
    
    document.getElementsByClassName('body').toggleClass('dark');
    
};

document.getElementById('toggle').onclick=toggleLight();