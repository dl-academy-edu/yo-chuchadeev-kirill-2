var popup = document.querySelector('.popup')
var popapBtn = document.querySelector('.index__banner_js')
var popapClose = document.querySelector('.popap__close')
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
})

popapClose.addEventListener('click', function() {
    popup.classList.remove('popup_open')
})
