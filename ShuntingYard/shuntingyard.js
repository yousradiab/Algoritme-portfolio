import Queue from "./queue.js";
import Stack from "./stack.js";

function ShuntingYard(input) {
  const outputQueue = new Queue();
  const operatorStack = new Stack();
  const precedence = {
    "^": 5,
    "*": 4,
    "/": 3,
    "-": 2,
    "+": 1,
  };

  const inputList = input.split(" ");

  for (let i = 0; i < inputList.length; i++) {
    const token = inputList[i];

    if (
      token === "+" ||
      token === "-" ||
      token === "*" ||
      token === "/" ||
      token === "^"
    ) {
      while (
        operatorStack.peek() &&
        operatorStack.peek() !== "(" &&
        precedence[operatorStack.peek()] > precedence[token]
      ) {
        const o2 = operatorStack.pop();

        outputQueue.enqueue(o2);
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (operatorStack.peek() && operatorStack.peek() !== "(") {
        outputQueue.enqueue(operatorStack.pop());
      }

      if (!operatorStack.peek()) {
        console.log("You fucked up");
        return;
      }

      operatorStack.pop();
    } else {
      outputQueue.enqueue(token);
    }
  }

  const numberOfOperators = operatorStack.size();

  for (let j = 0; j < numberOfOperators; j++) {
    outputQueue.enqueue(operatorStack.pop());
  }

  return outputQueue.toString();
}

const testInputs = [
  "2 + 3 * 4",
  "85 - 31",
  "3 + 4 * ( 5 - 2 )",
  "( 5 + 9 ) / 4",
  "( 12 + 3 ) * ( 7 + 9 )",
  "23 ^ 2 - ( 13 * 9 ) + 5 / 7",
  "3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3",
];

for (const test of testInputs) {
  console.log(test, " = ", ShuntingYard(test));
}
