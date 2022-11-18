const router = require('express').Router()
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fsUtils');
const { json } = require('express')
const uuid = require('../../helpers/uuid');
const database = require('./db/db.json')


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/notes', (req, res) => {
    const { title, text } = req.body
    if (title) {
        note = {
            id: uuid(),
            title,
            text
        }
        readAndAppend(note, './db/db.json')
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    }
    else {
        res.json({ msg: 'Please enter title' })
    }
})

module.exports = router