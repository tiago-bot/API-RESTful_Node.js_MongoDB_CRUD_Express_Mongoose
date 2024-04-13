const router = require('express').Router();
const Person = require('../models/Person');



router.post('/', async (req, res) => {
    const { name, age, approved } = req.body;
    if (!name || !age || approved === undefined) {
        return res.status(400).json({ error: 'Dados inválidos' });
    }
    const person = new Person({ name, age, approved });
    try{
       await Person.create(person);
       res.status(201).json({ message: 'Pessoa criada com sucesso' }); 
    } catch (err) {
        return res.status(500).json({ error: 'Erro ao criar pessoa' });
    }
    res.json(person);
});

router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (err) {
        return res.status(500).json({ error: 'Erro ao buscar pessoas' });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const person = await Person.findById(id);
        if (!person) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }
        res.status(200).json(person);
    } catch (err) {
        return res.status(500).json({ error: 'Erro ao buscar pessoa' });
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, age, approved } = req.body;

    const person = { name, age, approved };
    try {
        const updatedPerson = await Person.findOneAndUpdate({ _id: id }, person, { new: true });
        if (!updatedPerson) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        // Exclua o campo _id do objeto antes de enviar a resposta
        delete updatedPerson._id;
        res.status(200).json(updatedPerson);

    } catch (err) { 
        return res.status(500).json({ error: 'Erro ao atualizar pessoa' });
    }
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const person = await Person.findOne({ _id: id });
    if (!person) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
    }
    try{
        await Person.deleteOne({ _id: id });

        res.status(200).json({ message: 'Pessoa deletada com sucesso' });

    } catch (err) {
        return res.status(500).json({ error: 'Erro ao deletar pessoa' });
    }
});


module.exports = router;