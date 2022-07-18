let menuToggle = document.getElementById('menu');
let closeToggle =document.getElementById('close');
let menuElement = document.querySelector('.menu-element');

// menu function
menuToggle.addEventListener('click',() =>{
    menuElement.style.visibility='visible';
    menuToggle.style.visibility='hidden';
    closeToggle.style.visibility='visible';
})
// close function
closeToggle.addEventListener('click',()=>{
    menuElement.style.visibility='hidden';
    menuToggle.style.visibility='visible';
    closeToggle.style.visibility='hidden';
})