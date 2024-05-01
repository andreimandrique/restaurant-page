export default function loadAboutPage(){

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'About Us';

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = 
    "A passionate team of innovators, we at Andrei Restaurant have been crafting Filipino Pork Sisig since 2010. Fueled by inspiration, we're headquartered in the charming coastal town of Camarin,Caloocan. Feel free to reach out with any questions - we'd love to hear from you! Contact us at andreimandrique3@gmail.com";

    content.appendChild(title);
    content.appendChild(aboutText);
}