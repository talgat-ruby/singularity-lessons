function pipeFunctions() {}

const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);

console.log(multiplyAndAdd5(5, 2)); // 15
console.log(multiplyAndAdd5(16, 2)); // 37

const ask = (str) => `${str} How are you?`;
const greeting = (name) => `Hello ${name}!`;
const sendName = (name) => name;
const sayHello = pipeFunctions(ask, greeting, sendName);

console.log(sayHello("John")); // 15
console.log(sayHello("Derik")); // 37
