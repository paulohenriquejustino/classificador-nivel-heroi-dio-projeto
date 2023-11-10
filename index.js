// Desafio Classificador de Nível de Herói

// O que deve ser utilizado:
// variaveis, operadores, laços de repetição, estrutura de decisão

/* ## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

// Utilizando a biblioteca readline, para receber entrada é saida de dados no terminal
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Utilizando uma função para limpar o terminal.
function limparTerminal() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}

limparTerminal();

// Declarando duas variáveis
let nome = ''; // inicialmente vazia
let xp = 0; // inicialmente com valor 0

while (true) { // utilizando um loop infinito (estrutdura de repetição), até que o comendo rl.close() seja chamado.

  // Entrada de dados...
  rl.question('Digite o nome do Herói: ', (nomeInput) => {
    nome = nomeInput;
    console.log('');

    rl.question('Digite o valor de XP do Herói: ', (xpInput) => {
      xp = parseInt(xpInput); // convertendo o valor digitado em inteiro.

      // Estrutura de decisão
      if (isNaN(xp)) {
        console.log('Valor inválido para XP. Por favor, insira um número.');
      } else {
        let nivel;

        if (xp < 1000) {
          nivel = 'Ferro';
        } else if (xp < 2000) {
          nivel = 'Bronze';
        } else if (xp < 5000) {
          nivel = 'Prata';
        } else if (xp < 7000) {
          nivel = 'Ouro';
        } else if (xp < 8000) {
          nivel = 'Platina';
        } else if (xp < 9000) {
          nivel = 'Ascendente';
        } else if (xp < 10000) {
          nivel = 'Imortal';
        } else {
          nivel = 'Radiante';
        }

        // Saída de dados, sendo mostrada no console.
        console.log(`O ${nome} está no nível ${nivel}`);
        rl.close();
      }
    });
  });
}
