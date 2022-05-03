function pipeFunctions(...fns) {
	const revertedFns = [...fns].reverse();

	return (arg) => revertedFns.reduce((acc, fn) => fn(acc), arg);
}

[1, 2, 3].reduce((acc, a) => acc + a, 1);

const multiply = (x) => x * 2;
const add5 = (x) => x + 5;
const multiplyAndAdd5 = pipeFunctions(add5, multiply);

console.log(multiplyAndAdd5(5)); // 15
console.log(multiplyAndAdd5(16)); // 37

const ask = (str) => `${str} How are you?`;
const greeting = (name) => `Hello ${name}!`;
const sendName = (name) => name;
const sayHello = pipeFunctions(ask, greeting, sendName);

console.log(sayHello("John"));
// ("Hello John! How are you?");
console.log(sayHello("Derik"));
// ("Hello Derik! How are you?");
