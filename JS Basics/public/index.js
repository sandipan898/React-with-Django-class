console.log("Hello");

// DOM: Document Object Model
// document -> Document Object

// Accessing Element:
// 1. By Id
// 2. By Class name
// 3. By Tag name

// 3. By Tag name
const input = document.getElementsByTagName('input');
console.log(input)

function handleIncrement() {
    // 1. By Id
    const counterInput = document.getElementById('counter-input');
    counterInput.value = parseInt(counterInput.value) + 1;
    console.log(counterInput.value);

    // 2. By Class Name
    const buttons = document.getElementsByClassName('green-btn');
    
    if(parseInt(counterInput.value) >= 5) {
        buttons[1].classList.add('disabled-btn');
        buttons[1].disabled = true;
    }

    // Releasing the - button
    buttons[0].classList.remove('disabled-btn');
    buttons[0].disabled = false
}

function handleDecrement() {
    const buttons = document.getElementsByClassName('green-btn');
    const counterInput = document.getElementById('counter-input');

    if(parseInt(counterInput.value) <= 0) {
        buttons[0].classList.add('disabled-btn');
        buttons[0].disabled = true;
    } else {
        counterInput.value = parseInt(counterInput.value) - 1;
    }
    // Releasing the + button
    buttons[1].classList.remove('disabled-btn');
    buttons[1].disabled = false
}
