const wait = (delay) => new Promise((res) => setTimeout(res, delay));

class Polling {
	constructor(fn, delay, attempts) {
		this.fn = fn;
		this.delay = delay;
		this.attempts = attempts;
	}

	async start() {
		for (let i = 0; i < this.attempts; i++) {
			console.log("Call func");
			await Promise.all([this.fn(), wait(this.delay)]);
			console.log("Return func");
		}
	}
}

async function fn1() {
	await wait(1000);
	return Promise.resolve(1);
}

async function fn2() {
	await wait(4000);
	return Promise.resolve(1);
}

// const poll = new Polling(fn1, 2000, 4);
// poll.start(); // 4 times each 2s delay

const poll2 = new Polling(fn2, 2000, 4);
poll2.start(); // 4 times each 4s delay
