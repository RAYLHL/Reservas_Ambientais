const express = require('express');
const cors = require('cors');

require('dotenv').config();

const individuoRoutes = require('./routes/individuoRoutes');
const comunicacaoRoutes = require('./routes/comunicacaoRoutes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/individuos', individuoRoutes);
app.use('/comunicacoes', comunicacaoRoutes);


app.get('/', (req, res) => {
    res.send('GG!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});