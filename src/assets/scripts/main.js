document.body.classList.add('js');

const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('#menu li a');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
  }
});