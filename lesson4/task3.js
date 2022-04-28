function bifurcate(arr, checkArr) {
	const result = [[], []];
	for (let i = 0; i < arr.length; i++) {
		const a = arr[i];
		const check = checkArr[i];

		if (check) {
			result[0].push(a);
		} else {
			result[1].push(a);
		}
	}

	return result;
}

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true])); //[[1,2,4],[3]]
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true])); //[[1,2,3,4],[]]
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false])); //[[],[1,2,3,4]]
