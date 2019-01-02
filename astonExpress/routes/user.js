// appel controllers
//http://localhost:3000/api/user

const controllers = require('../controllers/user');

//http://localhost:3000/user
app.get('/authentication', controllers.authentication);

app.post('/registerapi', controllers.registerapi);

// vincent authentication = login
//http://localhost:3000/login

app.post('/authentication', controllers.authentication);
api.get('/user/:id', controllers.find);
