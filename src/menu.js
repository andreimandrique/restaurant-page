import menuPic from './menu-pic.jpg';

export default function loadMenuPage(){
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Menu';

    const myMenuPic = new Image();
    myMenuPic.src = menuPic;
    myMenuPic.classList.add('pic')

    const menuText = document.createElement('h3');
    menuText.classList.add('title');
    menuText.textContent = 'Pork Sisig for only ₱99';

    content.appendChild(title);
    content.appendChild(myMenuPic);
    content.appendChild(menuText);
}