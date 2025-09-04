
document.querySelector('.button_add').addEventListener('click',() => {
    const inputTask = document.querySelector('input');
    const value = inputTask.value.trim();
    if (!value) {
         return;
    }

    const list = document.querySelector('ul');
    const task = document.createElement('li');
    list.appendChild(task);
    task.textContent = value;

    inputTask.value = '';

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Delete';
    task.appendChild(deleteTask);

    list.addEventListener('click', event =>{
         if (event.target.tagName === 'BUTTON') {
              event.target.parentNode.remove();
              
         }
    });
  
});