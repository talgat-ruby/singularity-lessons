function some(arr, fn) {}

some([1, 2, 3, 4], (val) => val > 2); // true
some([1, 2, 3, 4], (val) => val > 5); // false

function every(arr, fn) {}

every([1, 2, 3, 4], (val) => val > 2); // false
every([1, 2, 3, 4], (val) => val < 5); // true
