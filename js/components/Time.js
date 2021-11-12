const setDate = () => {
  const timeBox = document.querySelector('.time__inner');
  const formatValue = document.querySelector('.legend__format span');
  const checkboxFormat = document.querySelector('.checkbox-input');

  checkboxFormat.addEventListener('change', () => {
    if (checkboxFormat.checked !== true) {
      formatValue.innerText = '12 hours';
    } else formatValue.innerText = '24 hours';
  });
  const formatValueNumber = Number(formatValue.textContent.replace(/hours/, ''));
  const time = new Date();
  let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
  if (formatValueNumber === 12) hours = hours % 12;
  timeBox.innerHTML = `${hours}:${minute}:${second}`
}
export default setDate;

