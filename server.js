const express = require('express');
const routes = require('./routes/api')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 4001;
const app = express();

app.use(routes)

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
    console.log(`Note taking app listening at http://localhost:${PORT}`)
);
