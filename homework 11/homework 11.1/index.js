const size = 10;

const table =  document.createElement('table');
table.classList.add('table');
const body = document.body.appendChild(table);

for (let i = 0; i <= size; i++) {
    const element = document.createElement('tr');
    
    for (let j = 0; j <= size; j++) {
        
        let section;
        if (i === 0 || j === 0) {
            section = document.createElement('th');
            section.classList.add('th');
        } else {
            section = document.createElement('td');
            section.classList.add('td');
        }
        if (i === 0 && j === 0) {
            section.textContent = 0;
        } else if (i === 0) {
            section.textContent = j;
        } else if( j === 0){
            section.textContent = i;
        }else{
           section.textContent = j * i ;
        }

        element.appendChild(section);

    }
    table.appendChild(element);
}