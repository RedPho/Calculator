let pressedNum = 0;
let firstNumber;
let secondNumber;
let settedOperator;
let operatorFunc;

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(func, x, y) {
  return func(x, y);
}

let display = document.querySelector("#display");



let numbers = document.querySelectorAll(".num");

numbers.forEach((number) => number.addEventListener("click", function(){
  pressedNum = number.id;
  if (display.innerText == 0) {
    display.innerText = pressedNum;
  }
  else{
    display.innerText += pressedNum;
  }
  if (!settedOperator) {
    firstNumber = parseInt(display.innerText);
  }
  else {
    secondNumber = parseInt(display.innerText);
  }
  
}));

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(){
  display.innerText = 0;
  settedOperator = 0;
  secondNumber = 0;
  firstNumber = 0;
});

let operators = document.querySelectorAll(".operator");

operators.forEach((operator) => operator.addEventListener("click", function(){
  display.innerText = 0;
  settedOperator = operator.id;
  if (settedOperator == "plus") {
    operatorFunc = sum;
  }
  if (settedOperator == "subtract") {
    operatorFunc = subtract;
  }
  if (settedOperator == "divide") {
    operatorFunc = divide;
  }
  if (settedOperator == "multiply") {
    operatorFunc = multiply;
  }
}))

let equal = document.querySelector("#equal");
equal.addEventListener("click", function(){
  display.innerText = operate(operatorFunc, firstNumber, secondNumber);
  settedOperator = undefined;
  firstNumber = parseInt(display.innerText);
})