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
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNulse: false, 
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        field: 'password',
        allowNulse: false, 
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: 'active',
        allowNulse: false, 
    }
});
 
