const changeName = () => {
  const changeNameBtn = document.querySelector('.greeting__btn');
  const name = document.querySelector('#user-name');

  const noEdit = () => {
     name.contentEditable = false;
      name.style.background = 'transparent';
      name.blur();
  }
  changeNameBtn.addEventListener('click', () => {
    name.contentEditable = true;
    name.style.background = 'var(--color-elem-bg)';
    name.focus();
    
  });
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') noEdit();
  });
  document.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('greeting__btn')) noEdit();
  });

}
export default changeName;