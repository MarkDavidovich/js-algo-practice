/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(a, operand, b) {
  if (operand === "/" && b == 0) {
    return "Can't divide by 0!";
  }

  if (operand === "+") {
    return a + b;
  } else if (operand === "-") {
    return a - b;
  } else if (operand === "*") {
    return a * b;
  } else if (operand === "/") {
    return a / b;
  }
}

exports.solution = calculator;
