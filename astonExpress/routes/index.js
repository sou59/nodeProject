// routes/index.js

const controllers = require('../controllers');

app.get('/', controllers.home);


require('./job');