/// fs.readdir(path[, options], callback) 
// callback liste les répertoire

// fs.readdirSync(path[, options])
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

// . chemin courant
fs.readdir('.', (err, files) => {
    eventEmitter.emit('end', 'files'); 

    eventEmitter.on('end', () => {
        console.log('Mes fichiers...' + files)
    }); 

    if (err) throw err;
    console.log(files);

  });


