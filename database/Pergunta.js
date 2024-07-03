//Model para Pergunta
const Sequelize = require("sequelize");
const connection = require("./database");

//Cria tabela Pergunta no banco
const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING, allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT, allowNull: false
    }

});
//Executa a criação da tabela
Pergunta.sync({force: false}).then(()=>{}); 