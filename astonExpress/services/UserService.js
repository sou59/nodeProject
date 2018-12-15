// services/JobService.js

const User = require('../models/UserModel');

exports.create = data => {
    return User.create({
        nom: data.nom,
        prenom: data.prenom,
        mdp: data.mdp,
        mail: data.mail
    });
};

exports.find = (attribut) => {
    return User.findOne({
        where: attribut 
    });
}

exports.findAll = data => {
    return User.findAll();
}

exports.delete = (id) => {
    return User.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return User.update(data, { 
        where: { id: data.id } 
    });
}