import mainPic from './main-pic.jpg';

export default function loadMainPage(){

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Restaurant Page';

    const myMainPic = new Image();
    myMainPic.src = mainPic;
    myMainPic.classList.add('pic');

    content.appendChild(title);
    content.appendChild(myMainPic);
}