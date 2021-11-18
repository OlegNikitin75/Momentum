import { months, days } from './Data.js';
import { date, month, year, day } from './Get.date.js';
const setDateToday = (val) => {
  const todayDate = document.querySelector('.date__span--date');
  const todayMonth = document.querySelector('.date__span--month');
  const todayYear = document.querySelector('.date__span--year');
  const todayDay = document.querySelector('.date__span--day');
  const todayMark = document.querySelector('.date__span--mark');
  if (val === '0') todayMark.style.display = 'none';
  else todayMark.style.display = 'inline';
  todayDate.innerText = date;
  switch (val) {
    case '0': todayMonth.innerText = months[0][month];
      todayDay.innerText = days[0][day - 1];
      break;
    case '1': todayMonth.innerText = months[1][month];
      todayDay.innerText = days[1][day - 1];
      break;
    case '2': todayMonth.innerText = months[2][month];
      todayDay.innerText = days[2][day - 1];
      break;
  }
  todayYear.innerText = year;
}
export default setDateToday;

