const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta"); //Importando Model Pergunta
const Resposta = require("./database/Resposta"); //Importando Model Resposta

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

//Para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Rotas
app.get("/",(req, res)=>{
    Pergunta.findAll({raw: true, order:[['id','desc']]}).then(perguntas =>{
        res.render("index",{
            perguntas: perguntas
        });
    });
    
});

app.get("/perguntar",(req, res) =>{
    res.render("perguntar");

});

app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    //Salvar no banco
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/");
    });

});

app.get("/pergunta/:id",(req,res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where:{id:id}
    }).then(pergunta =>{
        if(pergunta != undefined){ // Pergunta encontrada!
            res.render("pergunta",{
                pergunta:pergunta
            });
        
        }else{ // Se não encontrar a pergunta, redireciona para página principal
            res.redirect("/");
        }
    });
})

app.post("/responder",(req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId);

    });
});

app.listen(8080,()=>{console.log("App rodando!");});
