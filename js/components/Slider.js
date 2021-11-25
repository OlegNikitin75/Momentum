import { source } from './Data.music.js';

const actionSlider = () => {
  const sliderContainer = document.querySelector('.slider__container');
  const themeButtons = document.querySelectorAll('.slider__btn');
  const btnPlay = document.querySelector('.slider__settings-btn--play');
  let slideIndex = 0;
  let sliderId = 0;
  let folder = source[sliderId];
  sliderContainer.style.backgroundImage = `url(${source[sliderId][slideIndex]})`;
  let isShowSlides = true;
  const showSlides = () => {
    slideIndex++;
    if (slideIndex > folder.length - 1) {
      slideIndex = 1;
    }
    sliderContainer.animate([
      { opacity: 0 },
      { opacity: 1 },
      { opacity: 0 },
    ], {duration: 8000},
      { animationDelay: 5000 })
    
    sliderContainer.style.backgroundImage = `url(${source[sliderId][slideIndex]})`;
  };
  showSlides()
  let interval = setInterval(showSlides, 8000);
  const playSlider = () => {
    isShowSlides = true;
    setInterval(showSlides, 8000);
  };
  const pauseSlider = () => {
    isShowSlides = false;
    clearInterval(interval);
  };
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sliderId = btn.id;
      themeButtons.forEach(item => {
        if (item.classList.contains('slider__btn--active')) {
          item.classList.remove('slider__btn--active')
        }
      });
      btn.classList.toggle('slider__btn--active');
    });
  });
  btnPlay.addEventListener('click', () => {
    btnPlay.classList.toggle('btn__pause');
    if (isShowSlides) {
      pauseSlider();
    } else {
      playSlider();
    }
  });
}; export default actionSlider;