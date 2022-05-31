const express = require('express');

const router = express.Router();

const apiB3 = require('../../services/api.B3');

// ROTAS DA API B3
router.get('/b3', async (req, res) => {
    const response = await apiB3.get('/api/empresa');
    const companies = response.data;

    res.status(200);
    res.render('pages/companies', {companies: companies});
})

router.get('/b3/:idCompanie', async(req, res) => {
    //const {idCompanie} = req.params;
    let idCompanie = 2;
    const response = await apiB3.get("/api/empresa/"+2+"/cotacoes");
    const quotes = response.data;

    console.log(quotes)

    res.status(200);
})

module.exports = app => app.use('/', router);