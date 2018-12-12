/// fs.readdir(path[, options], callback) 
// callback qui liste les fichier du répertoire

// on a besoin de la bibliothèque fs
const fs = require('fs');

// on a besoin de la bibliothèque events
const events = require('events');

const eventEmitter = new events.EventEmitter();

// . chemin courant
// 2 argumentes err(si erreur) et files (fichiers)
fs.readdir('.', (err, files) => {
    console.log('Lecture du repértoire');

    // on emet un evènement et transmet les fichiers
    eventEmitter.emit('readFile', 'files'); 

    // on écoute l'évènement
    eventEmitter.on('readFile', () => {
        console.log('Mes fichiers...' + files)
    }); 

    if (err) throw err;
    console.log(files);

  });

  // affiche le tableau des files
eventEmitter.on('readFile', files => {
    for (let file of files) {
        console.log(file);
    }
});
