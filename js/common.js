import setDate from './components/Time.js';
import timeSettings from './components/Time.settings.js'

document.addEventListener('DOMContentLoaded', () => {
  setInterval(setDate, 1000);
  timeSettings();



});


