
let numberUser = parseInt(prompt(`Enter an integer:`));
if (isNaN(numberUser)) {
    alert(`Isn't a number.`)
}else if(!Number.isInteger(numberUser)){
   alert(`Isn't an integer.`)
}else{
    for (let i = 1; i <= 100; i++) {
        if (i * i <= numberUser) {
         console.log(i);
        }
    }      
}