const express = require('express');
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const pug = require('pug');
const path = require('path');
const config = require('./config');
const authToken = require('./middlewares/authToken');
const basicAuth = require('express-basic-auth')
 
// en premier création de l'application
app = express(); // pages publiques
api = express.Router(); // api sécuriser

// utilise le router pour toutes les pages qui commencent par api
// ET SURTOUT NE PAS OUBLIER LE /
app.use('/api', api);

//config.load();
conf = config.load();

// base de données le plus haut possible, si elle crache rien d'autre ne passe
// import de la bibliothèque
Sequelize = require('sequelize');
sequelize = new Sequelize(conf.db.default.url, {
    logging: false // valeur en dev
});

// forcer la création des tables si elle n'existe pas : {force: true} pour la création de la base
sequelize.sync({force: false}).then(() => {
    console.log('La bdd a bien été crée.');
});


// fenêtre login mdp simple, à n'utiliser qu'avec du https
// requete simple
/*
app.use(basicAuth({
    users: { 
        user: {admin: '1234'},
        
        authorizer: (user, password, authorize) => {
            db.query("SELECT * FROM user WHERE user='"+user+ "' AND pass='" + pass)
        } //requête bdd vérif 
       
    },
    challenge: true
}))
*/

// requete sur bdd, on peut vérif

// appel de la fonction token sans les parathèses
// app.use(authToken.token('toto'));

// pour les chemins de fichier
 // console.log(path.join(__dirname, 'views'));
// 'combined' = donne information entrante et sortante
// ('tiny')
// middelwares app.use()
app.use(morgan('tiny')); // mettre en conf
app.use(express.static(path.join(__dirname, 'public'))); // dossier public accessible avec es images

// encodage de l'url : true on peut passer des objet dans l'url donc les objets complexes sont encodées
api.use(bodyParser.urlencoded({ extended:true }));
api.use(bodyParser.json());

 app.use(bodyParser.urlencoded);

// configuration du moteur de template pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = false; // compresser pour la prod

// tranférer dans controller et route
/*
app.get('/', (req, res) => {
    res.render('home', { title: 'Titre de la page' });
});
*/
// chargement des routes
// require('./routes/index)
require(path.join(__dirname, 'routes'));

// démarrage du serveur
app.listen(conf.server.port, () => {
    console.log('Server is running');
});
