const box = document.createElement('div');
document.body.appendChild(box);
const title = document.createElement('h1');
document.body.appendChild(title);
title.textContent = 'Push the button ';
const button = document.createElement('button');
button.classList.add('button');
box.appendChild(button);
button.textContent = 'button';

document.querySelector('button').addEventListener('click', function() {
   if (title.classList.contains('title')) {
        title.classList.remove('title')
   } else {
        title.classList.add('title')
   }


})