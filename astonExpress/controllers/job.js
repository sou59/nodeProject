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
    JobService.findAll()
        .then(
            (data) => {
            res.status(201).json(data);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
}


exports.finById = (req, res) => {
    JobService.finById()
        .then(
            (id) => {
            res.status(201).json(id);
        },
        (err) => {
            res.status(500).json(err);
        }
    );
} 


exports.update = (req, res) => {
    res.json({message: 'OK'});
}

exports.delete = (req, res) => {
    res.json({message: 'OK'});
}
