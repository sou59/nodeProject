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

exports.findById = data => {
    return Job.findById(data); // même nom que l'exports ici
}

exports.delete = id => {
    return Job.destroy(id);
}

exports.update = data => {
    return Job.update({
        id: data.id,
        title: data.title,
        company: data.company,
        city: data.city,
        zipcode: data.zipcode,
        description: data.description,
        contractType: data.company,
        startDate: new Date(data.startDate),
        publishedDate: new Date(data.publishedDate)
    }, 
    { where: {id: data.id} }
    );
}


