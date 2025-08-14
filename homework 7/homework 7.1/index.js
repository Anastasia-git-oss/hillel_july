function sumFunc (value1) {
    
    return function (value2) {
       return value1 += value2 ;
    }
}

const result = sumFunc(0);
console.log(result(4));
console.log(result(6));
console.log(result(10));
console.log(result(7));