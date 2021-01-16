const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

console.log(nameSymbol1, nameSymbol2);
console.log(typeof nameSymbol1);

const user = {
    [nameSymbol1]: 'Um nome',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Freitas'
};

console.log(user);

// Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('\nPropriedades do objeto user:', Object.keys(user));
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Exibir symbols de um objeto
console.log('\nSymbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('\ntodas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT : Symbol( 'RIGHT' )
};