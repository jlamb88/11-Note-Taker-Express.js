const express = require('express');
const api = require('./routes/api')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'index.html'))
);
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(PORT, () =>
    console.log(`Note taking app listening at http://localhost:${PORT}`)
);

