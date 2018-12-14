const UserService = require('../services/UserService');

exports.register = (req, res) => {
    res.render('register');
};

exports.login = (req, res) => {
    res.render('login', { title: 'login' });
};

/*
exports.create = (req, res) => {
    UserService.create(req.body)
        .then(
            (data) => {
                res.status(201).json(data);
            },
            (err) => {
                res.status(500).json(err);
            }
        );
}

exports.all = (req, res) => {
    UserService.findAll()
        .then(
            (data) => {
                res.status(200).json(data);
            },
            (err) => {
                res.status(500).json(err);
            }
        );
}


exports.find = (req, res) => {
    UserService.findById(req.params.id)
        .then(
            (data) => {
                res.status(200).json(data);
            },
            (err) => {
                res.status(500).json(err);
            }
        );
}

exports.delete = (req, res) => {
    const id = req.params.id;
    UserService.delete({
        where: { id: id }
    })
        .then(
            (deleteData) => {
                res.status(204).json(deleteData);
            },
            (err) => {
                res.status(500).json(err);
            }
        );
}

exports.update = (req, res) => {
    UserService.update(req.body)
        .then(data => {
            res.status(204).json(); // () ne pas oublier les parenthèses
        },
            err => {
                res.status(204).json(err);
            }
        );
}
*/