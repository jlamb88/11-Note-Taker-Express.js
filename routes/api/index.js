const router = require('express').Router()
const db = require('../../db/db.json')
const fs = require('fs')
const app = require('express')

const notesRoute = ('./notes')

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

router.use('/notes', notesRoute)

module.exports = router