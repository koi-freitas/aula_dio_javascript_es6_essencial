/* function Pessoa() {
    return {
        name: 'koi',
        lastName: 'Freitas'
    }
}

const p = Pessoa();
console.log(p); */
// {name: "koi", lastName: "Freitas"}

/* function Pessoa(name) {
    return {
        name,
        lastName: 'Freitas'
    }
}

const p = Pessoa('Custom Name');
console.log(p); */
// {name: "Custom Name", lastName: "Freitas"}

function Pessoa(customProperties) {
    return {
        name: 'Koi',
        lastName: 'Freitas',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 27, email: 'example@example.com'});
console.log(p);
// {name: "Custom Name", lastName: "Freitas", age: 27, email: "example@example.com"}