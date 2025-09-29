/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// SCRIVI QUI LA TUA RISPOSTA
let nome = "Nader"
let cognome = "Deghaili"
console.log("Le stringhe sono parole", nome, cognome)

let età = 30
let annoDiNascita = 1994
console.log("Numbers sono numberi", età, annoDiNascita)

let maggiorenne = true
let minorenne = false
console.log("Boolean sono veri o falsi", maggiorenne, minorenne)

let sorpresa = undefined
console.log("Undefined non è definito", sorpresa)

let armadio = null
console.log("Null è vuoto", armadio)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Nader"
console.log("Il mio nome", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 20
let sum = a + b
console.log("La somma di a e b", sum)

let c = 12
let d = 20
console.log("La somma di c e d", c + d)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log("Valore di x", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Deghaili"
console.log("il mio cognome", myName)

const mySurname = "Nader"
console.log("il mio nome costante", mySurname)
// try catch è l'unico modo che ho trovato per non bloccare l'esecuzione della console
try {
  mySurname = "Deghaili"
} catch (error) {
  console.log("il mio cognome", error.message)
}
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 4
console.log("sottrazione", number1 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log("sono diversi?", name1 !== name2)
console.log("sono uguali?", name1 === name2)

/* EXTRA */

console.log("sono uguali in lowercase?", name1 === name2.toLowerCase())
console.log("valore di name2", name2)
