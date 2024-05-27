let idade = prompt('digite sua idade:');
let convert = parseInt(idade);
if (convert >= 18) {
    console.log('Acesso Liberado, Seja Bem Vindo!');
} else {
    console.log('Acesso negado. Você deve ter 18 anos ou mais para acessar!.');
}