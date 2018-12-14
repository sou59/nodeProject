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

exports.findAll = data => {
    return User.findAll();
};

exports.findById = data => {
    return User.findById(data); // même nom que l'exports ici
}

exports.delete = id => {
    return User.destroy(id);
}

exports.update = data => {
    return User.update({
        id: data.id,
        nom: data.nom,
        prenom: data.prenom,
        mdp: data.mdp,
        mail: data.mail
    }, 
    { where: {id: data.id} }
    );
}


