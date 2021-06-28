const mongoose = require('../database');

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    videogame: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoGame',
        required: true,
    }
});

const GameModel = mongoose.model('GameModel', GameSchema);

module.exports = GameModel;