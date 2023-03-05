validateDetails = (element, regex) => {
    if(/^.{1,}$/.test(element.value) == false) {
        element.nextElementSibling.innerHTML = element.previousElementSibling.innerHTML + ' is required';
        element.style.borderColor = '#A80000';
        return 0;
    }
    if(regex.test(element.value) == false) {
        element.nextElementSibling.innerHTML = element.previousElementSibling.innerHTML + ' is not valid';
        element.style.borderColor = '#A80000';
        return 0;
    }
    element.style.borderColor = '#c2c2c2';
    element.nextElementSibling.innerHTML = '';
    return 1;
}


const regexValues = {
    firstName: /^\w+$/,
    lastName: /^\w+$/,
    email: /^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})){1,50}$/,
    contactNumber: /^\d{2}\+[0-9]{10}$/,
    pin: /^\d{6}$/,
    cardNumber: /^4[0-9]{12}(?:[0-9]{3})?$/,
    cardExpiry: /20[2-9][0-9]/,
    cvv: /\d{3,4}/,
}


document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    const form = event.target.parentElement;
    const inputFields = form.querySelectorAll('input');
    var flag = 1;

    inputFields.forEach(element => {
        if(validateDetails(element, regexValues[element.id]) == 0) {
            flag = 0;
        }
    });
    
    if (flag) {
        form.submit();
    }
});