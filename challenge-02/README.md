# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
return x + y;}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
a = soma(2,2) + 5

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
b;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
function adicionar() {
b = 3
return `o valor da variavel agora é ${b}`}


// Invoque a função criada acima.
adicionar()

// Qual o retorno da função? (Use comentários de bloco).
o valor da variavel agora é 3

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.

function somando(d,e,f){ 
if( d === undefined || e === undefined || f === undefined){
return 'preencha todos os dados corretamente'} 
return (d * e * f) + 2; 
}


// Invoque a função criada acima, passando só dois números como argumento.
somando(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'preencha todos os dados corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
somando(2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.

function pro(x,y,v;){if(x !== undefined && y === undefined && v === undefined){
return `${x}`;} else if (x !== undefined && y !== undefined && v === undefined){
return x + y;} else if (x !== undefined && y !== undefined && v !== undefined){
return (x + y) / 2;} else if (x === undefined && y === undefined && v === undefined){
return 'false';} else { return 'null';}}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
 
 pro(2)
 2
 
 pro(2,2)
 4
 
 pro(2,2,2)
 2
 
 pro()
 false
