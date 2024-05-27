let idade = prompt('digite sua idade:');
let convert = parseInt(idade);
if (convert <= 18) {
    console.log('Acesso Negado!.');
} else {
    console.log('Acesso Liberado, Seja Bem Vindo!!');
}