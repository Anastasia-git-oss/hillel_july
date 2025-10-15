"use strict";

var urls = ['https://swapi.dev/api/people/', 'https://swapi.dev/api/planets/', 'https://swapi.dev/api/vehicles/'];
var lists = document.querySelectorAll('.container-fluid ul');
var titleBtns = document.querySelectorAll('.btn');
var loadMorebtns = document.querySelectorAll('.loadMore');
function showInfo(result, list) {
  result.results.forEach(function (item) {
    var li = document.createElement('li');
    li.textContent = item.name;
    list.appendChild(li);
    li.classList.add('list-group-item', 'rounded', 'shadow-sm', 'li');
  });
}
var url;
function loadInfo(index) {
  url = urls[index];
  var list = lists[index];
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (result) {
    console.log(result);
    showInfo(result, list);
    urls[index] = result.next;
    var loadMoreBtn = loadMorebtns[index];
    if (result.next) {
      loadMoreBtn.classList.remove('hidden');
    } else {
      loadMoreBtn.classList.add('hidden');
    }
  })["catch"](function (error) {
    return console.log('Error: ' + error);
  });
}
titleBtns.forEach(function (btn, i) {
  btn.addEventListener('click', function (event) {
    if (event.target.classList.contains('clicked')) {
      return;
    }
    loadInfo(i);
    btn.classList.add('clicked');
  });
});
loadMorebtns.forEach(function (btn, i) {
  btn.addEventListener('click', function () {
    if (urls[i]) {
      loadInfo(i);
    }
    titleBtns[i].classList.add('clicked');
  });
});