const arr = [4, 2, 3, 1, 5];

arr.sort((current, next) => current - next);
// (5) [1, 2, 3, 4, 5]
arr.sort((current, next) => next - current);
// 5) [5, 4, 3, 2, 1]