let pressedNum = 0;
let firstNumber;
let secondNumber;
let settedOperator;
let operatorFunc;
const actions = document.querySelector("#actions");

function sum(a, b) {
  return parseInt(a) + parseInt(b);
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
  else if ((secondNumber == 0) && (firstNumber)){
    secondNumber = number.id;
    display.innerText = secondNumber;
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
  actions.innerText += number.innerText;
  
}));

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(){
  location.reload();
});

let operators = document.querySelectorAll(".operator");

operators.forEach((operator) => operator.addEventListener("click", function(){
  if (settedOperator) {
    display.innerText = operate(operatorFunc, firstNumber, secondNumber);
    firstNumber = parseInt(display.innerText);
    secondNumber = 0;
  
  }
  else{
    display.innerText = "";
  }
  settedOperator = operator.id;
  setOperatorFunc();

  actions.innerText += operator.innerText

}))

let equal = document.querySelector("#equal");
equal.addEventListener("click", function(){
  display.innerText = operate(operatorFunc, firstNumber, secondNumber);
  settedOperator = undefined;
  firstNumber = parseInt(display.innerText);
  actions.innerHTML += equal.innerText;
})

function setOperatorFunc() {
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
}
