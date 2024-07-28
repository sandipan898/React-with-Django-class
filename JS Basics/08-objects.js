// Set of properties  and behaviour
// Features -> Properties in programming
// Behaviour -> function / methods

let person = {
    name: "Vedant",
    age: 30,
    walk: function() {
        console.log("Walking...");
    },
    display: function() {
        // console.log("Name: ", this.name, "| Age:", this.age);
        console.log(`Name: ${this.name} | Age: ${this.age}`);

    }
}

console.log("Name: ", person.name);
console.log("Age: ", person.age);
person.walk()
person.display()


let phone = {
    brand: "Samsung",
    model: "S24",
    price: "$1000",
    apps: ["Google Drive", "Gmail", "Contact", "Calender", "Play Store"]
}

console.log(phone);
console.log("Number of apps:", phone.apps.length);
