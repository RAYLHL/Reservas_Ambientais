const mysql = require('mysql2');

require('dotenv').config();

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '40028922',
    database: 'instituicao'
});

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar:', erro);
        return;
    }

    console.log('Banco conectado!');
});

module.exports = conexao