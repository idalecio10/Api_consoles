require('dotenv').config();
const express = require('express');

/* DEPRECATED */
//const bodyParser = require('body-parser');
/* DEPRECATED */

const app = express();

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./controllers/videoGameController')(app);
require('./controllers/jogoController')(app);


app.listen(3000);