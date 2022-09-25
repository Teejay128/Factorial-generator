let button = document.querySelector('button');
let input = document.querySelector('.input-group')
let danger = document.querySelector('.has-danger');
let dangerText = document.querySelector('.invalid-feedback');

document.addEventListener('DOMContentLoaded', () => {danger.style.display = 'none'})
button.addEventListener('click', generateFactorial);
danger.addEventListener('click', revert);

function generateFactorial(e){
    e.preventDefault();
    let numberInput = document.querySelector('#form-input');
    let number = numberInput.value;
    number = parseInt(number);

    if(number < 0){
        invalidInput(`${number} is negative, and i don't do negativity`)
    } else if(number == 0){
        invalidInput(`The factorial of 0 is 1`)
    } else if(number > 100){
        invalidInput(`${number} is greater than 100, and 100 is my limit`)
    } else if(number > 0){
        let factArr = [];
        let factorial = 1;
        for(let i = 1; i <= number; i++){
            factArr.unshift(i);
            factorial *= i;
        };
        let text;
        if(number > 10){
        text = "1 * 2 * 3 * ...";

            for(let i = number-3; i <= factArr.length; i++){
                text += ` * ${i}`
            };
            // console.log(text);
        } else {
        text = "1";

            for(let i = 2; i <= factArr.length; i++){
                text += ` * ${i}`
            };
            // console.log(text);
        }
        let tableBody = document.querySelector('tbody');

        tableBody.innerHTML += `
        <tr class="table-primary">
            <td>${number}</td>
            <td>${text}</td>
            <td>${factorial}</td>
        </tr>
        `
        numberInput.value = ""
    } else {
        invalidInput(`The inputed number is not a valid number`);
    }

}

function invalidInput(errorMessage){
    input.style.display = "none"
    danger.style.display = "block"
    dangerText.textContent = errorMessage
}

function revert() {
    input.style.display = "flex"
    danger.style.display = "none"
}