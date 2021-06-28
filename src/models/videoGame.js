const mongoose = require('../database');

const VideoGameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    /*game: {
        type: mongoose.Schema.Types.ObjectId,
        req: 'Game',
    },*/
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

const VideoGame = mongoose.model('VideoGame', VideoGameSchema);

module.exports = VideoGame;