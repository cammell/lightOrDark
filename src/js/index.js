import '../scss/main.scss';



console.log('HELLO 🚀')




// button.onlick=toggleLight();
function toggleLight() {
    
    const body=document.querySelector('.body');
    const p=document.querySelector('p');
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        p.textContent="It is dark now";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        p.textContent="It is light now";
    }
    
    
    
};


const button=document.querySelector('.button_js');
button.addEventListener('click', toggleLight);