
let userNumber = prompt("Enter three-digit number:");
userNumber = parseInt(userNumber);

if (isNaN(userNumber) || userNumber === null) {
    alert("Isn't a number.");
}else if(userNumber < 100 || userNumber > 999){
    alert("Isn't a three-digit number.");
}else{
    let digit1 = Math.round( userNumber / 100);
    let digit2 = Math.round(userNumber % 100 / 10);
    let digit3 = userNumber % 10;

    if (digit1 === digit2 && digit2 === digit3 && digit3 === digit1) {
        alert("All digits are the same!");
    }else if(digit1 === digit2){
        alert("Digit 1 and digit 2 - are the same.");
    }else if(digit1 === digit3){
        alert("Digit 1 and digit 3 - are the same.");
    }else if (digit2 === digit3){
        alert("Digit 2 and digit 3 - are the same.");
    }else{
        alert("All the digits are different.");
    }
}