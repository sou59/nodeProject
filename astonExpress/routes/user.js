// appel controllers
//http://localhost:3000/api/user

const controllers = require('../controllers/user');

api.post('/user', controllers.create);

api.get('/user', controllers.findAll);

api.get('/user/:id', controllers.find);

api.put('/user', controllers.update);

api.delete('/user/:id', controllers.delete);

app.get('/register', controllers.register);

app.get('/login', controllers.login);

app.post('/user', controllers.create);
