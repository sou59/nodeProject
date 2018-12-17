// génère ou vérifie mdp
const bcrypt = require('bcrypt');

// hachage du mdp, ici c'est une promise en ashynchrone
exports.hash = plainTextPassword => {
    return bcrypt.hash(plainTextPassword, 10);
};

// vérif mdp
exports.verify = (plainTextPassword, hash) => {
    return bcrypt.compare(plainTextPassword, hash);
};