/* -------------------Esercizio 1------------------------- */

/* function miaEtà() {
    console.log(32);
}

miaEtà();
 */
/* -------------------Esercizio 2------------------------- */

/* const annoCorrente = 2026;
const annoDiNascita = 1994;

function calcolaEtà() {
    return annoCorrente - annoDiNascita;
}

const miaEtà = calcolaEtà();

console.log(`Età: ${miaEtà}`);
 */

/* -------------------Esercizio 3------------------------- */

/* function calcolaArea(base, altezza) {
    return base * altezza;
}

const areaRettangolo = calcolaArea(2, 4);

console.log(areaRettangolo);
 */

/* -------------------Esercizio 4------------------------- */

/* function calcolaCambio(importo, cambio) {
    const risultato = importo * cambio;
    return risultato;
}

console.log(calcolaCambio(5, 0.89)); */

/* -------------------Esercizio 5------------------------- */

/* function calcolaMedia(voto1, voto2, voto3) {
    const media = (voto1 + voto2 + voto3) / 3;
    return media;
}

function valutaStudente(media, minimo) {
    let valutazione = "";
    if (media >= minimo) {
        valutazione = "Studente Promosso";
    } else {
        valutazione = "Studente Bocciato"
    }

    return valutazione;
}

const media = calcolaMedia(5, 4, 3);
const esitoValutazione = valutaStudente(media, 6);

console.log(`Lo studente ha una media di: ${media}. Esito: ${esitoValutazione}`);
 */

/* -------------------Esercizio 6------------------------- */

function generaNumero() {
    return Math.floor(Math.random() * 6) + 1;
}

function tiraDado() {
    const numero = generaNumero();
    alert(`Hai ottenuto: ${numero}`);
}
