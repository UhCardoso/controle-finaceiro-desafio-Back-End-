const axios = require('axios');

const apiB3 = axios.create({
    baseURL: 'https://api-cotacao-b3.labdo.it'
});

module.exports = apiB3;