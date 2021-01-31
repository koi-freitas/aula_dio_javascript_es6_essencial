const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// (4) [2, 4, 6, 8]

arr.flatMap(value =>[[value * 2]]);
// (4) [[2], [4], [6], [8]]

const arr2 = [[[1]], [[2]], [[3]], [[4]]];

arr2.flatMap(value => value * 2, 2);
// (4) [2, 4, 6, 8]