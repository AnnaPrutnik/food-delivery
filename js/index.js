const refs = {
  burgerBtn: document.querySelector('.burger'),
  modal: document.querySelector('.header__wrapper'),
  closeBtn: document.querySelector('.menu__close'),
};

refs.burgerBtn.addEventListener('click', openBurger);
refs.closeBtn.addEventListener('click', closeBurger);

function openBurger() {
  refs.modal.classList.add('open');
}

function closeBurger() {
  refs.modal.classList.remove('open');
}
