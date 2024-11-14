var errorMsg = "";

function handleFormSubmit(event) {
    // console.log(event.target);
    event.preventDefault();
    // const form = document.getElementById("loginForm");
    errorMsg = "";

    const data = new FormData(event.target);
    // let isValid = validateForm(data)
    const errorDiv = document.getElementById("errors")
    const successDiv = document.getElementById("success")

    if(!validateForm(data)) {
        errorDiv.innerHTML = errorMsg;
        successDiv.innerHTML = "";
    } else {
        errorDiv.innerHTML = "";
        successDiv.innerHTML = "Form Submitted Successfully"
    }

}

function validateForm(formData) {
    const firstName = formData.get("fname");
    const lastName = formData.get("lname")
    const email = formData.get("email")
    const phone = formData.get("phone")

    let isValid = true;

    if(firstName.length < 2) {
        isValid = false;
        errorMsg += "<br>First name is too short<br>"
    }
    if(lastName.length < 2) {
        isValid = false;
        errorMsg += "<br>Last name is too short<br>"
    }
    if(!email.includes("@") || !email.includes(".")) {
        isValid = false;
        errorMsg += "<br>Invalid email entered<br>"
    }
    if(phone.length > 10) {
        isValid = false;
        errorMsg += "<br>Phone number is too long<br>"
    }

    return isValid
}