// appel controllers
//http://localhost:3000/api/user

const controllers = require('../controllers/user');

//http://localhost:3000/user
app.get('/register', controllers.register);
app.get('/authentication', controllers.authentication);

app.post('/registerapi', controllers.registerapi);

// vincent authentication = login
//http://localhost:3000/login
//app.get('/login', controllers.login);

app.post('/authentication', controllers.authentication);
api.get('/user/:id', controllers.find);
/*
app.post('/user', controllers.create);

api.post('/user', controllers.create);

api.get('/user', controllers.findAll);

api.get('/user/:id', controllers.find);

api.put('/user', controllers.update);

api.delete('/user/:id', controllers.delete);

*/