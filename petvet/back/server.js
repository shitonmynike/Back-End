const express = require("express");
const app = express();
const cors = require("cors");

const servico = require("./controller/servico");

const env = process.env.AMBIENTE;

// if ternário
let porta = (env == "DEV")? 3003 : 80;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/servico" , servico);




app.listen(porta, function(){
    console.log("começou");
//    console.log(process.env);
});

//MVC
// Model -> dados
// VIew -> visual (front end)
// Controler -> controlador -> regras de negocio




