const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

arrIterator.next();
// {value: [0, 1], done: false}

arrIterator.next();
// {value: [1, 2], done: false}

arrIterator.next();
// {value: [2, 3], done: false}

arrIterator.next();
// {value: [3, 4], done: false}

arrIterator.next();
// {value: undefined, done: true}