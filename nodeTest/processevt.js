// évènement sur process existant sur node
// existe déjà dans node 'exit', 'exitBefore', on y applique une fonction
// l'exit ne se fera qu'à la fin du programme
process.on('exit', () => {
    console.log('fin du programme');
});

process.on('beforeExit', () => {
    console.log('Avant la fin du programme');
});

console.log('début du programme');
console.log('déroulement du programme');

// voir la doc pour les évènements existants sur process
// https://nodejs.org/dist/latest-v10.x/docs/api/process.html

