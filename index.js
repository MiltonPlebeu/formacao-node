const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");

//Database teste de conexão
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão realizada!");
    })
    //Apresenta o erro caso ocorra.
    .catch((msgErro)=>{
        console.log(msgErro);
    })


app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Rotas
app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/perguntar",(req, res) =>{
    res.render("perguntar");

});

app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("<h1>Formulário recebido!</h1> <br> Título: " + titulo +"<br> Descrição: " + descricao);
});

app.listen(8080,()=>{console.log("App rodando!");});
