// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// messaggio all'utente
alert("Gentile utente ti chiedo di inserire cinque numeri...");

// variabile numero e richiesta all'utente
var numeroUno = parseFloat(prompt("Inserisci il primo numero"));
// variabile numero e richiesta all'utente
var numeroDue = parseFloat(prompt("Inserisci il secondo numero"));
// variabile numero e richiesta all'utente
var numeroTre = parseFloat(prompt("Inserisci il terzo numero"));
// variabile numero e richiesta all'utente
var numeroQuattro = parseFloat(prompt("Inserisci il quarto numero"));
// variabile numero e richiesta all'utente
var numeroCinque = parseFloat(prompt("Inserisci il quinto numero"));
// variabile somma
var somma = numeroUno + numeroDue + numeroTre + numeroQuattro + numeroCinque;

// variabile somma e richiesta all'utente
// var somma = parseFloat(prompt("Inserisci il primo numero")) + parseFloat(prompt("Inserisci il secondo numero")) + parseFloat(prompt("Inserisci il terzo numero")) + parseFloat(prompt("Inserisci il quarto numero")) + parseFloat(prompt("Inserisci il quinto numero"));


// stampo il risultato
document.getElementById('somma').innerHTML = ("Gentile utente la somma dei numeri inseriti è " + somma);



console.log(numeroUno);
console.log(numeroDue);
console.log(numeroTre);
console.log(numeroQuattro);
console.log(numeroCinque);
console.log(somma);
