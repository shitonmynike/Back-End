const express = require("express");
const route = express.Router();
const cadServico = require("../model/servico").cadastrar;
const listar = require("../model/servico").listar;
const deletar = require("../model/servico").deletar;



route.post("/novo" , async function(req , res){
    
    try
    {
        let exe = req.body;
        let retorno = await cadServico(exe);
        res.json(retorno);
    }catch{
        res.status(500);
        res.send("Ocorreu um problema no cadastro de dados");
    }


});




route.get("/lista" , async function(req , res) {
    console.log("oi");
    let retorno = await listar();
    res.json(retorno);
});

route.post("/deletar:id" , async function(req , res){
    let id = req.params("id");
    let retorno = await deletar(id);
    res.json(retorno);
});


module.exports = route;