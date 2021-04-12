/**
 * DESCRIZIONE
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

$(document).ready(function() {

    //REFERENZE
var size = 5;
var numGenerate = [];
var second = 5;

//GEN NUM CASUALI
while (size > numGenerate.length) {
    numGenerate.push(Math.floor(Math.random()*100));
};
console.log(numGenerate);

//ALERT NUMERI GENERATI
alert('Num gen ' + numGenerate);

//COUNTDOWN 
var intervallo = setInterval(function(){
    if (second > 0) {
        second--;
        console.log(second);
    } else {
        //FINE INTERVALLO
        clearInterval(intervallo);

        //REFERENZE RICHIESTA NUMERI UTENTE
        var richieste = 1;
        var numUtente = [];

        //LOOP RICHIESTA NUM UTENTE
        while (richieste < size) {
            var utente = parseInt(prompt('Inserisci numero ' + richieste + ' di ' + size));
            numUtente.push(utente);
            richieste++;
        };
        console.log(numUtente);
        }
}, 1000);
  





    //END READY DOCUMENT
});