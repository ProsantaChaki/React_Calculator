import Big from "big.js"

function isNumber(buttonName) {
    return /[0-9]+/.test(buttonName);
}
function calculation(firstNumber, secondNumber, operator) {
    const firstNum = Big(firstNumber || "0");
    const secondNum = Big(secondNumber || (operator === "÷" || operator === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
    if (operator === "+") {
        return firstNum.plus(secondNum).toString();
    }
    if (operator === "-") {
        return firstNum.minus(secondNum).toString();
    }
    if (operator === "x") {
        return firstNum.times(secondNum).toString();
    }
    if (operator === "÷") {
        if (secondNum === "0") {
            alert("Divide by 0 error");
            return "0";
        } else {
            if(firstNum % secondNum !== 0){
                return ((firstNum.div(secondNum)).toFixed(4)).toString();
            }
            else return firstNum.div(secondNum).toString();
        }
    }
    if (operator === "+/-") {

    }
}


export default function calculate(obj, buttonName) {
    if(buttonName ==='AC'){
        obj.firstNumber=null;
        obj.secondNumber=null;
        obj.operator = null
        obj.displayNumber = 0;
    }
    else if(isNumber(buttonName) || buttonName ==='.'){
        if(obj.operator === '=') {
            obj.firstNumber = null;
            obj.operator = null
            obj.displayNumber = '0';
        }

        if(obj.operator === null){
            obj.firstNumber === null ? obj.firstNumber = buttonName :obj.firstNumber =  (obj.firstNumber + buttonName);
            obj.displayNumber = obj.firstNumber;

        }else if(obj.firstNumber !== null){
            obj.secondNumber === null ? obj.secondNumber = buttonName :obj.secondNumber =  (obj.secondNumber + buttonName);
            obj.displayNumber = obj.firstNumber+obj.operator+obj.secondNumber;
        }
    }
    else if(buttonName === '='){
        obj.firstNumber = calculation(obj.firstNumber, obj.secondNumber, obj.operator)
        obj.secondNumber = null;
        obj.operator = buttonName;
        obj.displayNumber = obj.firstNumber;

    }
    else {

        if(buttonName === '+/-'){
            if(obj.secondNumber !== null){
                obj.secondNumber =  (parseFloat(obj.secondNumber)*(-1)).toString()
                obj.displayNumber = obj.firstNumber+obj.operator+obj.secondNumber;
            }else if(obj.firstNumber){
                obj.firstNumber =  (parseFloat(obj.firstNumber)*(-1)).toString()
                if(obj.operator !== null){
                    obj.displayNumber = obj.firstNumber+obj.operator;
                }else {
                    obj.displayNumber = obj.firstNumber
                }
            }
        }else if(buttonName === '%'){
            if(obj.secondNumber !== null){
                if(obj.operator === 'x'){
                    obj.firstNumber = parseFloat(obj.firstNumber)*(parseFloat(obj.secondNumber)/100);
                    obj.operator = null;
                    obj.secondNumber =null;
                }
                else if (obj.operator === '÷'){
                    obj.firstNumber = parseFloat(obj.firstNumber)/(parseFloat(obj.secondNumber)/100);
                    obj.operator = null;
                    obj.secondNumber =null;
                }
                else if(obj.operator === '+' || obj.operator === '-'){
                    obj.secondNumber = parseFloat(obj.secondNumber)/100;
                    obj.firstNumber = calculation(obj.firstNumber, obj.secondNumber, obj.operator);
                    obj.operator = null;
                    obj.secondNumber =null;
                }

                obj.displayNumber = obj.firstNumber

            } else if(obj.firstNumber !== null){
                obj.firstNumber = parseFloat(obj.firstNumber)/100;
                obj.displayNumber = obj.firstNumber
            }
        }else if(obj.firstNumber === null && buttonName === '-' ) {
            obj.firstNumber = buttonName;
            obj.operator = null;
            obj.displayNumber = obj.firstNumber;
        }else if((obj.operator === 'x' || obj.operator === '÷') && (obj.secondNumber === null && (buttonName === '-' || buttonName === '+'))){
                obj.secondNumber = buttonName;
                obj.displayNumber = obj.firstNumber+obj.operator+obj.secondNumber;
        }else if(obj.operator !== '=' || obj.operator != null) {
            if(obj.secondNumber != null){
                obj.firstNumber = calculation(obj.firstNumber, obj.secondNumber, obj.operator);
                obj.secondNumber = null;
                obj.operator = buttonName;
                obj.displayNumber = obj.firstNumber + obj.operator;
            }else if(obj.firstNumber !== null){
                obj.operator = buttonName;
                obj.displayNumber = obj.firstNumber+obj.operator;
            }

        };

    }

}