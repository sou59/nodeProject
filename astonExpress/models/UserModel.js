// models/JobModel.js

module.exports = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNulse: false, 
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
 
