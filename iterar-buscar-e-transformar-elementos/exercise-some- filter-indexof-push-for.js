const students = [
    {name: 'Jonny', grade: 7},
    {name: 'Bob', grade: 3},
    {name: 'Laira', grade: 9},
    {name: 'Thai', grade: 4.5}
];

const anyonePassed = students.some(student => student.grade >= 7);
console.log(anyonePassed);

const studentsThatPassed = students.filter(student => student.grade >= 7);
console.log(studentsThatPassed);

let b = [];
for (let i = 0; i < studentsThatPassed.length; i++) {
    let x = students.indexOf(studentsThatPassed[i]);
    let studentsThatPassedIndex = b.push(x);
    console.log("A pessoa "+students[i].name+" está na posição: "+b[i]+" do array: students");
}
// A pessoa Jonny está na posição: 0 do array: students
// A pessoa Bob está na posição: 2 do array: students