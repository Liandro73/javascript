/* AULA 01
var nome = "Dernival Liandro";
var n1 = 15;
var n2 = 10;
var frase = "Testando o console.log";

console.log(nome)
console.log(15 * 10)
console.log(frase.toLocaleLowerCase())
console.log(frase.toLocaleUpperCase())
console.log(frase.replace("Testando", "Usando"))
*/

/* AULA 02
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/

/* AULA 03
var idade = 18;
var idade = prompt("Qual sua idade? ")
if (idade >= 18) {
    alert("maior de idade");
    alert("Acesso autorizado");
} else {
    alert("menor de idade");
    alert("Acesso negado");
}

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};

var count;
for(count = 0; count <= 5; count++) {
    alert(count)
};

var d = new Date();
alert(d);
*/

/* AULA 04
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = true
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));

alert(soma(5, 10));
alert(setReplace("João Pedro", "Pedro", "Paulo"));
*/


function clicou() {
    alert("Obrigado por clicar");
}

function clicar() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar() {
    window.open("https://www.google.com.br/")
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function carregar() {
    alert("página carregada");
}

function mudar(elemento) {
    console.log(elemento.value)
}