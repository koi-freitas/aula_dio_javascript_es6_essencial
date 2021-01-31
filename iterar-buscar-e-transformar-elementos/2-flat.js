const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

const arrFlat = arr.flat(2);

console.log(arrFlat);
// (7) [1, 2, 3, 4, 5, 6, Array(2)]

console.log(arr);
// (3) [1, 2, Array(3)]