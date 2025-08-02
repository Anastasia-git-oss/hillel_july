///4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        console.log('ви скасували')
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
        break;
}

//From the teacher

//1.
let firstDigit = parseInt(prompt(`Enter your digit:`));
let secondDigit = parseInt(prompt(`Enter your second digit:`));

if(firstDigit > secondDigit){
    console.log(`First digit bigger than second`)
}else if (secondDigit > firstDigit) {
    console.log(`Second digit bigger than first`)
}else if(firstDigit === secondDigit){
    console.log(`Digits are the same`)
}
//2.
let km = 1;
let ft = 4000;

let km_m = km * 1000;
let ft_m = ft * 0.305;

if(km_m > ft_m){
    console.log(`Distance in feet is less`)
}else if(ft_m > km_m){
    console.log(`Distance in kilometers is less`)
}else if(km_m === ft_m){
    console.log(`Distances are the same`)
}

//3.
let a = parseInt(prompt(`Enter your first digit :`));
let b = parseInt(prompt(`Enter your second digit:`));

if(b % a ){
    console.log(`Число а є дільником числа b`)
}else {
    console.log(`Числа a не є дільником числа b`)
}

if (a > b){
    if(a % b ){
        console.log(`Число b є дільником числа а`)
    }else {
        console.log(`Число b не є дільником числа а`)
    }
}


//4.
let num = parseInt(prompt(`Enter yor digit:`));

let lastDigit = num % 10;

if (lastDigit % 2 === 0){
     alert(`This is an even digit`);
}else {
    alert(`This is an odd digit`);
}
console.log(`Last digit is: ${lastDigit}`);


//5.
if(num >= 10 && num <= 99){
    let firstD = num / 10;
    let seconD = num % 10;

    if(firstD > seconD){
        console.log(`First digit bigger than second.`);
    }else if (seconD > firstD) {
        console.log(`Second digit bigger than first.`);
    }else{
        console.log(`Digits are the same`);
    }
}else{
    console.log(`This isn't a double-digit number.`)
}
//6.
let userNum = parseInt(prompt(`Enter a three-digit number:`));

if(userNum >= 100 && userNum <= 999){
    let firstD = Math.floor( userNum / 100);
    let seconD = Math.floor( userNum % 100 / 10);
    let thirD = userNum % 10;
    console.log(firstD, seconD, thirD);

    let sum = firstD + seconD + thirD;
    if (sum % 2) {
        alert(`The sum of the digits is even.`)
    }else{
        alert(`The sum of the digits is odd `)
    }
    if (sum % 5) {
        alert(`The sum is a multiple of five.`)
    }else{
        alert(`The sum isn't a multiple of five.`)
    }

    let prod = firstD * seconD * thirD;

    if (prod > 100) {
        alert(`The product of digits is bigger than 100`)
    }else{
        alert(`The product of digits isn't bigger than 100`)
    }
    if (firstD === seconD && seconD === thirD && thirD === firstD) {
        alert(`All digits are the same`)
    }else if(firstD === seconD){
        alert(`First digit and second digit are the same`)
    }else if(seconD === thirD){
         alert("Second digit and  third digit are the same.");
    }else if (thirD === firstD) {
        alert("Third digit and first digit are the same.");
    }else{
         alert(`All digits are different.`)
    }
}else if(isNaN(userNum)){
    alert(`Isn't a number`)
}else{
    alert(`Isn't a three-digit number.`)
}

//7.
let userValue = 123321;

let d1 = Math.floor(userValue / 100000);
let d2 = Math.floor(userValue % 100000 / 10000);
let d3 = Math.floor(userValue % 10000 / 1000);
let d4 = Math.floor(userValue % 1000 / 100);
let d5 = Math.floor(userValue % 100 / 10);
let d6 = userValue % 10;

if (d1 === d6 && d2 === d5 && d3 === d4) {
    console.log("Number is mirror");
} else {
    console.log("Number isn't mirror");
}
