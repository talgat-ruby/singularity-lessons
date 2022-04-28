function some(arr, fn) {}

console.log(some([1, 2, 3, 4], (val) => val > 2)); // true
console.log(some([1, 2, 3, 4], (val) => val > 5)); // false

function every(arr, fn) {}

console.log(every([1, 2, 3, 4], (val) => val > 2)); // false
console.log(every([1, 2, 3, 4], (val) => val < 5)); // true
