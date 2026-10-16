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

/* function generaNumero() {
    return Math.floor(Math.random() * 6) + 1;
}

function tiraDado() {
    const numero = generaNumero();
    alert(`Hai ottenuto: ${numero}`);
}
 */
/* -------------------Esercizio Finale------------------------- */

/* function calcolaArea(base, altezza) {
    return base * altezza;
}

function areaRettangolo() {
    const risultato = calcolaArea(12, 7);
    alert(`L'area del rettangolo è: ${risultato}`);
}

function calcolaIva(prezzo, iva) {
    return prezzo + (prezzo * iva) / 100;
}

function prezzoConIva() {
    const risultato = calcolaIva(85, 22);
    alert(`Costo Iva inclusa: ${risultato}`);
}
 */

/* const prodotti = ["penna", "cartella", "zaino"];

prodotti.forEach(prodotto => {
    console.log(prodotto);
}) */

/* *********************************************************************** */

/* Arrow function & Metodi */

/* const prezzi = [22, 34, 52, 102];

const nuoviPrezzi = prezzi.map(prezzo =>
    prezzo * 2)

console.log(nuoviPrezzi);
 */

/* -------------------Esercizio 1------------------------------- */

/* function calcolaIva(prezzo) {
    const prezzoConIva = prezzo + (prezzo * 22) / 100;
    return prezzoConIva;
}

console.log(calcolaIva(85));
 */

/* const calcolaIva = prezzo => prezzo + (prezzo * 22) / 100;

console.log(calcolaIva(85));
 */

/* -------------------Esercizio 2------------------------------- */

/* const articoli = ["latte", "pane", "uova"];

articoli.forEach(articolo => {
    console.log(`${articolo}: Articolo presente`);
});
 */

/* -------------------Esercizio 3------------------------------- */

/* const prezzi = [15, 25, 35];

const prezziScontati = prezzi.map(prezzo => prezzo * 0.9);

console.log(prezziScontati);
 */

/* -------------------Esercizio 4------------------------------- */

/* const prodotti = ["latte", "pane", "uova"];

const trovato = prodotti.find(prodotto => prodotto.includes("e"));

console.log(trovato);
 */

/* -------------------Esercizio 5------------------------------- */

/* const numeri = [4, 9, 12, 3];

const numeriValidi = numeri.filter(numero => numero >= 5);

console.log(numeriValidi);
 */

/* -------------------Esercizio 6------------------------------- */

/* 
const numeri = [2, 4, 7];

const numeriDispari = numeri.some(numero => numero % 2 !== 0);

console.log(numeriDispari);
 */

/* -------------------Esercizio 7------------------------------- */

/* const importi = [20, 15, 18];

const minimum = importi.every(importo => importo >= 10);

console.log(minimum);
 */


/* -------------------Esercizio Finale------------------------------- */

const lista = [{ prodotto: "Pantalone", prezzo: 20 },
{ prodotto: "T-shirt", prezzo: 25 },
{ prodotto: "felpa", prezzo: 35 },
{ prodotto: "scarpe", prezzo: 70 }
];

const listaProdotti = lista.forEach(articolo => {
    console.log(`${articolo.prodotto}: Disponibile`);
})

const applicaSconto = lista.map(articolo => {
    let sconto = articolo.prezzo * 0.9;
    console.log(sconto);
});

const trovato = lista.find(articolo => articolo.prodotto.includes("scarpe"));

console.log(trovato);

const piùCostoso = lista.filter(articolo => articolo.prezzo >= 30);

console.log(piùCostoso);

const piùEconomico = lista.some(articolo => articolo.prezzo <= 30);

console.log(piùEconomico);

const prezziValidi = lista.every(articolo => articolo.prezzo >= 10);

console.log(prezziValidi);

const calcolaSconto = prezzo => prezzo * 0.9;
console.log(calcolaSconto(lista[1].prezzo));