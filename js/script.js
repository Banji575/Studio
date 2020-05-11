const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (evt)=>{
    evt.target.closest('.hamburger').classList.toggle('hamburger--active');
    evt.target.blur();
    evt.target.closest('.menu').querySelector('.menu__list').classList.toggle('menu__list--active')
})