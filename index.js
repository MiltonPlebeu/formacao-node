const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/perguntar",(req, res) =>{
    res.render("perguntar");

});

app.post("/salvar-pergunta",(req, res) => {
    res.send("Formulário recebido!!!");
});

app.listen(8080,()=>{console.log("App rodando!");});
