import setDate from './components/Time.js';
import timeSettings from './components/Time.settings.js';
import greetingSettings from './components/Greeting.settings.js';
import changeName from './components/Change.name.js';
import changeGreeting from './components/Change.greet.js';
import changeImgBg from './components/Change.img.js';
import changeQuote from './components/Change.quote.js';
import changeFocus from './components/Change.focus.js';



document.addEventListener('DOMContentLoaded', () => {
 
  const val = localStorage.getItem('val');
  const valFocus = localStorage.getItem('focus-task');
  
  setInterval(setDate, 1000);
  timeSettings();
  greetingSettings();
  changeName();
  changeGreeting();
  changeImgBg();
  changeQuote(val);
  changeFocus(val,valFocus);



});


