const Sequelize = require('sequelize');
const sequelize = new Sequelize('appsaldo', 'root', '20001wer', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};