function askNumber() {
    for (let i = 0; i < 10; i++) {
        let valueUser = prompt(`Enter number bigger than 100:`);
      
        if (valueUser > 100 || isNaN(valueUser) || i === 9 ) {
            alert(`Last entered number: ${valueUser}`);
            break;
        }else if (valueUser <= 100){
            alert(`Enter the correct number`)
        }
    }
   
    

}
askNumber();


































