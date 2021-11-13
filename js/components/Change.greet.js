import { greet } from './Data.js'
const changeGreeting = () => {

  let val = 0;
  const greeting = document.querySelector('#greeting');
  const langList = document.querySelector('.select');
  const langListItems = document.querySelectorAll('.select__item');

  // for (const item of langListItems) {
  //   item.style.background = '#0000004D';
  // }
  val = Number(localStorage.getItem('val'));
  langList.options[val].selected = true;
  const TimeChange = () => {
    const time = new Date();
    const hours = time.getHours();
    if (hours >= 0 && hours < 6) greeting.innerText = greet[val][0];
    if (hours >= 6 && hours < 12) greeting.innerText = greet[val][1];
    if (hours >= 12 && hours < 17) greeting.innerText = greet[val][2];
    if (hours >= 17 && hours < 24) greeting.innerText = greet[val][3];

  }
  TimeChange();
  
  langList.addEventListener('change', () => {
    val = langList.options[langList.selectedIndex].value;
    TimeChange();
    localStorage.setItem('val', val);
  });
}
export default changeGreeting;