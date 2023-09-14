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
    }else if(value === "%"){
        // Obtén el número actual de la pantalla
        const currentNumber = parseFloat(joinNumbers);
        // Divide el número por 100
        const result = currentNumber / 100;
        // Actualiza la pantalla con el resultado
        screenDisplay.textContent = result;
        // Reinicia el cálculo
        calculation = [];
        // Agrega el resultado al cálculo para futuras operaciones
        calculation.push(result.toString());
    }else{
        calculation.push(value);
        joinNumbers = calculation.join('');
        screenDisplay.textContent = joinNumbers;
    }
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
