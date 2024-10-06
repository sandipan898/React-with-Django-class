// 1. Callback
// 2. Promises
// 3. Async Await


// ---------------------------------------------------- 1. Callback ----------------------------------------------------
// define product array
// fill product array - API Call
// process product array
// show products
// send notification

// Pass the next functions of the Time taking function, as an argument of the Time taking function

// let products = [];

// Time taking function
// function fetchProduct(process, show, notify) {
//     console.log("Fetching Products...");

//     // Replicate API call delay scenario
//     setTimeout(function() {
//         // API Call
//         products = ["Pen", "Bag", "Laptop"];
//         console.log("Products Fetched...");

//         // Process response
//         process(show, notify);

//         // show();
//         // notify();

//     }, 2000);
// }

// // Time taking function
// function processProduct(show, notify) {
//     console.log("Processing function...");
    
//     setTimeout(function() {
//         show();
//         notify();
//     }, 1000);
// }

// function showProduct() {
//     console.log("Your Products here...");
//     console.log(3);
// }

// function sendNotification() {
//     console.log("Hello, your product is here!");
// }

// fetchProduct()
// processProduct()
// showProduct();
// sendNotification();

// fetchProduct(processProduct, showProduct, sendNotification); // Call back

// Disadvantages:
// 1. 
// callApi -> Inbuilt function, doesn't take any function as argument
// response = callApi(url, showProduct) // Not allowed
// showProduct();
// 2.
// Call back hell
// Exmpale of processProduct() function



// ---------------------------------------------- 2. Promises ----------------------------------------------------
// returning Promise
// Promise -> API Call; resolve(); reject();
// .then().catch()

// return Promise of -> success response OR error response

// function fetchProduct() {
//     console.log("Fetching Products...");

//     return new Promise(function(resolve, reject) {
//         // API call
//         setTimeout(function cont() {
//             const products = [];
//             console.log("Products Fetched...");

//             // resolve(products); // We can always consider success repsonse also and only call the resolve() function

//             if(products.length > 0) {
//                 resolve(products); // Success repsonse
//             } else {
//                 reject("Failed response"); // Error repsonse
//             }
//         }, 2000);
//     });
// }

// function showProduct(products) {
//     console.log("Your Products here...");
//     console.log("Products:", products);   
// }

// function sendNotification() {
//     console.log("Hello, your product is here!");
// }

// const promiseBack = fetchProduct(); // Returning the promise

// API Processing
// promiseBack
//     .then(function(data) {
//         // connected with resolve
//         showProduct(data);
//         sendNotification();
//     })
//     .catch(function(msg) {
//         // connected with reject
//         console.log(msg);
//     })
//     .finally(function() {
//         console.log("Page rendered");
//     });


// ---------------------------------------------------- 3. Async Await ----------------------------------------------------

// async function run() {
//     try {
//         const promiseBack = await fetchProduct(); // Returning the promise
//         showProduct(promiseBack); // We don't have to extract the info using .then() or .catch() as the Promise here is completed
//         sendNotification();
//     } catch(err) {
//         console.log(err);
//     }
// }

// run();
