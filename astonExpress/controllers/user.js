const UserService = require('../services/UserService');

exports.register = (req, res) => {
    res.render('register');
};

exports.login = (req, res) => {
    res.render('login', { title: 'login' });
};

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
    UserService.find({id: req.params.id}).then(
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
