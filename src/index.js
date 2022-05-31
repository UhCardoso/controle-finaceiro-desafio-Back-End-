const express =require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// Cors config
app.use((req, res, next) => {
	// Permitir acesso a outros sites
    res.header("Access-Control-Allow-Origin", "*");
	// Permitir metodos HTTP
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

require('./app/controllers/index')(app);

app.listen(3132);