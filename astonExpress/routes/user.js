// appel controllers
//http://localhost:3000/api/user

const controllers = require('../controllers/user');

app.get('/login', controllers.login);
app.get('/register', controllers.register);
app.post('/user', controllers.create);


api.post('/user', controllers.create);

api.put('/user', controllers.update);

api.get('/user/:id', controllers.find);

api.get('/user', controllers.findAll);

api.delete('/user/:id', controllers.delete);


