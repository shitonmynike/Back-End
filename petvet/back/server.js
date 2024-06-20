const express = require("express");
const app = express();

const cadServico = require("./model/servico").cadastrar;

app.post("/servico" , async function(req , res){
    let exe = {
        nome: "Banho",
        preco: 40.00,
        profissional: "joao",
        tipo: "Pet"
    };

     let retorno = await cadServico(exe);

     res.json(retorno);



});


app.listen(3000, function(){
    console.log("começou");
});

//MVC
// Model -> dados
// VIew -> visual (front end)
// Controler -> controlador -> regras de negocio




