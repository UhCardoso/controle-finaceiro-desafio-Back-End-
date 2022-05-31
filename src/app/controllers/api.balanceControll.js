const express = require('express');

// Importação de funções uteis 
const checkEmptyFields = require('../../utils/checkEmptyFields');
const concatenateOperator = require('../../utils/concatenateOperator');

// Model import
const Expense = require('../models/Expense');

const router = express.Router();

// ROTAS DA API DE SALDO 
router.get('/api/balance', async (req, res) => {
    const expenses = await Expense.findAll();
    
    res.status(200);
    return res.json(expenses)
});

router.post('/api/balance/create', async(req, res) => {
    try {
        let {name, value, operator} = req.body;
        name = name.trim();

        // Funçao concatenar operator e valor transação
        value = concatenateOperator(operator, value);

        // Verificar se campos da requisição estão vazios
        let fieldIsEmpty = checkEmptyFields(name, value, operator);

        if(fieldIsEmpty) {
            res.status(400)
            return res.redirect('/');
        } else {
            try {
                await Expense.create({
                    name,
                    value
                });

                res.status(201);
                return res.redirect('/')
            } catch (err) {
                res.status(500);
                return res.redirect('/');
            }
        }
    } catch(err) {
        res.status(500);
        res.redirect('/');
    }
});

router.post('/api/balance/updade/:expenseId', async(req, res) =>{
    try {
        let {name, value, operator} = req.body;
        let {expenseId} = req.params;
        name = name.trim();

        // Funçao concatenar operator e valor transação
        value = concatenateOperator(operator, value);

        // Verificar se campos da requisição estão vazios
        let fieldIsEmpty = checkEmptyFields(name, value, operator);

        if(fieldIsEmpty) {
            res.status(400)
            return res.redirect('/');
        } else {
            try {
                await Expense.update({
                    name,
                    value
                }, {
                    where: {
                        id: expenseId
                    }
                })

                res.status(201);
                return res.redirect('/')
            } catch (err) {
                res.status(500);
                return res.redirect('/');
            }
        }
    } catch(err) {
        res.status(500);
        res.redirect('/');
    }
});

router.post('/api/balance/delete/:expenseId', async(req, res) =>{
    const {expenseId} = req.params;

    try {
        await Expense.destroy({
            where: {
                id: expenseId
            }
        });

        res.status(201);
        return res.redirect('/');
    } catch(err) {
        res.status(500);
        return res.redirect('/');
    }
});

module.exports = app => app.use('/', router);