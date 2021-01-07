import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const button=document.querySelector('.button_js');
button.addEventListener('click', toggleLight, false);
// button.onlick=toggleLight();
function toggleLight() {
    
    var body=document.querySelector('.body');
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
    document.querySelector('p').textContent("Toggle light was fired");
    console.log("function toggle was fired");
    
};

