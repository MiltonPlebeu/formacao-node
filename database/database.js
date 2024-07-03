const Sequelize = require('sequelize');
//const connection = new Sequelize('banco','usuário','senha')...
const connection = new Sequelize('guia-perguntas','guia-perguntas','guia-perguntas',{
    host: 'localhost',
    dialect: 'mysql'
});

//exportar conexão para uso em outros arquivos
module.exports = connection;