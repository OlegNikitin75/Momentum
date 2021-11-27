import { elemLangs } from './Data.js';
const setElemLang = (val) => {
  const elements = document.querySelectorAll('.elem__lang');

  elements.forEach(elem => {
    const elemDataElem = elem.dataset.elem;
    if (elem.classList.contains('label')) {
      elem.firstChild.textContent = elemLangs[val][elemDataElem];
    } else {
      elem.textContent = elemLangs[val][elemDataElem];
    }
    
    
  });


}
export default setElemLang;