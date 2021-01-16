let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i);     // logs "0", "1", "2", "foo" ou seja, executa para cada propriedade do objeto
}

for (let i of arr){
    console.log(i);     // logs "3", "5", "7" ou seja, executa para cada valor numérico do objeto
}