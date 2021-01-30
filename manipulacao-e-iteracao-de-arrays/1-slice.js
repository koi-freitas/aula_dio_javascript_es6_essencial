const arr = [1, 2, 3, 4, 5];

arr.slice(0, 2);
// (2) [1, 2]

arr.slice(2);
// (3) [3, 4, 5]

arr.slice(-1);
// [5]

arr.slice(-3);
// (3) [3, 4, 5]

console.log(arr);
// (5) [1, 2, 3, 4, 5]