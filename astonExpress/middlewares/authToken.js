/*
parametre route
/jos/:id === req.params.id
/?token=abcd === req.query.token
/jobs === rea.body.name pour (post)

*/
// le middleware 3 paramètres : raq, res, next : la suite

// pass permet de modifier le pass dans app et dans app on peut le modifier
// closure
exports.token = (pass) => {
        return (req, res, next) => {
            console.log('My midelware')
            const token = req.query.token;
            if(token !== pass) {
                res.json({error: 'degage!'});
            } else {
                next();
            }
        };
    };