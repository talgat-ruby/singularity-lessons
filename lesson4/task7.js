const wait = (delay) => new Promise((res) => setTimeout(res, delay));

async function promisAll(fns, cb) {
	const result = [];
	const ps = [];

	for (const fn of fns) {
		fn().then((res) => {
			result.push(res);
			if (result.length === fns.length) {
				cb(result);
			}
		});
	}

	// return result;
}

async function fn1() {
	await wait(1000);
	return Promise.resolve(1);
}
async function fn2() {
	await wait(2000);
	return Promise.resolve(2);
}
async function fn3() {
	await wait(3000);
	return Promise.resolve(3);
}
async function fnRej() {
	await wait(1000);
	return Promise.reject(new Error("Was rejected"));
}

async function main() {
	// console.log(promisAll([fn1, fn2, fn3]), (res) => console.log(res)); // [1, 2, 3]
	// console.log(promisAll([fn1, fn3]), (res) => console.log(res)); // [1, 3]
	// console.log(promisAll([fn1, fnRej]), (res) => console.log(res)); // "Was rejected"

	promisAll([fn1, fn2, fn3], (res) => console.log(res));
}

main();
