// Crea un generatore di funzioni creaTimer.
function creaTimer(tempo) {
    return function () {
        console.log(`parte il timer ${tempo} ms`)
        setTimeout(() => {
            console.log('Tempo scaduto')
        }, tempo)
    }
}


const tempoRimasto = creaTimer(3000)

tempoRimasto()

