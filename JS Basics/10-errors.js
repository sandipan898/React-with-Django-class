// Types of Errors
// 1. Syntax Error
// 2. Runtime Error
// 3. Logical Error

// console.log("Name;
let n1 = 10;
let n2 = 5;

function div(num1, num2) {
    if (num2 === 0){
        throw new Error("Num2 Cannot be 0"); // Custom error
    }
    return num1 / num2;
}

try {
    let result = div(n1, n2);
    console.log(result);
} catch (error) {
    console.log("Error happened!");
} finally {
    console.log("Finally here!");
}

// Create Your custom error when a undefined index is accessed
// let arr = [1, 2, 3]
// console.log(arr[3]);
