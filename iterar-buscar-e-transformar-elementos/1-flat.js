const arr = [1, 2, [3, 4]];

const arrFlat = arr.flat();

console.log(arrFlat);
// (4) [1, 2, 3, 4]

console.log(arr);
// (3) [1, 2, Array(2)]