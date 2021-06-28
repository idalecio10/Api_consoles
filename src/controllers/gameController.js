const express = require('express');

const Game = require('../models/gameModels');
const VideoGame = require('../models/videoGame');

const router = express.Router();

router.post('/jogo', async (req, res) => {
    const { name, console_id } = req.body;

    try {
        if (await Game.findOne({ name }))
            return res.status(400).send({ success: 'false', message: 'Jogo já existe' });

        const data = await Game.create(req.body);

        return res.send({ success: 'true', message: 'Sucesso', data });
    } catch (err) {
        if(console_id === undefined) {
            return res.status(400).send({ success: 'false', message: 'Campo console_id é obrigatório!' });
        }
        return res.status(400).send({ success: 'false', message: 'Registro falhou' });
    }
});

router.get('/jogo', async (req, res) => {
    try {
        const data = await Game.find().populate('videogame');

        return res.send({ success: 'true', message: 'Sucesso', data });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar todos Jogos!' });
    }
});

router.get('/jogo/:jogoId', async (req, res) => {
    try {
        const data = await Game.findById(req.params.jogoId).populate('videogame');

        if(data) {
            return res.send({ success: 'true', message: 'Sucesso', data });
        } else {
            return res.status(400).send({ success: 'false', message: 'Sem sucesso' });
        }
        //return res.send({ success: 'true', message: 'Sucesso', data });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar Video game!' });
    }
});

router.get('/jogo/videogame/:videogameId', async (req, res) => {
    try {
        //const data = await Game.findById(req.params.jogoId).populate('videogame');
        const data = await Game.find({videogame: req.params.videogameId}).populate('videogame');

        return res.send({ success: 'true', message: 'Sucesso', data });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar Video game!' });
    }
});

module.exports = app => app.use('/', router);