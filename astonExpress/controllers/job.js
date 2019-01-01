// controllers/job.js
// mettre les fonction sen bas, et exports en haut comme un sommaire

const JobService = require('../services/JobService')

exports.create = (req, res) => {
    JobService.create(req.body)
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
    console.log(req.payload); // on peut récupérer les infos partout

    JobService.findAll()
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
    JobService.findById(req.params.id)
        .then(
            (data) => {
                res.status(200).json(data);
            },
            (err) => {
                res.status(500).json(err);
            }
        );
}


exports.update = (req, res) => {
    JobService.update(req.body)
        .then(data => {
            res.status(204).json(); // () ne pas oublier les parenthèses
        },
            err => {
                res.status(204).json(err);
            }
        );
}

exports.delete = (req, res) => {
    const id = req.params.id;
    JobService.delete({
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
