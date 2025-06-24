// Funzione che stampa un messaggio a intervalli regolari e si ferma dopo un certo tempo

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const id = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(id);
        console.log("Timer fermato!");
    }, tempoStop);
}

// Esempio di utilizzo:
eseguiEferma("ciao", 1000, 5000);