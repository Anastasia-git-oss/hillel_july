let length = parseInt(prompt(`Enter the length of the array:`));
let arr = [];
for (let index = 0; index < length; index++) {
    let value = prompt(`Enter array values: ${index + 1}` );
    arr.push(value);
    
}
document.write("<p>" + arr + "</p>");

arr.sort();

document.write("<p>" + arr + "</p>");

arr.splice(1,3);

document.write("<p>" + arr + "</p>");