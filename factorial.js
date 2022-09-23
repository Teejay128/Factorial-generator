// program to find the factorial of a number
//modifying the program so it can  work in my 
const button = document.querySelector("#button")
// take input from the user
const number = parseInt(prompt('Choose a number'));

function fact() {
    // checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
    return `Facttorial of ${number} is 1`
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
    return `Factorial of ${number} is ${fact}.`
}
}
button.addEventListener("click", fact);