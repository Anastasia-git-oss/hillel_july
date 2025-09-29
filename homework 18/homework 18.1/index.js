
const container = document.querySelector('.container');
const imagesBox = document.createElement('div');
imagesBox.classList.add('images-box');
container.appendChild(imagesBox);

const allImages = [ 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];




const images = allImages.map((src, i) =>{
    const img = document.createElement('img');
    img.classList.add('images');
    img.src = src;

    if (i !== 0) {
        img.classList.add('hidden');
    }

    imagesBox.appendChild(img);
    return img;
})
console.log(images);



let numImage = 0;
let interval = setInterval(nextImg, 3000);

function showImage(index) {
    images[numImage].classList.add('hidden');
    images[index].classList.remove('hidden');
    numImage = index;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, i) =>{
        if (i === index) {
            btn.classList.add('current');
        }else{
            btn.classList.remove('current');
        }
    })
    
}

function nextImg (){
    let index = numImage + 1;
    
    if (index >= images.length ) {
        index = 0;
    }
    showImage(index);
}

document.querySelector('.container').addEventListener('click', (event) =>{
    if (event.target.tagName === 'BUTTON') {
        clearInterval(interval);
    } else if (event.target.closest('.button-right')) {
        let index = numImage + 1;
           if (index >= images.length ) {
            index = 0;
        }
        showImage(index);
    }else if (event.target.closest('.button-left')) {
        let index = numImage - 1;
        if (index < 0) {
            index = images.length - 1;
        }
        showImage(index);
    }
});

const buttonBox = document.createElement('div');
buttonBox.classList.add('button-breadcrumbs');
imagesBox.appendChild(buttonBox);

images.forEach((img , i) =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
   
    btn.addEventListener('click', () =>{
        showImage(i);
    })
 
    buttonBox.appendChild(btn);

    if (i === 0) {
        btn.classList.add('current');
    }
});