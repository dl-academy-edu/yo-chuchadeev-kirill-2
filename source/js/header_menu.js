var header = document.querySelector('.header__nav')
var burgerMenuOpen = document.querySelector('.burger_menu_open_js')
var burgerMenuClose = document.querySelector('.burger_menu_close_js')


burgerMenuOpen.addEventListener('click', function() {
    header.classList.add('header__nav_open');
    document.getElementById("burger_menu_open_js").style.display = "none";
    document.getElementById("burger_menu_close_js").style.display = "flex";
})

burgerMenuClose.addEventListener('click', function() {
    header.classList.remove('header__nav_open');
    document.getElementById("burger_menu_open_js").style.display = "flex";
    document.getElementById("burger_menu_close_js").style.display = "none";
})