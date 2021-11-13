import setDate from './components/Time.js';
import timeSettings from './components/Time.settings.js';
import greetingSettings from './components/Greeting.settings.js';
import changeName from './components/Change.name.js';
import changeGreeting from './components/Change.greet.js';



document.addEventListener('DOMContentLoaded', () => {
 
  
  
  setInterval(setDate, 1000);
  timeSettings();
  greetingSettings();
  changeName();
  changeGreeting();



});


