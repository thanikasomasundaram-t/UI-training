const calculator = {
    add: (operand1, operand2) => {
        return operand1 + operand2;
    },
    sub: (operand1, operand2) => {
        return operand1 - operand2;
    },
    mul: (operand1, operand2) => {
        return operand1 * operand2;
    },
    div: (operand1, operand2) => {
        return operand1/operand2;
    }
}

console.log(calculator.add(6, 2));
console.log(calculator.sub(6, 2));
console.log(calculator.mul(6, 2));
console.log(calculator.div(6, 2));
