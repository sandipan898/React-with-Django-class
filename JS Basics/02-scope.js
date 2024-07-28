// Scope
// Local, Global

// if(a==1) {

// }

// Global scope
let b = 12
{
    // Local scope
    let a = 10;
    var c = 12;
    console.log(a);
} 

console.log(a); // Local Scope: Error
console.log(b); // Global Scope: No Error
console.log(c); // Local Scope: No Error

