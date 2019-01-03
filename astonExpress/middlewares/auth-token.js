/*
parametre route
/jos/:id === req.params.id
/?token=abcd === req.query.token
/jobs === rea.body.name pour (post)

*/
// le middleware 3 paramètres : req, res, next : la suite

// pass permet de modifier le pass dans app et dans app on peut le modifier
// closure
/**
 * app.use(authToken('abcd'));
 * http://localhost:3000/?token=abcd
 */
module.exports = (pass) => {
    return (req, res, next) => {
        const token = req.query.token;

        if (token !== pass) {
            res.json({ error: 'Interdit!' });
        } else {
            next();
        }
    };
};