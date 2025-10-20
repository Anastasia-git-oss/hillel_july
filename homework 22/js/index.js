
import '../styles.scss';

let urls = [
  'https://swapi.dev/api/people/', 
  'https://swapi.dev/api/planets/',
  'https://swapi.dev/api/vehicles/',
];

const lists = document.querySelectorAll('.container-fluid ul');
const titleBtns = document.querySelectorAll('.btn');
const loadMorebtns = document.querySelectorAll('.loadMore');



function showInfo(result, list) {
  result.results.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    list.appendChild(li);
    li.classList.add('list-group-item','rounded','shadow-sm','li');
  });
}

let url;

function loadInfo(index) {
  url = urls[index]; 
  const list = lists[index];

  


  fetch(url)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      showInfo(result, list);

     
      urls[index] = result.next;

      const loadMoreBtn = loadMorebtns[index];
      if (result.next) {
        loadMoreBtn.classList.remove('hidden');
      } else {
        loadMoreBtn.classList.add('hidden');
      }
    })
    .catch(error => console.log('Error: ' + error));
}



titleBtns.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    if (event.target.classList.contains('clicked')) {
        return;
    }
    loadInfo(i);
    btn.classList.add('clicked')
    
  });
});


loadMorebtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (urls[i]) {
      loadInfo(i);
    }
    titleBtns[i].classList.add('clicked');
  });
});




