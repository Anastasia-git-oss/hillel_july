
class House{
    appartments = new Map();

    addAppartment(Appartment) {
        if (Appartment && Appartment.number) {
            this.appartments.set(Appartment.number, Appartment);
            console.log(`Квартира № ${Appartment.number} додана у будинок.`)
        }else{
            console.log(`Такої квартири не існує.`);
        }
        
    }
    showHouse(){
        if (this.appartments.size === 0) {
            console.log(`Ще не побудували квартири.`)
        }else{
            this.appartments.forEach((appartment) => {
                console.log(`Квартира № ${appartment.number} ,кімнат: ${appartment.roomsAmount}.`);
                if (appartment.residents.size === 0) {
                    console.log(`Тут ніхто не живе.`)
                }else{
                    appartment.residents.forEach((resident)=> console.log(`Мешканець: ${resident.fullname}, ${resident.age} років`));
                }
            });
        }
    }


}

class Appartment {
    residents = new Set();

    constructor(number, roomsAmount, people = []){
        if (!number) {
            console.log(`Номер квартири відсутній.`);
            return;
        }
        this.number = number;
        if (!roomsAmount) {
            console.log(`Кількість кімнат відсутня.`);
            return
        }
        this.roomsAmount = roomsAmount;
        people.forEach(resident => this.addResident(resident));

    }
    addResident(resident){
        if (!resident || !resident.fullname) {
            console.log(`Не можна додати без імені.`)
        }
        this.residents.add(resident);
        console.log(`Мешканець ${resident.fullname} доданий у квартиру:  ${this.number}.`);

    }
    showAppartment(){
        if (this.residents.size === 0) {
            console.log(`Всі квартири пусті.`)
        }else{
            this.residents.forEach((resident)=> {
                console.log(`У квартирі ${this.number} , на ${this.roomsAmount} кімнат, живе: ${resident.fullname} `);
            } )
        }
    }
   
}

class Human{
    constructor(fullname, age, people){
        this.fullname = fullname;
        if (!fullname) {
            console.log(`Додайте ім'я !`);
            return;
        }
        this.age = age;
        if (!age) {
            console.log(`Вік відсутній`);
        }

    }
}

const people1 = [
    new Human('Іван Петренко', 34),
    new Human('Ганна Петренко', 30),
    new Human('Олексій Петренко', 5),

];
const people2 = [
    new Human('Микола Кропива', 40),
    new Human('Олена Кропива', 41),
    new Human('Людмила Кропива', 75),
    new Human('Соломія Кропива', 13),
];
const people3 = [
    new Human('Владислав Рудь', 28),
    new Human('Христина Мироненко', 25),
];
const people4 =[
    new Human('Костянтин Дубовицький', 35),
    new Human('Ярослав Небожа', 35),
    new Human('Вікторія Дубовицька', 33),
    new Human('Давид Дубовицький', 9),
    new Human('Валерія Дубовицька', 2),
];

const appartments = [
    new Appartment(101, 3, people1),
    new Appartment(102, 4, people2),
    new Appartment(103, 2, people3),
    new Appartment(104, 5, people4),
    new Appartment(105, 6),
];

const bigHouse = new House();

appartments.forEach(app => bigHouse.addAppartment(app));

const newAppartment = new Appartment(106, 3);
bigHouse.addAppartment(newAppartment);

bigHouse.appartments.get(105).addResident( new Human('Jack Dill', 47));

bigHouse.appartments.get(102).showAppartment();

bigHouse.showHouse();