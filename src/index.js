import './index.html';
import './style.css';

const btnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const menuAtrElm = document.querySelectorAll('.menu-a');

//funkce která schová a otevírá menu
const hideNav = () => {
  navElm.classList.toggle('nav-closed');
};

//na klik na menu se otevře a schová
btnElm.addEventListener('click', hideNav);

//po kliknutí na jednotlivý odkaz se menu schová
menuAtrElm.forEach((e) => {
  e.addEventListener('click', () => {
    hideNav();
  });
});




