// services/JobService.js

const JobModel = require('../models/JobModel');

exports.create = data => {
    return JobModel.create({
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
    return JobModel.findAll();
};

exports.findById = data => {
    return JobModel.findById(id); // même nom que l'exports ici
}

exports.delete = id => {
    return Job.findById(id).then(
        data => {
            data.destroy();
        }
    );
}

exports.update = data => {
    return JobModel.update({
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
        { where: { id: data.id } }
    );
}


