function bifurcate(arr, checkArr) {}

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true])); //[[1,2,4],[3]]
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true])); //[[1,2,3,4],[]]
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false])); //[[],[1,2,3,4]]
