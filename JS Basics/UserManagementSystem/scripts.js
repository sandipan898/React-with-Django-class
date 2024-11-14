const URL = "http://localhost:3000/user"

const handleFormSubmit = (event) => {
    event.preventDefault();

    // Step 1: Extract Data from the From
    const userData = new FormData(event.target); 

    let userObj = {} // Empty Object

    // Step 2: Fetch and Convert the Form Object into a plain JS Object
    userData.forEach(
        function fnName(value, key) { // Extracting data from the "userData"
            userObj[key] = value // Putting the date to the "userObj"
        }
    );
    
    userObj["id"] = userObj["email"];

    // Step 3: Converting the object into JSON
    let userJson = JSON.stringify(userObj);

    createUserIfNotExists(userObj);

    // if(!existingUser) {
    //     createUser(userJson);
    // } else {
    //     console.log("User already exists!");
    // }
}

function createUserIfNotExists(userObj) {
    const userUrl = URL + "/" + userObj.email;
    fetch(userUrl, {
        method: "GET"
    })
    .then((response) => response.json())
    .then(data => {
        if(data) {
            alert("User already exists!");
        } else {
            createUser(userObj);
        }
    })
    .catch((error) => {
        console.log("Error Occurred:" + error);
        createUser(userObj);
    })
}

function createUser(userObj) {
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => {
        alert("User Registered Successfully!");
    })
    .catch((error) => {
        console.log("Error Occurred:" + error);
    })
}
