let div = document.createElement('div');
div.classList.add('button_box');
document.body.appendChild(div);

let button1 = document.createElement('button');
button1.classList.add('button1');
button1.textContent ='Enter link';

let button2 = document.createElement('button');
button2.classList.add('button2');
button2.textContent ='Folow the link';

div.appendChild(button1);
div.appendChild(button2);

let link = "";

document.querySelector('.button_box').addEventListener('click', (event) => {
     if (event.target.classList.contains('button1')) {
         link =  prompt('Enter your link');
     }else if( event.target.classList.contains('button2')){
          if(link){
               window.location.href = link;
          }else{
               alert('Enter the link first!')
          }
     }


})