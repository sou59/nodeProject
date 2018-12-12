const express = require('express');
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const pug = require('pug');
const path = require('path');
const config = require('./config');



app = express();

//config.load();
console.log(config.load());


// pour les chemins de fichier
 // console.log(path.join(__dirname, 'views'));
// 'combined' = donne information entrante et sortante
// ('tiny')
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public'))); // dossier public accessible avec es images

// configuration de base

app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = false;

app.get('/', function(req, res) {
    res.render('home', { title: 'Toto' });
});

app.listen(3000, () => {
    console.log('Server is running');
});
