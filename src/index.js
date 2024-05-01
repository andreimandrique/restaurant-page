import './style.css';
import loadMainPage from './main.js';
import loadMenuPage from './menu.js';
import loadAboutPage from './about.js';

const homeNav = document.getElementById('homeNav');
const menuNav = document.getElementById('menuNav');
const aboutNav = document.getElementById('aboutNav');
const content = document.getElementById('content');

loadMainPage();

function clearContent(){ 
    content.innerHTML = "";
}

homeNav.addEventListener("click", ()=>{
    clearContent();
    loadMainPage();
})

menuNav.addEventListener("click", ()=>{
    clearContent();
    loadMenuPage();
})

aboutNav.addEventListener("click", ()=>{
    clearContent();
    loadAboutPage();
})