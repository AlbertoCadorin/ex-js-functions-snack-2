// Funzione che crea un contatore automatico

function creaContatoreAutomatico(intervallo) {
    return function () {
        let contatore = 0;
        const id = setInterval(() => {
            contatore++;
            console.log(contatore);
        }, intervallo);
        return id;
    }
}

// Esempio di utilizzo:
const avviaContatore = creaContatoreAutomatico(1000);
const idContatore = avviaContatore();

// Per fermare il contatore dopo 10 secondi
setTimeout(() => {
    clearInterval(idContatore);
    console.log("Contatore fermato!");
}, 10000);