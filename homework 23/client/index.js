
const form = document.querySelector('.task-form');
const taskLists = {
    todo: document.querySelector('.task-box.status-todo ul'),
    inprogress: document.querySelector('.task-box.status-inprogress ul'),
    done: document.querySelector('.task-box.status-done ul')
};



const addTaskbtn = form.addTaskBtn;
const mainURL = 'http://localhost:3000';


addTaskbtn.addEventListener('click', async () => {
    const taskTitle = form.taskTitle.value.trim();
    const taskDesc = form.taskDesc.value.trim();
    const statusType = form.status.value;
    
    

    const li = document.createElement('li');
    const id = li.dataset.id;
    
    taskLists[statusType].appendChild(li);
    const task = document.createElement('div');
    task.classList.add('task-item');
    li.appendChild(task);

    const titleElem = document.createElement('h2');
    titleElem.textContent = taskTitle;
    const descElem = document.createElement('p');
    descElem.textContent = taskDesc;
    descElem.classList.add('hidden');
    task.appendChild(titleElem);
    task.appendChild(descElem);

    const newTask = {
        title: taskTitle,
        description: taskDesc,
        status: statusType,
    };

    try {
        const response = await fetch(`${mainURL}/tasks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
        });
        const data = await response.json();
    } catch (error) {
        console.log('Помилка створення задачі:', error);
    }
  


    const descElemBtn = document.createElement('button');
    descElemBtn.textContent = 'Опис';
    descElemBtn.classList.add('desc-btn');
    task.appendChild(descElemBtn);

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Оновити';
    updateBtn.classList.add('update-btn');
    task.appendChild(updateBtn);
    
    descElemBtn.addEventListener('click', () => {
        descElem.classList.toggle('hidden');

        const modalBox = document.createElement('div');
        modalBox.classList.add('modal-box');
        
        


    });

    updateBtn.addEventListener('click', () => {
        

        const modalInput = document.createElement('textarea');
        modalInput.textContent = taskDesc;
        task.appendChild(modalInput);

        descElem.classList.add('hidden');
        descElemBtn.classList.add('hidden');
        updateBtn.classList.add('hidden');
        deleteBtn.classList.add('hidden');

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Зберегти';
        saveBtn.classList.add('save-btn');
        task.appendChild(saveBtn);



        saveBtn.addEventListener('click', async () => {
            const newDesc = modalInput.value.trim();
            descElem.textContent = newDesc;
            modalInput.classList.add('hidden');
            saveBtn.classList.add('hidden');
          
            const updatedTask = {
                description: newDesc,
            };
            
            try {
                const response = await fetch(`${mainURL}/tasks/${id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(updatedTask)
                });
                const data = await response.json();
                
            } catch (error) {
                console.log('Помилка оновлення задачі:', error);
            }

            descElem.classList.remove('hidden');
            descElemBtn.classList.remove('hidden');
            updateBtn.classList.remove('hidden');
            deleteBtn.classList.remove('hidden');
        });

    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('delete-btn');
    task.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', async () => {
       try {
            const response = await fetch(`${mainURL}/tasks/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                li.remove();
            } else {
                li.innerHTML = '<p>Помилка видалення задачі</p>';
            }
        } catch (error) {
            console.log('Помилка видалення задачі:', error);
        }
    });


});