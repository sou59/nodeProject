// models/JobModel.js

module.exports = sequelize.define('user', {
    nom: {
        type: Sequelize.STRING,
        field: 'nom',
        allowNulse: false, 
    },
    prenom: {
        type: Sequelize.STRING,
        field: 'prenom',
        allowNulse: false, 
    },
    mdp: {
        type: Sequelize.STRING,
        field: 'mdp',
        allowNulse: false, 
    },
    mail: {
        type: Sequelize.STRING,
        field: 'mail',
        allowNulse: false, 
        unique: true
    }
});
 
