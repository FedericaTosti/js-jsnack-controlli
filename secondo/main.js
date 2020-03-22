 // L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// messaggio all'utente
alert("Gentile utente ti chiedo di inserire due parole...");

// variabile prima parola e richiesta all'utente
var primaParola = prompt("Inserisci una parola");

// variabile seconda parola e richiesta all'utente
var secondaParola = prompt("Inserisci un'altra parola");

// conteggio parola più lunga (if else) e stampo direttamente il risultato
if (primaParola.length > secondaParola.length) {
  document.getElementById('parola').innerHTML = ("Allora utente l'ordine è: " + secondaParola + " " + primaParola);
} else if (primaParola.length < secondaParola.length) {
  document.getElementById('parola').innerHTML = ("Allora utente l'ordine è: " + primaParola + " " + secondaParola);
} else if (primaParola.length == secondaParola.length) {
  document.getElementById('parola').innerHTML = ("Gentile utente le due parole inserite sono lunghe uguali, vengono stampate in ordine di inserimento: " + primaParola + " " + secondaParola);
}

console.log(primaParola + " " + primaParola.length);
console.log(secondaParola + " " + secondaParola.length);
