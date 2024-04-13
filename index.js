require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.use(

    express.urlencoded({
        extended: true
    }),
)

app.use(express.json());

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirestfull.zqrvrid.mongodb.net/?retryWrites=true&w=majority&appName=apirestfull`,
)
.then(() => {
    console.log('Conectado ao banco de dados!');
    app.listen(3001);
})
.catch((err) => {
    console.log('err');
    console.error(err);
});