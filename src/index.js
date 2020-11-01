import './index.html';
import './style.css';
import { Drink } from './Drink';


const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const menuAtrElm = document.querySelectorAll('.menu-a');

//funkce která schová a otevírá menu
const hideNav = () => {
  navElm.classList.toggle('nav-closed');
};

//na klik na menu se otevře a schová
navBtnElm.addEventListener('click', hideNav);

//po kliknutí na jednotlivý odkaz se menu schová
menuAtrElm.forEach((e) => {
  e.addEventListener('click', () => {
    hideNav();
  });
});


const drink =
{
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const drinksListElm = document.querySelector(".drinks-list")

//tímto vložím komponentu Drink, který si načte objekty drink do divu s třídou .drinks-list
drinksListElm.appendChild(Drink(drink))
