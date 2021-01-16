/**

switch (expressão) {
    case valor1:
        [break;]
    case valueN:
        [break;]
    
    default:
        [break;]
}

*/

const fruit = 'pera';

switch (fruits) {
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break; // se tirar o break anterior ao default, o default é executado depois de executar o código acima.
    default:
        console.log('Produto não existe no estoque.');
        break;
};