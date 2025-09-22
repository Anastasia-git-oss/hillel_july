
class Student {
    constructor(name, surname, yearOfbirth,  grades = [] ) {
        this.name = name;
        this.surname = surname;
        this.yearOfbirth = yearOfbirth;
        this.grades = grades;
        this.attending = new Array(25);

    }
    getAge () {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.yearOfbirth;
        return age;
    }
    getAverageGrade(){
        if (this.grades.length === 0) {
            return 0;
        }else{
            let sum = 0;
            this.grades.forEach((grade) => sum += grade);
            let averageGrade = sum / this.grades.length;
            return averageGrade;
        }
    }
    present(){
        let index = this.attending.findIndex((elem) => elem === undefined);
        if (index !== -1) {
            this.attending[index] = true;
        }
    }
    absent(){
        let index = this.attending.findIndex((elem) => elem === undefined);
        if (index !== -1) {
            this.attending[index] = false;
        }
    }

    getAverageAttendance(){
        const lessons = this.attending.filter((elem) => elem !== undefined);
        const attendance = lessons.filter((elem) => elem === true);
        const averageAttendance = attendance.length / lessons.length;
        return averageAttendance;
    }
    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();

        if (averageGrade > 90 && averageAttendance > 0.9 ) {
            return 'Молодець!';

        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return 'Добре, але можна краще.';

        }else {
            return 'Редиска!';
        }
    }
}

//Student #1
const student1 = new Student("Іван", "Петренко", 2000, [100, 98, 100, 99, 100, 96, 100]);


student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

console.log(student1.name, student1.getAge(), student1.getAverageGrade(), student1.getAverageAttendance(), student1.summary());

///Student #2
const student2 = new Student("Марія", "Іваненко", 1999, [95, 100, 85, 80, 90, 100, 90]);

student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();

console.log(student2.name, student2.getAge(), student2.getAverageGrade(), student2.getAverageAttendance(), student2.summary());

//Student #3
const student3 = new Student("Олег", "Коваль", 2001, [60, 50, 65, 55, 45, 70, 85,75]);

student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();

console.log(student3.name, student3.getAge(), student3.getAverageGrade(), student3.getAverageAttendance(), student3.summary());


