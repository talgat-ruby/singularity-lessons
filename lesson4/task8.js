class Polling {
	constructor(fn, delay, atempts) {}
}

const wait = (delay) => new Promise((res) => setTimeout(res, delay));

async function fn1() {
	await wait(1000);
	return Promise.resolve(1);
}

async function fn2() {
	await wait(4000);
	return Promise.resolve(1);
}

const poll = new Polling(fn1, 2000, 4);
poll.start(); // 4 times each 2s delay

const poll2 = new Polling(fn2, 2000, 4);
poll2.start(); // 4 times each 4s delay
