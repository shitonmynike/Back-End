// CRUD
// Create -> Cadastrar
// Read -> Ler
// Update -> Alterar
// Delete -> Deletar



const mongodb = require("mongodb");
const url_con = "mongodb+srv://shitonmynike:08112501@joao.zzcjhw9.mongodb.net/";
const database = "joao"

const mongo = new mongodb.MongoClient(url_con);
const db = mongo.db(database).collection("servicos");

const ObjectID =  mongodb.ObjectID;


/**
 * Deletar o serviço informado
 * @param {string} id
 */
 async function deletar(id)
{
    let novo = new ObjectId(id);
    return await db.deleteOne({_id:novo});
    
}

/**
 * Cadastra um novo serviço
 * @param {object} dados 
 */
async function cadastrar(dados)
{
    dados.data_cadastro = new Date();


    let retorno = await db.insertOne(dados);
    return retorno;
    
}


/**
 * Lista todos os serviços
 */
async function listar()
{
    let retorno = await db.find({});
    return await retorno.toArray();
}


/**
 * Altera o registro com um valor novo
 * @param {string} id 
 * @param {object} novo 
 */
function alterar(id , novo)
{

}


/**
 * Deleta o serviço
 * @param {object} id 
 */
function deletar(id)
{

}

module.exports = {
    listar: listar,
    cadastrar: cadastrar,
    deletar: deletar,
    alterar: alterar
}