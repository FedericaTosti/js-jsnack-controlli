// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// messaggio all'utente
alert("Gentile utente inserisci due numeri...");

// variabile primo numero e richiesta all'utente
var primoNumero = parseFloat(prompt("Inserisci un numero"));

// variabile secondo numero e richiesta all'utente
var secondoNumero = parseFloat(prompt("Inserisci un altro numero"));

// conteggio numero più alto (if else) e stampo direttamente il risultato
if (primoNumero > secondoNumero) {
  document.getElementById('numero').innerHTML = ("Gentile utente, il primo numero che hai inserito (" + primoNumero + ") è il numero maggiore");
} else if (primoNumero < secondoNumero) {
  document.getElementById('numero').innerHTML = ("Gentile utente, il secondo numero che hai inserito (" + secondoNumero + ") è il numero maggiore");
} else if (primoNumero == secondoNumero) {
  document.getElementById('numero').innerHTML = ("Gentile utente i due numeri inseriti sono uguali");
}

console.log(primoNumero);
console.log(secondoNumero);
