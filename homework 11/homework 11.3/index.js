const sum = 9;

const randomNum = Math.floor(Math.random() * sum ) + 1;
const randomImg = 'images/'+ randomNum + '.jpg';

let img = document.createElement('img');
document.body.appendChild(img);
img.setAttribute('src', randomImg);

