const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile');

const db = knex(knexfile.development)

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({message: "failed to retrieve cars"})
    });
});

router.post('/', (req, res) => {
    db('cars')
    .insert(req.body)
    .then(cars => {
        res.status(201).json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to store data'})
    })
})

module.exports = router;