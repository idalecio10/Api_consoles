const express = require('express');
const cors = require('cors');

/* VARIAVEIS DE AMBIENTE */
require('dotenv').config();
/* VARIAVEIS DE AMBIENTE */


/* DEPRECATED */
//const bodyParser = require('body-parser');
/* DEPRECATED */


const app = express();

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get('/', (req, res) => {
    res.send('Api para cadastro de Consoles e Jogos... Desenvolvido com Node.Js, Express.Js, MongoDB.');
})
require('./controllers/videoGameController')(app);
require('./controllers/gameController')(app);

 

app.listen(3000);