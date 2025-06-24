// Funzione dichiarativa
function somma1(a, b) {
    return a + b;
}
console.log("somma1:", somma1(5, 10));

// Funzione anonima assegnata a variabile
const somma2 = function (a, b) {
    return a + b;
};
console.log("somma2:", somma2(40, 10));

// Funzione arrow
const somma3 = (a, b) => a + b;
console.log("somma3:", somma3(30, 30));