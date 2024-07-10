//Model para Resposta
const Sequelize = require("sequelize");
const connection = require("./database");

//Cria tabela Resposta no banco.     tabela
const Resposta = connection.define("resposta",{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
});

Resposta.sync({force: false});

module.exports = Resposta;
