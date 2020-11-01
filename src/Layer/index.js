
export const Layer = (props) => {
  const layerDivElm = document.createElement('div');
  layerDivElm.className = 'layer';
  layerDivElm.innerHTML = `
  <div
    class="layer__color"
    style="background-color: ${props.color}"
  ></div>
  <div class="layer__label">${props.label}</div>
  `;
  return layerDivElm;
};
