const express = require('express');
const router = express.Router();
const controller = require('./jogadorController');

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = controller.getById(id);
    res.send(result);
})
    .get('/', (req, res) => {
        const result = controller.getAll();
        res.send(result);
    })
    .delete('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        controller.remove(id);
        const result = `Jogador de id: ${id} foi removido`
            + controller.jogadores.size;
        res.send(result);
    })
    .post('/', (req, res) => {
        const person = req.body;
        const result = controller.save(person);
        res.send(result);
    })
    .put('/', (req, res) => {
        const person = req.body;
        if (person.id) {
            const result = controller.save(person);
            res.send(result);
        }
    });
module.exports = router;