const UserService = require('../services/UserService');


exports.register = (req, res) => {
    res.render('register', { title: "register" });
};

// sequilize index.js à true
exports.registerapi = (req, res) => {
    UserService.registerapi(req.body)
        .then(
            user => {
                res.status(201).json(user);
            },
            err => {
                console.log(err.original.sqlMessage);
                res.status(500).json({ message: "Internal Server Error" });
            }
        );
};

exports.authentication = (req, res) => {
    UserService.authenticate(req.body).then(
        user => {
            // console.log(user); -> message très long
            res.json(user);
        },
        err => {
          //  console.log(err.toString());
            res.status(401).json({message: err.message }); // erreur dans le json si pas de user
        }
    )
};

// authenticate = login
/*
exports.login = (req, res) => {
    res.render('login', { title: 'login' });
};
*/
/*
exports.create = (req, res) => {
    UserService.create(req.body).then(
        (data) => {
            res.redirect("/");
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.findAll = (req, res) => {
    UserService.findAll(req.body).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.find = (req, res) => {
    UserService.find({ id: req.params.id }).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.update = (req, res) => {
    UserService.update(req.body).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};

exports.delete = (req, res) => {
    UserService.delete(req.params.id).then(
        (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
};
*/