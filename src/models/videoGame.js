const mongoose = require('../database');

const VideoGameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    company: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

const VideoGame = mongoose.model('VideoGame', VideoGameSchema);

module.exports = VideoGame;