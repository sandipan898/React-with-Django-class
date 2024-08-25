function handleFormSubmit(event) {    
    event.preventDefault();

    const registrationForm = document.getElementById('registration-form');

    const formData = new FormData(registrationForm);

    // Method 1:
    // console.log(formData.get("first-name"));
    // console.log(formData.get("last-name"));
    // console.log(formData.get("email"));
    // console.log(formData.get("phone"));
    
    // Method 2:
    // formData.forEach(
    //     function fnName(value, key) {
    //         console.log(key, " : ", value);
    //     }
    // );

    validateForm(formData);
}

function validateForm(formData) {
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    let errorMsg = "";

    if(firstName.length <= 2) {
        errorMsg += "Too short length for First Name<br/>";
    }

    if(lastName.length <= 2) {
        errorMsg += "Too short length for Last Name<br/>";
    }

    if(email.length <= 0) {
        errorMsg += "Please enter the Email ID<br/>";
    }

    if(phone.length != 10) {
        errorMsg += "Please enter a valid Phone number<br/>";
    }

    // alert(errorMsg);

    const errorMsgDiv = document.getElementById('error-msg');
    const successMsgDiv = document.getElementById('success-msg');
    
    if(errorMsg == "") {
        successMsgDiv.innerHTML = "Form submitted successfully!";
        errorMsgDiv.innerHTML = "";
    } else {
        errorMsgDiv.innerHTML = errorMsg;
        successMsgDiv.innerHTML = "";
    }
}