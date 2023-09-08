const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');

btn.addEventListener('click', function(){
    btn.classList.toggle('main-menu__btn_close');
    menu.classList.toggle('active');
})