const events = require('events');

class Image {

    constructor() {
        this.eventEmitter = new events.EventEmitter;
    }

    do() {
        this.toNb();
        this.crop();
        this.eventEmitter.emit('end'); // donner un nom end ou autre
    }

    toNb() { // changement couleur
        console.log('Changement de couleur en noir et blanc !');
    }

    crop() { // recadrage image
        console.log("Recadrage de l'image");
    }

    on(eventName, callback) {
        this.eventEmitter.on(eventName, callback);
    }
}

// utilisation de la fonction on créer dans la classe ci-dessus
const img = new Image(); // instanciation de l'image

// utilisation de la fonction on
img.on('end', () => {
    console.log('Je suis à la fin du traitement');
});

// appel de la fonction do() sur l'image
img.do();

// dans la console : node Image + tab

