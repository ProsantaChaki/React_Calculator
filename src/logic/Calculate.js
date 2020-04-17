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
            return firstNum.div(secondNum).toString();
        }
    }
}


export default function calculate(obj, buttonName) {
    if(isNumber(buttonName) || buttonName ==='.'){
        if(obj.operator === '=') {
            obj.firstNumber=null;
            obj.operator = null
            obj.displayNumber = '0';
        }

        if(obj.operator === null){
            obj.firstNumber === null ? obj.firstNumber = buttonName :obj.firstNumber =  (obj.firstNumber + buttonName);
            obj.displayNumber = obj.firstNumber;

        }else if(obj.firstNumber != null){
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

        if(obj.operator != '=' || obj.operator != null) {
            if(obj.secondNumber != null){
                obj.firstNumber = calculation(obj.firstNumber, obj.secondNumber, obj.operator);
                obj.secondNumber = null;
            }
            //obj.displayNumber = obj.firstNumber;
        };
        obj.operator = buttonName;
        obj.displayNumber = obj.firstNumber+obj.operator;
    }

}