var popup = document.querySelector('.popup')
var popapBtn = document.querySelector('.index__banner_js')
var popapClose = document.querySelector('.popup__close')
var body = document.querySelector('#body')

var check = document.querySelector ('#popup__input__check')
var submit = document.querySelector ('.popup__button__submit')
submit.setAttribute('disabled', true)


check.oninput = function() {
    if (check.checked) {
        submit.removeAttribute('disabled');
    }else{
        submit.setAttribute('disabled', true);
    }
}

popapBtn.addEventListener('click', function() {
    popup.classList.add('popup_open')
    body.classList.add('body_lock')
})

popapClose.addEventListener('click', function() {
    popup.classList.remove('popup_open')
    body.classList.remove('body_lock')
})


// slider

let offset = 0;
const slider = document.querySelector('.category__products__list');

document.querySelector('.slider_right').addEventListener('click', function(){
    offset = offset + 300;
    if (offset > 600) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

document.querySelector('.slider_left').addEventListener('click', function(){
    offset = offset - 300;
    if (offset < 0) {
        offset = 600;
    }
    slider.style.left = -offset + 'px';
});