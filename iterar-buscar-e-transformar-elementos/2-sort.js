const students = [
    {name: 'Jonny', grade: 7},
    {name: 'Bob', grade: 3},
    {name: 'Laira', grade: 9},
    {name: 'Thai', grade: 4.5}
];

students.sort((current, next) => current.grade - next.grade)
// (4) [{name: "Bob", grade: 3}, {name: "Thai", grade: 4.5}, {name: "Jonny", grade: 7}, {name: "Laira", grade: 9}]

students.sort((current, next) => next.grade - current.grade);
// (4) [{name: "Laira", grade: 9}, {name: "Jonny", grade: 7}, {name: "Thai", grade: 4.5}, {name: "Bob", grade: 3}]