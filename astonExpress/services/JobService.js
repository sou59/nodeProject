// services/JobService.js

const Job = require('../models/JobModel');

exports.create = data => {
    return Job.create({
        title: data.title,
        company: data.company,
        city: data.city,
        zipcode: data.zipcode,
        description: data.description,
        contractType: data.company,
        startDate: new Date(data.startDate),
        publishedDate: new Date(),
    });
};

exports.findAll = data => {
    return Job.findAll();
};

exports.finById = id => {
    return Job.finById();
}

// id=${req.params.id}

