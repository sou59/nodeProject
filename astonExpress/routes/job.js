// routes/jobs.js

// appel controllers
const controllers = require('../controllers/job');

// localhost:3000/api/jobs
api.post('/jobs', controllers.create);

// localhost:3000/api/jobs
api.get('/jobs', controllers.all);

// localhost:3000/api/jobs/5
api.delete('/jobs/:id', controllers.delete);

// localhost:3000/api/jobs
api.put('/jobs', controllers.update);

// localhost:3000/api/jobs/5
api.get('/jobs/:id', controllers.find);