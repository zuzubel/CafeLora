import './index.html';
import './style.css';
import {Layer} from './Layer'
import './Layer/style.css'

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const menuAtrElm = document.querySelectorAll('.menu-a');
const orderBtn = document.querySelector('.order-btn');
const drinkElm = document.querySelector('.drink__cup');
let ordered = false;

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

//po kliknutí zobrazí jiný obrázek a změní nápis tlačítka
orderBtn.addEventListener('click', () => {
  if (ordered) {
    drinkElm.classList.add('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
    ordered = false;
  } else {
    drinkElm.classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    ordered = true;
  }
});

const cappuccino = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const drinkInfoElm = document.querySelector('.drink__info');

//předání bloku objektů přes for smyčku
/* for (let i = 0; i < cappuccino.length; i += 1){
  drinkInfoElm.appendChild(Layer(cappuccino[i]))
} */

//předání bloku objektů komponentě for smyčkou
cappuccino.forEach((drink) => {
  drinkInfoElm.appendChild(Layer(drink))
})




