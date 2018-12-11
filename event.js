// en node : un fichier = un module
// créationde nos propres évènements
// dans la bibliothèque node il y a les event
// pour importer une bibliothèque 'require()'
// attention si ce n'est pas une biliothèque à nous ne pas oublier de mettre le chement
const events = require('events');

const eventEmitter = new events.EventEmitter();
// à partir de cet objet je peux définir des évènements : emettre => y ajouter des méthodes pour écouter les évènements:
// emit -- créer et envoie l'event dans la loop node
// on -- pour écouter comme un addEcentListener
// évènement qui débute (nom que l'on veut (start ou toto))
// le on permet d'écouter l'évènement
eventEmitter.on('start', () => {
    console.log('Application is starting...')
}); 

// à l'intérieur d'un on on peut emettre un deuxième évènement
eventEmitter.on('start', () => {
    console.log("L'application démarre...");
    eventEmitter.emit('end', 'toto'); 
    // envoit end plus une donnée caractère, objet...
    //ici on emet un event end avec la valeur toto
}); 

eventEmitter.on('end', (name) => {
    console.log('Fin du programme pour ' + name); // affichera toto
});

eventEmitter.emit('start'); // signal




