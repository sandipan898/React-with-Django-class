function something(arg1="", arg2) {

}

// Default argument
function add(num1, num2=4) {
    console.log(num1, num2);
    console.log(num1 + num2);
}

// add(3)
// add(2, 3)

function googelInit(public_key, secret_key) {
    console.log("Hello from outer");

    function authenticate() {
        console.log("Hello from inner");
    }
    return authenticate
}

let result = googelInit();
result()

// Alternative declaration
const sub = function(num1, num2) {
    return num1 - num2
}

// sub = 12

console.log(sub(12, 5));
