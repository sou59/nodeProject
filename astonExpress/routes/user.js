// appel controllers
const controllers = require('../controllers/user');

app.get('/register', controllers.register);

/*
app.post('/register', controllers.create);

app.get('/login', controllers.login);
*/