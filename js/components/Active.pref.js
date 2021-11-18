const activePref = () => {
  const btnPref = document.querySelector('.pref-button');
  const form = document.querySelector('.pref-form');
  const checkboxes = document.querySelectorAll('.pref__checkbox');
  const sectionRender = document.querySelectorAll('.section--render');
  const disabledSection = (idValue) => {
    sectionRender.forEach(item => {
      const nameValue = item.dataset.name;
      if (nameValue === idValue) {
        item.classList.toggle('section-render--disabled');
      }
      if (nameValue === 'quotes' && nameValue === idValue) {
        item.nextElementSibling.classList.toggle('section-render--disabled');
      }
    });
  }
  checkboxes.forEach(checkbox => {
    const checkId = checkbox.id;
    const value = localStorage.getItem(checkId);

    if (value === 'true') {
      checkbox.checked = true;
    }

    if (value === 'false') {
      checkbox.checked = false;
    }
  });

  sectionRender.forEach(section => {
    const key = section.dataset.name;
    const value = localStorage.getItem(key);

    if (value === 'false') section.classList.add('section-render--disabled');
    // if (value === 'false' && section.nextElementSibling.classList.contains('quote__settings')) {
    //   section.nextElementSibling.classList.add('section-render--disabled');
    // }
      
    if (value === 'true') section.classList.remove('section-render--disabled');
  });

  btnPref.addEventListener('click', () => {
    btnPref.classList.toggle('pref-button--active');
    form.classList.toggle('pref-form--active');
  });
  form.addEventListener('change', (e) => {
    if (e.target.classList.contains('pref__checkbox')) {
      const idValue = e.target.id;
      const check = e.target.checked;
      localStorage.setItem(idValue, check)
      if (e.target.checked === false) disabledSection(idValue);
      if (e.target.checked === true) disabledSection(idValue);
    }
  });

};
export default activePref;
