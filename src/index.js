import './index.html';
import './style.css';

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const menuAtrElm = document.querySelectorAll('.menu-a');
const orderBtn = document.querySelector(".order-btn")
const drinkElm = document.querySelector(".drink__cup")
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
orderBtn.addEventListener("click", () => {
  if (ordered){
    drinkElm.classList.add("drink__cup--selected");
    orderBtn.textContent = "Zrušit"
    ordered = false;
  } else {
    drinkElm.classList.remove("drink__cup--selected")
    orderBtn.textContent = "Objednat"
    ordered = true;
  }
})





