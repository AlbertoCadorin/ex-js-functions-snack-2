// Funzione che stampa un messaggio ogni secondo 

function stampaOgniSecondo(messaggio) {
    const id = setInterval(() => {
        console.log(messaggio);
    }, 1000);
    return id;
}


const intervallo = stampaOgniSecondo("Messaggio ogni secondo!");

// Esempio: ferma il ciclo dopo 5 secondi
setTimeout(() => {
    clearInterval(intervallo);
    console.log("Intervallo fermato!");
}, 5000);