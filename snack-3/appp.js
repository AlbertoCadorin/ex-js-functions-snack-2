// Crea una funzione `eseguiOperazione`.

function eseguiOperazione(num1, num2, operazione) {
    return operazione(num1, num2);
};

const moltiplicazione = (num1, num2) => num1 * num2;
const somma = (num1, num2) => num1 + num2;
const sottrazione = (num1, num2) => num1 - num2;

console.log(eseguiOperazione(2, 8, moltiplicazione));
console.log(eseguiOperazione(2, 7, somma));
console.log(eseguiOperazione(6, 60, sottrazione));