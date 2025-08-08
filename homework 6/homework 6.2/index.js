let arr2 =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let positiveNumbers = [];
let negativeNumbers = [];
let countEven = 0;
let sumEvenPositiveNumbers = 0;
let sumOddNegativeNumbers = 0;
let productPositiveNumbers = 1;
let countOdd = 0;
let sum = 0;
let min = Math.min(...arr2);
let max = Math.max(...arr2);

for (let index = 0; index < arr2.length; index++) {
    if (arr2[index] < 0) {
        negativeNumbers.push(arr2[index]);
    }else{
        positiveNumbers.push(arr2[index]);
        sum += arr2[index];
        productPositiveNumbers *= arr2[index];
        if (arr2[index] % 2 === 0) {
            countEven++;
            sumEvenPositiveNumbers += arr2[index];
        }else{
            countOdd++;
            sumOddNegativeNumbers += arr2[index];
        }
    }
    if (arr2[index] !== max) {
        arr2[index] = 0;

    }
}

console.log(`Масив додатних чисел: ${positiveNumbers}`);
console.log(`Масив від’ємних чисел: ${negativeNumbers}`);
console.log(`Сума додатних чисел: ${sum}`);
console.log(`кількість додатних елементів масива:`+ positiveNumbers.length);
console.log(`min - ${min}`);
console.log(`max - ${max}`);
console.log(`кількість від’ємних елементів масива :` + negativeNumbers.length);
console.log(`кількість парних додатних  елементів:${countEven}`);
console.log(`кількість непарних додатних  елементів:${countOdd}`);
console.log(`Сума додатних парних чисел: ${sumEvenPositiveNumbers}`);
console.log(`Сума додатних непарних чисел: ${sumOddNegativeNumbers}`);
console.log(`Добуток додатних чисел: ${productPositiveNumbers}`);
console.log(`Змінені значення масиву на 0,окрім найбільшого: ${arr2}`);