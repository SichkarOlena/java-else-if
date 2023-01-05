//TASK1

const number1 = 0;
const number2 = 0;
const number3 = 17;
let result;

if ((number1 > 0 && number2 > 0) || (number1 < 0 && number2 < 0)) {
    result = number1 * number2;
}

else if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) {
    result = number1 / number2;
}

else if ((number1 === 0 && number2 !== 0) || (number2 === 0 && number1 !== 0)) {
    result = number3;
}

else {
    result = NaN;
}
console.log('Result = ', result);



//TASK2
const mamba = 3;

if (mamba < 0 || mamba % 2 !== 0 || mamba % 6 !== 0) {
    console.log('Result = ', 'lose')
} else {
    console.log('Result = ', 'win')
}
