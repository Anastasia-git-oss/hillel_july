let contactBook = {
    contacts: [
      { name: "Олена Петрова", phone: "+380501112233", email: "olena.petrova@gmail.com" },
      { name: "Ігор Савченко", phone: "+380671234567", email: "ihor.savchenko@gmail.com" },
      { name: "Марія Коваль",  phone: "+380931112244", email: "maria.koval@gmail.com" }
    ],
    findNameContact: function contactName(name ) { 
        return this.contacts.find((contact) => {
            return contact.name === name;
        });
        
    },
    addContact: function(name, phone, email) {
        this.contacts.push({
            name: name, 
            phone: phone, 
            email: email
        });
    }
};
  
console.log(contactBook.findNameContact("Марія Коваль"));

contactBook.addContact("Андрій Лисенко","+380931617293","andriy.lysenko@gmail.com");

console.log(contactBook.contacts);