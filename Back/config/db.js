const mysql = require('mysql2');

require('dotenv').config();

const conexao = mysql.createConnection({
    host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: 'yVQTtJEoPR4reqD.root',
     password: 'IPlDkUqKLSosj1dq',
    database: 'instituicao',
    ssl: {
        rejectUnauthorized: false
    }
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro:', err);
        return;
    }

    console.log('Conectado ao TiDB!');
});
module.exports = conexao