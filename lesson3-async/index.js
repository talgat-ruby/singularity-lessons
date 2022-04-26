// Async functions

// callbacks;
// timeouts; setTimeout/clearTimeout, setInterval/clearInterval, queueMicrotask, requestAnimationFrame
// events https://developer.mozilla.org/en-US/docs/Web/Events;
// Promises: fetch
// Generators

// setTimeout/clearTimeout

// let timeoutID;

// function log(message = "log") {
// 	const anyVar = "";
// 	console.log(message);
// }

// function delayedMessage(ms) {
// 	console.log("delayedMessage");
// 	timeoutID = setTimeout(
// 		() => {
// 			clearMessage();
// 			log();
// 		},
// 		ms,
// 		`delayedMessage - ${ms}`
// 	);
// }

// function clearMessage() {
// 	clearTimeout(timeoutID);
// }

// SPOT the issue!
// log();
// log();
// delayedMessage(2 * 1000);
// delayedMessage(1000);
// log();

// setTimeout(
// 	(text) => {
// 		console.log(text);
// 		setTimeout(console.log, 1000, `1 sec`);
// 	},
// 	2000,
// 	`2 sec`
// );

// MEMORY LEAKS
// https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
// https://blog.logrocket.com/escape-memory-leaks-javascript/#memory-allocation
// https://www.ditdot.hr/en/causes-of-memory-leaks-in-javascript-and-how-to-avoid-them

// setInterval / clearInterval;

// SPOT the issue!
// var intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
// 	// Your code here
// 	// Parameters are purely optional.
// 	console.log(a);
// 	console.log(b);
// }
