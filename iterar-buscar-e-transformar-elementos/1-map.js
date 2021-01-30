const arr = [1, 2, 3, 4, 5];

arr.map(value => value * 2);
// (5) [2, 4, 6, 8, 10];

const frutas = ['melancia', 'acerola', 'laranja', 'amora'];

const listaDeFrutas = frutas.map((fruta, index) => `${index+1} - ${fruta}`);

console.log(listaDeFrutas);
// (4) ["1 - melancia", "2 - acerola", "3 - laranja", "4 - amora"]

console.log(frutas);
// (4) ["melancia", "acerola", "laranja", "amora"]