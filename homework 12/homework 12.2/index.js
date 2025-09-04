let box = document.querySelector('.box');

box.addEventListener('click' , event => {
     if (event.target && event.target.tagName === 'BUTTON') {
            alert(event.target.textContent + ' '+'clicked');
     }
})