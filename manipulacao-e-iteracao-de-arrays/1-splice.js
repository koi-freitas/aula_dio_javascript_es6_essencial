const arr = [1, 2, 3, 4, 5];

arr.splice(2);
// (3) [3, 4, 5]

console.log(arr);
// (2) [1, 2]

arr.splice(0, 0, 'first');
// []

console.log(arr);
// (3) ['first', 1, 2]

arr.splice(0, 1);
// ["first"]

console.log(arr);
// (2) [1, 2]

arr.splice(2, 0, 3, 4, 5);
// []

console.log(arr);
// (5) [1, 2, 3, 4, 5]

arr.splice(1, 2, 'two', 'three');
// (2) [2, 3]

console.log(arr);
// (5) [1, "two", "three", 4, 5]