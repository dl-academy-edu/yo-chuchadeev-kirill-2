var header = document.querySelector('.header__nav')
var burgerMenuOpen = document.querySelector('.burger_menu_open_js')
var burgerMenuClose = document.querySelector('.burger_menu_close_js')
var body = document.querySelector('#body')


burgerMenuOpen.addEventListener('click', function() {
    header.classList.toggle('header__nav_open')
    burgerMenuOpen.classList.add('menu_close')
    burgerMenuClose.classList.add('menu_open')
    body.classList.add('body_lock')
})

burgerMenuClose.addEventListener('click', function() {
    header.classList.toggle('header__nav_open')
    burgerMenuOpen.classList.remove('menu_close')
    burgerMenuClose.classList.remove('menu_open')
    body.classList.remove('body_lock')
})