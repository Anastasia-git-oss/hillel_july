let birthYear = prompt(`What is your year of birth?`);
let city = prompt(`What city are you from?`);
let sport = prompt(`What is your favorite sport?`);

let ageMessage = ``;

if (birthYear !== null){
   let ageUser = 2025 - parseInt(birthYear);
    ageMessage = `Your age is: ${ageUser}.`;
}else if (birthYear === null) {
    ageMessage = `It's a pity that you didn't want to enter your date of birth.`
}

let cityMessage = ``;

if(city === `Kyiv`|| city === `London`|| city === `Washington` ){
    cityMessage =`You live in the capital.`;
} else if (city === null){
   cityMessage = `It's a pity that you didn't want to enter your city.`;
}else{
    cityMessage =`You live in city ${city}.`;
}

let champion = ``;

if (sport === `boxing` ) {
   champion = `Oleksandr Usik`;
}else if(sport === `football`){
    champion = `Lionel Messi`;
}else if(sport === `fencing`){
    champion = `Koki Kano`;
}
let sportMessage = ``;

if(sport === null){
    sportMessage = `It's a pity that you didn't want to enter your favorite sport.`;
}else if (champion !== null){
    sportMessage = `Cool! Do you want to be like ${champion} ?`;
} else{
    sportMessage = `Your favorite sport: ${sport}.`;
}

let User = alert(ageMessage + ` `+ cityMessage+ ` ` + sportMessage);
