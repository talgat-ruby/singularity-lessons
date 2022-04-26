// function bark() {
// 	console.log(name);
// 	var name = "Happy";
// }
// console.log(name);

// {
// 	const name = "Hello";
// }

// bark();

// const arr = [1, 2, 3];

// for (var i = 0; i < arr.length; i++) {
// 	((i) => setTimeout(() => console.log(i), 100))(i);
// }

// const add = function (a) {
// 	let name = ""
// 	return function (b) {
// 		return a + b;
// 	};
// };

// const add5 = add(5)(2);

// const feb = febInit();

// function febInit() {
// 	let a = 0;
// 	let b = 1;
// 	return function () {
// 		[a, b] = [b, a + b];
// 		return a;
// 	};
// }

// console.log(feb()); // 1
// console.log(feb()); // 1
// console.log(feb()); // 2
// console.log(feb()); // 3
// console.log(feb()); // 5
