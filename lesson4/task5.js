function filterNonUnique(arr) {
	const result = [];
	const map = new Map();

	for (const a of arr) {
		if (!map.has(a)) {
			map.set(a, 1);
		} else {
			map.set(a, map.get(a) + 1);
		}
	}

	for (const [number, repetition] of map) {
		if (repetition === 1) {
			result.push(number);
		}
	}

	return result;
}

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]
console.log(filterNonUnique([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(filterNonUnique([1, 2, 1, 3, 3, 4, 2])); // [4]
