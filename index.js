const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// router -> rota
app.get("/alunos", function(req, res){

    let lista = [
        {
            nome: "Pedro",
            email: "pedro@aluno.com",
            cidade: "Curitiba",
            telefone:"(11)1234-4321",
        },
        {
            nome: "Mauro",
            email: "mauro@aluno.com",
            cidade: "Morretes",
            telefone:"(11)9999-4321",
        },
        {
            nome: "Mateus",
            email: "mateus@aluno.com",
            cidade: "Pinhais",
            telefone:"(11)3333-4321",
        },
        {
            nome: "Maria",
            email: "maria@aluno.com",
            cidade: "Campo Largo",
            telefone:"(11)4444-4321",
        }

    ];



    res.json(lista);
});
app.get("/", function(req, res){
    res.send("Pagina inicial");
})

app.listen(3003, function(){
    console.log("servidor iniciado");
});
