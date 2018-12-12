/* module qui lance un 
server, appel module http
*/
const http = require('http');

module.exports = () => {        // fonction en paramètre
    const server = http.createServer((request, response) => {
        // il est impératif d'envoyer une réponse sinon le server tourne en boucle
        // entête réponse
        response.writeHead(200);
        // message à afficher
        response.end('<h1>Hello World</h1>');
    });
        // ne pas oublier le port pour l'écoute
        server.listen(8000);
}