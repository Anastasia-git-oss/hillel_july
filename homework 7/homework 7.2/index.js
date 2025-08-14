function productOfNumbers(a) {
    return function(b){
        return a * b;
    }
}
const result = productOfNumbers(5)(2);
console.log(result);