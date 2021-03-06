const express = require('express');

const VideoGame = require('../models/videoGame');

const router = express.Router();

router.post('/videogame', async (req, res) => {
    const { name, company } = req.body;

    try {
        if (await VideoGame.findOne({ name }))
            return res.status(400).send({ success: 'false', message: 'VideoGame já existe' });

        const data = await VideoGame.create(req.body);

        return res.send({ success: 'true', message: 'Sucesso', data });
    } catch (err) {
        if(company === undefined) {
            return res.status(400).send({ success: 'false', message: 'Campo company é obrigatório' });
        }
        return res.status(400).send({ success: 'false', message: 'Erro ao registrar Video Game!' });
    }
});

router.get('/videogame', async (req, res) => {
    try {
        const data = await VideoGame.find();

        return res.send({ data });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todos Videos games!' });
    }
});

router.get('/videogame/:videogameId', async (req, res) => {
    try {
        const data = await VideoGame.findById(req.params.videogameId);

        return res.send({ data });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar Video game!' });
    }
});

module.exports = app => app.use('/', router);