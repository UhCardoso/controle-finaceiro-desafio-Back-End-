const express =require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// View engine config
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static('public'));

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