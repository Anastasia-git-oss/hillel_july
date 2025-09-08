
const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }


  const categoriesList = document.createElement('ul');
  categoriesList.classList.add('categories-list');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      // const category = getCategoryById(categoryId);
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      // console.log(category);
      showProductsByCategory(category);

    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);

    // element.addEventListener('click', () => {
    //   console.log(category);
    // });

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
}

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = category => {
  // const { products } = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) {
    return;
  }
  parent.innerHTML = '';

  const info = document.querySelector('.info');

  if (info) {
    info.innerHTML = '';
  }
  

  const productsList = document.createElement('ul');
  productsList.classList.add('products-list');

  productsList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      console.log(event.target);
      // const categoryId = category.id
      const categoryId = event.target.getAttribute('data-category');
      const productId = event.target.getAttribute('data-product');
      const product = products.find(product => product.id == productId);
      if (!productId) {
        return;
      }
      
      showProductInfo(product);
     


    }
  });


  products.forEach(product => {
    const element = document.createElement('li');
    element.textContent = `${product.name} - $${product.price}`;
    element.setAttribute('data-product', product.id);
    element.setAttribute('data-category', category.id);
    // element.addEventListener('click', () => {
    //   console.log(product);
    // })
    productsList.appendChild(element);
  });

  parent.appendChild(productsList);

  
}

const showProductInfo = (product) =>{
  const info = document.querySelector('.info');
  const orderDetails = document.querySelector('.order-details');
  if (!info) {
    return;
  }

  info.innerHTML = '';

  if (orderDetails) {
    orderDetails.innerHTML = '';
  }

  const productName = document.createElement('h3');
  productName.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = 'Ціна: '+ product.price + '$';

  const productDescr = document.createElement('p');
  productDescr.textContent = product.description;

  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Купити';

  button.setAttribute('product-name', product.name);
  button.setAttribute('product-price', product.price);


  info.appendChild(productName);
  info.appendChild(price);
  info.appendChild(productDescr);
  info.appendChild(button);


  button.addEventListener('click', () => {

    orderDetails.innerHTML = '';

    const userMessage = document.createElement('p');
    userMessage.textContent = 'Вітаю! Ви успішно придбали ' + product.name +' за ' + product.price + '$';

    document.forms.singin.classList.remove('hidden');


    orderDetails.appendChild(userMessage);
  })


  
}



showCategories();



const cities = {
  KV: "Kyiv",
  OD: "Odesa",
  LV: "Lviv",
  DP: "Dnipro",
};

const pay = {
  opm: "Накладений платіж",
  card: "Оплата на рахунок",
}

const postOffices = {
  1: 'Відділення №1',
  2: 'Відділення №2',
  3: 'Відділення №3',
}


document.querySelector('.button-save').addEventListener('click',() =>{
  const form = document.forms.singin;

  const userName = form.userName.value.trim();
  const city = form.city.value;
  const postOffice = form.postOffice.value;
  const payment = form.pay.value;
  const amount = form.amount.value;
  const comment = form.comment.value.trim();
  
  let result = document.querySelector('.result');
  result.innerHTML = '';


  if (!userName) {
    alert('Вкажіть ПІБ');
    return;
  } else if (userName.length < 5) {
    alert('Вкажіть більше 5 букв');
    return;
  }
  if (!city) {
    alert('Вкажіть місто');
    return;
    
  }
  if (!postOffice) {
    alert('Вкажіть відділення Нової Пошти');
    return;
  }
  if (!payment) {
    alert('Вкажіть спосіб оплати');
    return;
  }
  if (!amount || amount <= 0 && amount > 10 ) {
    alert('Виберіть кількість товарів від 1 до 10');
    return;
  }

  form.querySelector('.order').classList.add('hidden');
  result.classList.remove('hidden');

  let success = document.createElement('h2');
  success.textContent  = 'Замовлення оформлено!'

  let fullName = document.createElement('p');
  fullName.textContent = 'П.І.Б.: '+ userName;

  let cityUser = document.createElement('p');
  cityUser.textContent ='Місто: '+ cities[city];

  let postOfficeUser = document.createElement('p');
  postOfficeUser.textContent = 'Відділення Нової Пошти: ' + postOffices[postOffice];

  let paymentUser = document.createElement('p');
  paymentUser.textContent = 'Спосіб оплати: '+ pay[payment];

  let amountUser = document.createElement('p');
  amountUser.textContent = 'Кількість товарів: ' + amount;

  let commentUser = document.createElement('p');
  commentUser.textContent = 'Коментар: ' + comment;

  result.appendChild(success);
  result.appendChild(fullName);
  result.appendChild(cityUser);
  result.appendChild(postOfficeUser);
  result.appendChild(paymentUser);
  result.appendChild(amountUser);
  result.appendChild(commentUser);

})





