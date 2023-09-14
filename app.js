const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = [];
let joinNumbers;

function calculate(button){
    const value = button.textContent;
    
    if(value == "CLEAR"){
        calculation = [];
        screenDisplay.textContent = '.';
    }else if(value === "="){
        console.log(joinNumbers);
        screenDisplay.textContent = eval(joinNumbers);
    }else{
        calculation.push(value);
        joinNumbers = calculation.join('');
        screenDisplay.textContent = joinNumbers;
    }
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
