// horloge
// ex. barre qui donne l'impression de tourner
// chars, \r , boucle, setInterval, 
// tableau caractère
// boucle sur le tableau
// tous les tant de tant tu passe aus suivant
// création d'un compteur aui revient à zero quand il aura fais le tour des carctères

let counter = 0; // compteur
let chars = ['-', '\\', '|', '/']; // tab de caractère

setInterval(function() {
    if(counter==chars.length) {
        counter=0; // réinitailise le compteur qd on arrive à la fin du tableau
    }
    
    // template string entre backtik avec varible ${}
    process.stdout.write(`\r${chars[counter]} loading...`); //${} ici variable
    counter++;

}, 1000/2); // 1000 ms/10