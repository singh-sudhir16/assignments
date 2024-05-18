class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Not a number");
    }
    this.result += parseFloat(number);
  }

  subtract(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Not a number");
    }
    this.result -= parseFloat(number);
  }

  multiply(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Not a number");
    }
    this.result *= parseFloat(number);
  }

  divide(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Not a number");
    }
    if (parseFloat(number) === 0) {
      throw new Error("Division by zero");
    }
    this.result /= parseFloat(number);
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove extra spaces and split the expression into tokens
    const tokens = expression.split(/\s+/).filter(token => token.trim() !== "");

    // Regular expression to validate whether a token is a number or an operator
    const numberRegex = /^-?\d*\.?\d+$/;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (numberRegex.test(token)) {
        this.add(token);
      } else if (token === '+') {
      } else if (token === '-') {
        i++;
        if (i >= tokens.length || !numberRegex.test(tokens[i])) {
          throw new Error("Invalid input: Invalid expression");
        }
        this.subtract(tokens[i]);
      } else if (token === '*') {
        i++;
        if (i >= tokens.length || !numberRegex.test(tokens[i])) {
          throw new Error("Invalid input: Invalid expression");
        }
        this.multiply(tokens[i]);
      } else if (token === '/') {
        i++;
        if (i >= tokens.length || !numberRegex.test(tokens[i])) {
          throw new Error("Invalid input: Invalid expression");
        }
        this.divide(tokens[i]);
      } else {
        throw new Error("Invalid input: Invalid character");
      }
    }
  }
}

module.exports = Calculator;
