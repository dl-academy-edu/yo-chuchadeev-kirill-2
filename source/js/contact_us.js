var popup = document.querySelector('.contact__form')
var check = document.querySelector ('#input__check')
var submit = document.querySelector ('.button__submit')
submit.setAttribute('disabled', true)

check.oninput = function() {
    if (check.checked) {
        submit.removeAttribute('disabled');
    }else{
        submit.setAttribute('disabled', true);
    }
}