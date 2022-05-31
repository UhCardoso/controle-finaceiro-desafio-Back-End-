const db = require('../../database');

const Expense = db.sequelize.define('expenses', {
    name: {
        type: db.Sequelize.STRING
    },
    value: {
        type: db.Sequelize.INTEGER
    }
})

//Expense.sync({force: true});

module.exports = Expense;