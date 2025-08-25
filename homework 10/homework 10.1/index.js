let users = {
    name: "Den",
    surname: "Venice",
    age: 24,
    city: "London",
    hobby: "football",
    showInfo: function userInfo() {
        console.log("Name user:" + this.name);
        console.log("Surname user:" + this.surname);
        console.log("Age user:" + this.age);
        console.log("City user:" + this.city);
        console.log("Hobbies user:" + this.hobby);
    }
}
users.showinfo();