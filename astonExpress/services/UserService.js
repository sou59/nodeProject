// services/JobService.js

const UserModel = require('../models/UserModel');
const bcryptPassword = require('../modules/bcrypt-password');

// fonction utisable partout
function create(data) {
    return UserModel.create({
        name: data.name,
        email: data.email,
        password: data.password,
        active: true
    });
}

// vérifie si email existe dans la base
function findByMail(email) {
    return UserModel.findOne({
        where: { email: email },
    });
}

// ici génération du hash et appel à la fonction create
exports.registerapi = data => {
    return bcryptPassword.hash(data.password).then(
        hash => {
            data.password = hash; // 1er fonction on hash le mdp
            return create(data); // retourne les data avec le mdp hashé
        }
    );
};

exports.authenticate = data => {
    // vérifier que le login et mdp existe dans la base de données
    return findByMail(data.email).then(
        user => { // arguments = fonctions callback -> réupère l'utilisateur
            if (!user) {
                throw new Error("User Not Found"); // si error le code s'arrête ici
            }
            return bcryptPassword.verify(data.password, user.password).then( // 2 valeurs à comparer
                isOk => { //
                    if (!isOk) {
                        throw new Error("Password invalid");;
                    }
                    return user;
                }
            )
        }
    );
};

exports.create = create;
exports.findByMail = findByMail;

/*
exports.create = data => {
    return UserModel.create({
        name: data.name,
        email: data.email,
        password: data.password,
        active: data.active
    });
};
*/

/*
exports.find = (attribut) => {
    return UserModel.findOne({
        where: attribut
    });
}

exports.findAll = data => {
    return UserModel.findAll();
}

exports.delete = (id) => {
    return UserModel.destroy({
        where: { id: id }
    });
}

exports.update = (data) => {
    return UserModel.update(data, {
        where: { id: data.id }
    });
}
*/