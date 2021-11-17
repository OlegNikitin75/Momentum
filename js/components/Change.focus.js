import { focusTitles } from "./Data.js";
const changeFocus = (val,valFocus) => {
  const focusTitle = document.querySelector('.section-focus__title');
  const btnFocusCheck = document.querySelector('.settings__focus');
  const focusTask = document.querySelector('.focus__input');
  const parentFocus = document.querySelector('.section-focus');
  parentFocus.addEventListener('mouseover', () => btnFocusCheck.classList.add('btn--active'));
  parentFocus.addEventListener('mouseout', () => btnFocusCheck.classList.remove('btn--active'));
  focusTitle.innerText = focusTitles[val];
  const width = focusTitle.offsetWidth;
  
  focusTask.innerText = valFocus;
  focusTask.style.minWidth = `${width}px`;

  focusTask.addEventListener('blur', () => {
    const taskMessage = focusTask.firstChild.nodeValue;
    localStorage.setItem('focus-task', taskMessage);
  });




  
  btnFocusCheck.addEventListener('click', () => {
    focusTask.innerText = '';
    localStorage.setItem('focus-task', '');
  })
};
export default changeFocus;