# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.

pessoa = {}

Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão

pessoa = {
nome: 'vit',
sobrenome: 'Cabral',
sexo: 'Fem',
idade: 23,
altura: 1.60,
peso: 80,
andando: false,
caminhouquantosmetros: 0};


Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.

pessoa.fazeraniversario = function(){
pessoa.idade++ };


Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";

pessoa.andar= function(x){
if ( x !== undefined) {pessoa.caminhouquantosmetros += x};
return pessoa.andando = true
}


Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".

pessoa.parar= function(){
return pessoa.andando= false
}


Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"

pessoa.nomecompleto= function(){
return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}`};


Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"


pessoa.mostraridade= function(){
return `Olá, eu tenho ${pessoa.idade} anos!`};


Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."

pessoa.mostrarpeso= function(){
return `Eu peso ${pessoa.peso}`};


Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."

pessoa.mostraraltura= function(){
return `Minha altura é ${pessoa.altura}`};


Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)

pessoa.nomecompleto()
//vit cabral

Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)

pessoa.mostraridade()
//24

Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)

pessoa.mostrarpeso()
//80

Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)

pessoa.mostraraltura()
//1.6

Faça a `pessoa` fazer 3 aniversários.

pessoa.fazeraniversario()
pessoa.fazeraniversario()
pessoa.fazeraniversario()


Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)

27


Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.

pessoa.andar(3)
pessoa.andar(2)
pessoa.andar(1)


A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)

pessoa
//está andando o valor está true

pessoa.parar()


E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)

pessoa
//Não 

Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)


pessoa
//seis metros

Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao= function() {
var sexo = pessoa.sexo === 'fem' ? 'a' : 'o' 
// eu criei essa variavel que vai receber o condicional ternário pois na montagem da frase é necessario. eu vou chamar a variavel 
var idade = pessoa.idade === 1 ? 'ano' : 'anos'
var metros =  pessoa.caminhouquantosmetros === 1 ? 'metro' : 'metros'
return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouquantosmetros} ${metros}!`
};

// Agora, apresente-se ;)

"Olá, eu sou a Vitória Cabral, tenho 23 anos, 1.60, meu peso é 80 e, só hoje, eu já caminhei 2 metros!"


