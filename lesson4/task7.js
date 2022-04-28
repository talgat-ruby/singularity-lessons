function promisAll(fns) {}

function fn1() {
	return Promise.resolve(1);
}
function fn2() {
	return Promise.resolve(2);
}
function fn3() {
	return Promise.resolve(3);
}
function fnRej() {
	return Promise.reject(new Error("Was rejected"));
}

async function main() {
	console.log(await promisAll[(fn1, fn2, fn3)]); // [1, 2, 3]
	console.log(await promisAll[(fn1, fn3)]); // [1, 3]
	console.log(await promisAll[(fn1, fnRej)]); // "Was rejected"
}

main();
