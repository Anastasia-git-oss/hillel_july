
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
  button.classList.add('button-buy');
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
    document.forms.singin.dataset.productId = product.id;


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
  const amount = Number(form.amount.value);
  const productId = document.forms.singin.dataset.productId; 
  let productUser = getProduct(Number(productId));

  const comment = form.comment.value.trim();
  
  const result = document.querySelector('.result');
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

  
  let totalPrice = 0;
  if (!productUser) {
    console.log('product is`nt really');
  } else if(productUser){
    totalPrice = productUser.price * amount;
  }

  document.querySelector('.order').classList.add('hidden');
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

  let totalPriceUser = document.createElement('p');
  totalPriceUser.textContent = 'Сума замовлення: ' + totalPrice + '$';

  let commentUser = document.createElement('p');
  commentUser.textContent = 'Коментар: ' + comment;

  result.appendChild(success);
  result.appendChild(fullName);
  result.appendChild(cityUser);
  result.appendChild(postOfficeUser);
  result.appendChild(paymentUser);
  result.appendChild(amountUser);
  result.appendChild(totalPriceUser);
  result.appendChild(commentUser);

  const date = new Date();
  const dateStr = `${date.getDate()}.${date.getMonth()+ 1}.${date.getFullYear()}`;

  
  let orders = JSON.parse(localStorage.getItem('orders')) || [];

  const order = {
    id: Date.now(),
    name: productUser.name,
    price: totalPrice,
    date: dateStr,
  };
  console.log(orders);
  orders.push(order);



  localStorage.setItem('orders', JSON.stringify(orders));






});

function makeOrder(order) {
  const orderBox = document.querySelector('.order-box');

  const wrapperOrders = document.createElement('div');
  wrapperOrders.classList.add('order-item');

  const nameOrder = document.createElement('h2');
  nameOrder.textContent = order.name;

  const priceOrder = document.createElement('h3');
  priceOrder.textContent = 'Сума замовлення: ' + order.price + '$';

  const dateOrder = document.createElement('p');
  dateOrder.textContent = order.date;

  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = 'Видалити замовлення';

  buttonDelete.addEventListener('click', () => {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    const findIndexToRemove = orders.findIndex((Myorder) => Myorder.id === order.id);

    orders.splice(findIndexToRemove, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    wrapperOrders.remove();
  });

  wrapperOrders.appendChild(nameOrder);
  wrapperOrders.appendChild(priceOrder);
  wrapperOrders.appendChild(dateOrder);
  wrapperOrders.appendChild(buttonDelete);

  orderBox.appendChild(wrapperOrders);
};




const getProduct = ((id) =>{
    for (const category of Object.values(categories)) {
        let product = category.products.find((product) => product.id === id);
        if (product) {
            return product;
        }
    }
});




document.querySelector('.my-orders').addEventListener('click', () =>{
  
  const btnOrders = document.querySelector('.my-orders');
  const wrapper = document.querySelector('.wrapper');
  wrapper.classList.add('hidden');
  const form = document.forms.singin;
  form.classList.add('hidden');
  const orderbox = document.querySelector('.order-box');
  const orderDetails = document.querySelector('.order-details');
  orderDetails.classList.add('hidden');

  const buttonF = document.createElement('button');
  orderbox.appendChild(buttonF);
  buttonF.textContent = "Назад";

  buttonF.addEventListener('click' , () => {
    orderbox.innerHTML = '';
    wrapper.classList.remove('hidden');
    btnOrders.classList.remove('hidden');
  });
  
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
  if (orders.length === 0) {
    const noOrders = document.createElement('p');
    noOrders.textContent = 'У вас ще немає замовлень.';
    orderbox.appendChild(noOrders);
    btnOrders.classList.add('hidden');
  } else {
    btnOrders.classList.add('hidden');
    for (const order of orders) {
      makeOrder(order);
      
    }
  };
  




    
   

});

