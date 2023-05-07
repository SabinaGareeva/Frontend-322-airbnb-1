


let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputName1 = document.querySelector('.js-input-name1'),
    inputName2 = document.querySelector('.js-input-name2'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone');



function validateName(name) {
    let re = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    return re.test(String(name));
}

function validateEmail(email) {
    let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/ui;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return re.test(String(phone));
}



form.onsubmit = function () {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        nameVal1 = inputName1.value,
        nameVal2 = inputName2.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

     formInputs.forEach(function (input) {
        if (input.value === '') {
             input.classList.add('error');
            // alert('Fill in the required fields, please');
         } else { input.classList.remove('error'); }
    });

    if (emptyInputs.length !== 0) {
        alert('Fill in the required fields, please'); return false;
    }
    if (!validateName(nameVal1)) {
        alert('Enter your first name in Latin letters, please'); inputName1.classList.add('error');
        return false;
    } else { inputName1.classList.remove('error'); }

    if (!validateName(nameVal2)) {
        alert('Enter your last name in Latin letters, please'); inputName2.classList.add('error');
        return false;
    } else { inputName2.classList.remove('error'); }

    if (!validateEmail(emailVal)) {
        alert('Enter a valid email, please');
        inputEmail.classList.add('error');
        return false;
    } else { inputEmail.classList.remove('error'); }

    if (!validatePhone(phoneVal) && phoneVal !== '') {
        alert('Enter a valid phone, please');
        inputPhone.classList.add('error');

        return false;
    } else { inputPhone.classList.remove('error'); }

}



