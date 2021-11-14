import { imagesUrls } from "./Data.js";

const changeImgBg = () => {
  const body = document.body;

  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
  

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  if (hours >= 0 && hours < 6)
    body.style.backgroundImage = `url(${imagesUrls[0][getRandomIntInclusive(0, 10)]})`;
  if (hours >= 6 && hours < 12)
    body.style.backgroundImage = `url(${imagesUrls[1][getRandomIntInclusive(0, 10)]})`;
  if (hours >= 12 && hours < 17)
    body.style.backgroundImage = `url(${imagesUrls[2][getRandomIntInclusive(0, 10)]})`;
  if (hours >= 17 && hours < 24)
    body.style.backgroundImage = `url(${imagesUrls[3][getRandomIntInclusive(0, 10)]})`;


};
export default changeImgBg;