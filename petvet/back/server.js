const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));
const servico = require("./controller/servico");

app.use("/servico" , servico);




app.listen(3003, function(){
    console.log("começou");
});

//MVC
// Model -> dados
// VIew -> visual (front end)
// Controler -> controlador -> regras de negocio




