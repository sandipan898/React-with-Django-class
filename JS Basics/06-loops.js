for(let i = 0; i<6; i++) {
    console.log("Count: " + i);
}

var secret_pass = "MyPass"
var user_pass = "ThisPass"

while(user_pass != secret_pass) {
    console.log("Enter the correct passwods: ");
}

do {
    console.log("Enter the correct passwods: ");
} while(user_pass != secret_pass);

