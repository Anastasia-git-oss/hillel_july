//Homework 5.4

let userNum = parseInt(prompt(`Enter an integer:`));
if (isNaN(userNum)) {
    alert(`Isn't a number.`)
}else if(!Number.isInteger(userNum)){
   alert(`Isn't an integer.`)
}else if(userNum <= 1){
       alert(`Number less or equal to 1.`)
}else{
   for (let index = 2; index < userNum; index++) {
      if (userNum % index === 0) {
         alert("Це складне число")
         break;
      }else{
         alert("Це просте число")
            
      }
                
   }
}

//From teacher
//1.
console.log(`Task # 1`)
let result = "";
for (let index = 10; index <= 20; index++) {
        if (index < 19) {
            result += index + ", ";
        }else{
            result += index;
        }
 }
console.log(result);

//2.
console.log(`Task # 2`);
let squaresOfNumbers = "";
for (let index = 10; index < 20; index++) {
    if (index < 19) {
        squaresOfNumbers += (index * index) + ", " ;
    }else{
        squaresOfNumbers += index * index;
    }
   
} 
console.log(squaresOfNumbers);

//3.
console.log(`Task # 3`);
for (let index = 1; index <= 10; index++) {
    let resultOfMultipl = index * 7;
    console.log ( `${index} * 7 = ${resultOfMultipl}`);
}

//4.
console.log(`Task # 4`);
let sumOfNumbers = 0;

for (let index = 1; index <= 15 ; index++) {
    sumOfNumbers = sumOfNumbers + index ;
   
}
console.log(sumOfNumbers);


//5. 
console.log(`Task # 5`);
let multiplOfNumbers = 1;

for (let index = 15; index <= 35 ; index++) {
    multiplOfNumbers = multiplOfNumbers * index ;
   
}
console.log(multiplOfNumbers);

//6.
console.log(`Task # 6`);
let multiple = 0;
for (let index = 1; index <= 500; index++) {
    multiple = multiple + index;
   
}
let quantity = 500;
let arithmeticMean = multiple / quantity;
console.log(`Arithmetic mean: ${Math.floor(arithmeticMean)}`);

//7.
console.log(`Task # 7`);
let sum = 0;
for (let index = 30; index <= 80; index++) {
    if (index % 2 === 0) {
        sum += index;

    }
    
}
console.log(`Sum of even numbers: ${sum}`);

//8.
console.log(`Task # 8`);
for (let index = 100; index <= 200; index++) {
    if (index % 3 === 0) {
        console.log(index);

    }
    
}
//9.
console.log(`Task # 9`);
let userValue = parseInt(prompt(`Enter number > 0:`));
if ( userValue <= 0){
        alert(`This number is less or equal to zero.`) 
}
let count = 0;
let sumEven = 0;
console.log(`All divisors of number: ${userValue}`)
for (let index = 1; index < userValue ; index++) {
     if (userValue % index === 0) {
        console.log(index + " ");
     }
     if (index % 2 === 0) {
        count = count + 1;
        sumEven += index;
     }   
}
console.log(`Number of even divisors : ${count}`);
console.log(`Sum of even divisors:${sumEven}`);





//10.
console.log(`Task # 10`);
for (let index = 1; index <= 10; index++) {
        for (let x = 1; x <= 10; x++) {
        let resultOfMultipl = index * x;
        console.log ( `${index} * ${x} = ${resultOfMultipl};`);
        }
}
        
