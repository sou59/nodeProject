// routes/index.js

/**
 * Une route est liée a un controller
 * le controlleur fait appel au service
 * le service fait appel au model
 * le model permet d'effectuer toutes les operations d'une table dans la BDD
*/
const controllers = require('../controllers');

app.get('/', controllers.home);

require('./job');
require('./user');
