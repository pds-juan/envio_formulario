var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'O campo deve ser preenchido';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Escreva o nome completo';
        return false;
    }
    nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'O campo deve ser preenchido';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Deve conter 11 digitos';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Apenas números são permitidos';
        return false;
    }
    phoneError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'O campo deve ser preenchido';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email inválido';
        return false;
    }
    emailError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = 'Necessário mais ' + left + ' caracteres';
        return false;
    }
    messageError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Preencha todos os campos corretamente para enviar';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}