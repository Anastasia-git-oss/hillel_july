

let myBirth = '13.08.2001';
const myBirthDate = document.querySelector('.myBirth');
myBirthDate.textContent = 'My date of birth:  '+ moment(myBirth, 'DD.MM.YYYY').format('LL');


let userBirth = prompt('Enter the date in the format DD.MM.YYYY');
const userBirthDate = document.querySelector('.userBirth');

const dateRegEx = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19\d{2}|20[0-1]\d|202[0-5])$/;
const boxAlert = document.querySelector('div');

if (dateRegEx.test(userBirth)) {
    let userDate = moment(userBirth, 'DD.MM.YYYY', true);
    if (userDate.isValid()) {
        userBirthDate.textContent = 'User date of birth:  ' + userDate.format('YYYY.MM.DD');
    }else{
        boxAlert.classList.remove('d-none');
    }
}else{
    boxAlert.classList.remove('d-none');
}

