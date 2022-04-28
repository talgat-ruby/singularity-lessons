function some(arr, fn) {
	for (const a of arr) {
		if (fn(a)) {
			return true;
		}
	}
	return false;
}

console.log(some([1, 2, 3, 4], (val) => val > 2)); // true
console.log(some([1, 2, 3, 4], (val) => val > 5)); // false

function every(arr, fn) {
	for (const a of arr) {
		if (!fn(a)) {
			return false;
		}
	}
	return true;
}

console.log(every([1, 2, 3, 4], (val) => val > 2)); // false
console.log(every([1, 2, 3, 4], (val) => val < 5)); // true
