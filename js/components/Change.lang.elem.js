import { elemLangs } from './Data.js';
const setElemLang = (val) => {
  const elements = document.querySelectorAll('.elem__lang');

  elements.forEach(elem => {
    const elemDataElem = elem.dataset.elem;
    elem.innerText = elemLangs[val][elemDataElem];
    
  });


}
export default setElemLang;