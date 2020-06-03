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
*/

var d = new Date();
alert(d);