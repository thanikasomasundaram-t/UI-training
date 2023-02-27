//  CALCULATOR USING ARRAY OF OBJECTS

// start - calculator
const calculator = (operands, operator) => {

    const arithmeticOperations = [
        {
            operator: '+',
            calculation: (operands) => {
                return operands[0] + operands[1];
            }
        },
        {
            operator: '-',
            calculation: (operands) => {
                return operands[0] - operands[1];
            }
        },
        {
            operator: '/',
            calculation: (operands) => {
                return operands[0] / operands[1];
            }
        },
        {
            operator: '*',
            calculation: (operands) => {
                return operands[0] * operands[1];
            }
        },
    ];

    for(i in arithmeticOperations) {

        if(arithmeticOperations[i].operator === operator){

            return arithmeticOperations[i].calculation(operands);
        }
    }
}
// end - calculator

console.log(calculator([100, 400], '+'));