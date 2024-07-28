let arr = [1, 2, 3, 4, 5, 3, 4, 6]

// Set
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(3);
mySet.add(4);
mySet.add(5);

console.log(mySet.delete(2)); // Delete by value
console.log(mySet);

// Map : <key: value>
let person = new Map();
person.set("name", "Vedant");
person.set("age", "30");

console.log("Name:", person.get("name"), "Age:", person.get("age"))
console.log(person.size);

// WeakSet
let weakSet = new WeakSet();
weakSet.add({name: "Jhon", profession: "SDE"})
console.log(weakSet);

// WeakMap
let weakMap = new WeakMap();
let phone = {brand: "Apple", price: "2000"}
weakMap.set(phone, "Information")
console.log(weakMap);
