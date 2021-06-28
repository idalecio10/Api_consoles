const mongoose = require('../database');

const JogoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    /*console_name: {
        type: String,
    },
    console_id: {
        type: String,
    },*/
    videoGame: {
        type: mongoose.Schema.Types.ObjectId,
        req: 'VideoGame',
        require: true,
    },
    /*videoGame2: [{
        type: mongoose.Schema.Types.ObjectId,
        req: '_VideoGame_',
        require: true,
    }],*/
}, {
    timestamps: true
});

const Jogo = mongoose.model('Jogo', JogoSchema);

module.exports = Jogo;