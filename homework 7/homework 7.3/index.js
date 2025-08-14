function askNumber() {
    for (let i = 0; i < 10; i++) {
        let valueUser = parseInt(prompt(`Enter number bigger than 100:`));
      
        if (valueUser > 100 ) {
            alert(`Last entered number: ${valueUser}`);
            return;
        }
        if (isNaN(valueUser)) {
            alert(`You canceled the entry`);
            return;
        }
    }
   
    

}
askNumber();