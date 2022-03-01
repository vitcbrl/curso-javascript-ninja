/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var x = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arg){
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

function myFunction(arg){
  return arg[1];
};

resposta:2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function pp(arg, x){         //arg quer dizer que ele ta recebendo um array
  return arg[x];            //aqui quer dizer que ele vai pegar o indice do array de acordo com q for digitado
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
 
var xx= [ 'vit', 23, true, false, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

pp(xx, 0) //vit
pp(xx,1) //23
pp(xx,2) //true
pp(xx,3) //false
pp(xx,4) //null

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(NameBook){
  var allbooks = {
    'adoidado' = {
      quantspages: 50,
      autor: 'Ferdinando',
      editora:'abril'
  },
    'descomplicando' = {
       quantspages: 200,
      autor: 'dinando',
      editora:'abri'
    },
    'curtindo' = {
      quantspages: 500,
      autor: 'nando',
      editora:'bril'
    }
  }
  return !Namebook ? allbooks : allbooks[NameBook] //o array é usado nesse caso em um object pq eu nao sei qual a notação do object q vou pegar 
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

`O livro tem ${NameBook('curtindo')} tem ${NameBook('curtindo').quantspags} páginas!` 

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

`O autor do livro ${NameBook('adoidado')} é ${NameBook('adoidado').autor}`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro ${NameBook('descomplicando')} foi publicado pela editora ${NameBook('descomplicando').editora} .`
