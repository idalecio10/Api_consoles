const mongoose = require('mongoose');

const { COLLECTION_APP_MONGODB_HOST, COLLECTION_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${COLLECTION_APP_MONGODB_HOST}/${COLLECTION_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
/*.then(db => console.log('Conectado'))
.catch(err => console.log(err));*/
mongoose.Promise = global.Promise;

module.exports = mongoose;