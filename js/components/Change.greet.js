import { greet } from './Data.js';
import changeQuote from './Change.quote.js';
import { hours } from './Get.date.js';
const changeGreeting = () => {

  let val = 0;
  const greeting = document.querySelector('#greeting');
  const langList = document.querySelector('.select');

  
  val = Number(localStorage.getItem('val'));
  langList.options[val].selected = true;
  const TimeChange = () => {
    if (hours >= 0 && hours < 6) greeting.innerText = greet[val][0];
    if (hours >= 6 && hours < 12) greeting.innerText = greet[val][1];
    if (hours >= 12 && hours < 17) greeting.innerText = greet[val][2];
    if (hours >= 17 && hours < 24) greeting.innerText = greet[val][3];
  }
  TimeChange();
  
  langList.addEventListener('change', () => {
    val = langList.options[langList.selectedIndex].value;
    TimeChange();
    changeQuote(val);
    localStorage.setItem('val', val);
  });
}
export default changeGreeting;