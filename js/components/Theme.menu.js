const activeMenu = () => {
  const btnSettings = document.querySelector('.slider__settings-btn--settings');
  const sliderThemeMenu = document.querySelector('.slider__buttons');
  btnSettings.addEventListener('click', () => {
    btnSettings.classList.toggle('slider__settings-btn--active');
    sliderThemeMenu.classList.toggle('slider__buttons--active');
  });

};
export default activeMenu;