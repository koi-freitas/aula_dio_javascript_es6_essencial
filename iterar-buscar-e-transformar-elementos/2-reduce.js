const students = [
    {name: 'Jonny', grade: 7},
    {name: 'Bob', grade: 3},
    {name: 'Laira', grade: 9},
    {name: 'Thai', grade: 4.5}
];

const media = students.reduce((totalGrades, student) => totalGrades += student.grade, 0)/students.length;

console.log(media);
// 5.875