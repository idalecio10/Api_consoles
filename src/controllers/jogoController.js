const express = require('express');

const Jogo = require('../models/jogo');
const VideoGame = require('../models/videoGame');

const router = express.Router();

router.post('/jogo', async (req, res) => {
    const { name } = req.body;

    try {
        if (await Jogo.findOne({ name }))
            return res.status(400).send({ success: 'false', message: 'Jogo já existe' });

        const data = await Jogo.create(req.body);

        return res.send({ success: 'true', message: 'Sucesso', data });
    } catch (err) {
        return res.status(400).send({ success: 'false', message: 'Registro falhou' });
    }
});

module.exports = app => app.use('/', router);