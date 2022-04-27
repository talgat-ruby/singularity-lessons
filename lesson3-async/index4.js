function asyncRequest(str) {
	const p = new Promise((res, rej) => {
		if (str.includes("please")) {
			res(str);
		} else {
			rej(new Error("Be pollite!"));
		}
	});
	return p;
}

function main() {
	const req = asyncRequest("Take please");
	console.log(1);
	req.then((res) => {
		console.log(`Success!, ${res}`);
		return "New Then!";
	})
		// .then((res) => {
		// 	console.log(res);
		// 	return "New Then2";
		// })
		.catch((err) => {
			console.log(`Fail! ${err.message}`);
			return Promise.reject(err);
		})
		// .catch((err) => {
		// 	console.log(`Fail! ${err.message}`);
		// })
		// .then((res) => {
		// 	console.log(res);
		// })
		.finally(() => {
			console.log("Finally");
		});
	console.log(2);
}

async function mainAsyncAwait() {
	console.log(1);
	try {
		// const takeRes = await asyncRequest("Take please");
		// const giveRes = await asyncRequest("Give please");
		// const [takeRes, giveRes] = await Promise.all([
		// 	asyncRequest("Take please"),
		// 	asyncRequest("Give please"),
		// ]);
		// const pr1 = asyncRequest("Take please");
		// const pr2 = asyncRequest("Give please");

		// const takeRes = await pr1;
		// const giveRes = await pr2;
		console.log(`Success!, ${takeRes}`);
		console.log(`Success!, ${giveRes}`);
	} catch (err) {
		console.log(`Fail! ${err.message}`);
	} finally {
	}
	console.log(2);
}

// main();
mainAsyncAwait();
