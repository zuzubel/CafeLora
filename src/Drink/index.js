import { Layer } from '../Layer';
import './style.css';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.className = 'drink';
  drinkElm.innerHTML = `
          <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>
                
              </div>
            </div> 
            <div class="drink__controls">
                          <button class="order-btn">Objednat</button>
                      </div>`;
  //předání pole drinks komponentě Layers for smyčkou
  /* for (let i = 0; i < layers.length; i += 1){
            drinkInfoElm.appendChild(Layer(drinks.layers[i]))} */

  //předání pole drinks komponentě Layers forEach smyčkou
    const drinkInfoElm = drinkElm.querySelector('.drink__info');

    props.layers.forEach((layer) => {
    drinkInfoElm.appendChild(Layer(layer));
    });

    //po kliknutí zobrazí jiný obrázek a změní nápis tlačítka
    const orderBtn = drinkElm.querySelector('.order-btn');
    const drinkCupElm = drinkElm.querySelector('.drink__cup');

    orderBtn.addEventListener('click', () => {
    props.ordered = !props.ordered; //vyneguje proměnnou ordered
    if (props.ordered) {
      drinkCupElm.classList.add('drink__cup--selected');
      orderBtn.textContent = 'Zrušit';
    } else {
      drinkCupElm.classList.remove('drink__cup--selected');
      orderBtn.textContent = 'Objednat';
    }
    });

  return drinkElm;
};

//předání bloku objektů přes for smyčku
/* for (let i = 0; i < layers.length; i += 1){
  drinkInfoElm.appendChild(Layer(layers[i]))
} */
