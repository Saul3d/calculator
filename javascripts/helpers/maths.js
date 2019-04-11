const add = (num1, num2) => {
    let total = parseInt(num1) + parseInt(num2);
    console.log(`First number is: ${num1}`);
    console.log(`Second number is: ${num2}`);
    console.log(typeof total);
    return total;
}
const subtract = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiply = (num1, num2) => {
    return num1  * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}


export default { add, subtract, multiply, divide }