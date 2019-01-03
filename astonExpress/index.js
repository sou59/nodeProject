const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pug = require('pug');
const path = require('path');
const config = require('./config');
const cors = require('./middlewares/cors');
const cookieParser = require('cookie-parser');
const jwtCheck = require('./middlewares/jwt-check');
const dbPassword = '$2b$10$20VHqNYTiKy4u7Ivi26k3O7zoEkhXQA33TOB4indGW5vJMs8sCaGq';
const authToken = require('./middlewares/auth-token');
const basicAuth = require('express-basic-auth');
const modulejwt = require('./modules/jwt');
const jwt = require('jsonwebtoken');
const https = require('https');
const pem = require('pem');
const fs = require('fs');

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:4200'
};

// en premier création de l'application
app = express(); // pages publiques
api = express.Router(); // api sécuriser

// utilise le router pour toutes les pages qui commencent par api
// ET SURTOUT NE PAS OUBLIER LE /
app.use('/api', api);

//config.load();
conf = config.load();
console.log(conf.db.default.url);

// base de données le plus haut possible, si elle crache rien d'autre ne passe
// import de la bibliothèque
Sequelize = require('sequelize');
sequelize = new Sequelize(conf.db.default.url, {
    logging: true, // valeur en dev
    //freezeTableName: true,
    operatorsAliases: false
});

// forcer la création des tables si elle n'existe pas : {force: true} pour la création de la base
sequelize.sync({ force: false })
    .then(() => {
        console.log('La bdd a bien été crée.');
    });

/*
/jobs/:id       === req.params.id
/?token=abcd    === req.query.token
/jobs           === req.body.name (POST)
*/

// fenêtre login mdp simple, à n'utiliser qu'avec du https
// requete simple

/*
app.use(basicAuth({
    users: { 'admin': '1234' },
    authorizer: (user, pass, authorize) => {
        db.query('Select * from user where user ="' + user + '" AND pass = "' + pass);
    },
    challenge: true,
}));
*/

// requete sur bdd, on peut vérif

// appel de la fonction token sans les parathèses
// app.use(authToken.token('toto'));

// App

// pour les chemins de fichier
// console.log(path.join(__dirname, 'views'));
// 'combined' = donne information entrante et sortante
// ('tiny')
// middelwares app.use()
app.use(cors(corsOptions));
app.use(morgan('combined')); // mettre en conf
app.use(express.static(path.join(__dirname, 'public'))); // dossier public accessible avec es images
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


// Api
api.use(cors(corsOptions));
api.use(cookieParser());
api.use(jwtCheck);
// encodage de l'url : true on peut passer des objet dans l'url donc les objets complexes sont encodées
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());


// configuration du moteur de template pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true; // compresser pour la prod


/**
 * Démarrage du serveur.
 * 
 * @see https://www.npmjs.com/package/pem#express
 */
pem.createCertificate({ days: 5, selfSigned: true }, (err, keys) => {
    // Chargement des routes.
    require(path.join(__dirname, 'routes'));
    //console.log(keys, err);
 
    https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app)
        .listen(conf.server.port);

    fs.writeFileSync(path.join('data', 'ssl', 'jobs.cert'), keys.certificate, 'utf8');
    fs.writeFileSync(path.join('data', 'ssl', 'jobs.key'), keys.clientKey, 'utf8');
});

/*
// chargement des routes
// require('./routes/index)
require(path.join(__dirname, 'routes'));

// démarrage du serveur
app.listen(conf.server.port, () => {
    console.log('Server is running');
});

*/