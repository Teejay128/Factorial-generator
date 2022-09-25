let button = document.querySelector('button');

button.addEventListener('click', generateFactorial);

function generateFactorial(e){
    e.preventDefault();
    let numberInput = document.querySelector('#form-input');
    let number = numberInput.value;
    number = parseInt(number);

    if(number < 0){
        console.log('less than 0')
    } else if(number == 0){
        console.log('is 0')
    } else if(number > 100){
        console.log(`${number} is greater than 100`)
    } else if(number > 0){
        let factArr = [];
        let factorial = 1;
        for(let i = 1; i <= number; i++){
            factArr.unshift(i);
            factorial *= i;
        };
        let text = "1";
        for(let i = 2; i <= factArr.length; i++){
            text += ` * ${i}`
        };

        let tableBody = document.querySelector('tbody');

        tableBody.innerHTML += `
        <tr class="table-primary">
            <td>${number}</td>
            <td>${text}</td>
            <td>${factorial}</td>
        </tr>
        `
    } else {
        console.log('is invalid')
    }

}

