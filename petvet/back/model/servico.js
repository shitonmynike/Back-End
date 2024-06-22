// CRUD
// Create -> Cadastrar
// Read -> Ler
// Update -> Alterar
// Delete -> Deletar



const mongodb = require("mongodb");
const url_con = "mongodb+srv://shitonmynike:082501@joao.zzcjhw9.mongodb.net/";
const database = "joao"

const mongo = new mongodb.MongoClient(url_con);
const db = mongo.db(database).collection("servicos");

const ObjectID =  mongodb.ObjectId;


/**
 * Deletar o serviço informado
 * @param {string} id
 */
 async function deletar(id)
{
    let novo = new mongodb.ObjectId(id);
    return await db.deleteOne({_id:novo});
    
}

/**
 * Cadastra um novo serviço
 * @param {object} dados 
 */
async function cadastrar(dados)
{
    dados.data_cadastro = new Date();
    dados.preco = parseFLoat(dados.preco);

    let retorno = await db.insertOne(dados);
    return retorno;
    
}


/**
 * @param {string} id | null
 * @returns Array | Object
 * Lista todos os serviços
 */
async function listar(id)
{

    if(!id){
    let retorno = await db.find({});
    return await retorno.toArray();
    }else{
        let retorno = await db.findOne({_id: new mongodb.ObjectId(id)});
        return retorno;
    }
}


/**
 * Altera o registro com um valor novo
 * @param {string} id 
 * @param {object} novo 
 */
async function alterar(id , novo)
{
    novo.data_alterado = new Date();
    let novoId = new mongodb.ObjectId(id);
    let atualizacao = {
        $set: novo
    }
    let retorno = await db.updateOne({_id:novoId} , atualizacao);
    return retorno;
}






module.exports = {
    listar: listar,
    cadastrar: cadastrar,
    deletar: deletar,
    alterar: alterar
}