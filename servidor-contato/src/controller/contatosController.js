const contatosCollection = require("../model/contatoSchema")

const getAll = (request, response) => {
  contatosCollection.find((error,contatos)=>{
    if(error){
      return response.status(500).send(error)
    }else{
      return response.status(200).send(contatos)
    }
  })
};

//método para adicionar um novo contato
const add = (request, response) => {
  // pegando os dados do JSON na request
  const contatoDoBody = request.body
  // validando os dados com o Schema 
  const contato = new contatosCollection(contatoDoBody)
  // salvando o contato caso não dê erros
  contato.save((error) =>{
    //mesmo que if(error!== null && error !== undefined)
  if (error){
    return response.status(400).send(error)
  }else{
    return response.status(201).send(contato)
  }
  })


}
const getByName = (request, response) =>{
  // capturando o parametro inserido na url
  const nomeParametro = request.params.nome;
  //criando um regex para o nome
  const regexNome = new RegExp(nomeParametro, "i");
  // criando um objeto para usar o filtro
  const filtro = {nome: regexNome};
  // realizando a consulta do nome e informando erro caso não encontre
  contatosCollection.find(filtro, (error, contatos) =>{
    if (error){
      return response.status(500).send(error)
    }else{
      if (contatos.length>0){
        return response.status(200).send(contatos)
      }else{
        return response.sendStatus(404)
      }
      
    }
  })
}
//consultando pelo ID
const getById = (request, response) =>{
  const idParametro = request.params.id;
  contatosCollection.findById(idParametro, (error, contato) =>{
    if (error){
      return response.status(500).send(error)
    }else{
      if(contato){
        return response.status(200).send(contato)
      }
      return response.status(404).send("Contato não encontrado")
    }
  })
}
// deletando um contato pelo ID 
const deleteId = (request, response) =>{
  const idParametro = request.params.id;
  contatosCollection.findByIdAndRemove(idParametro, (error, contato) =>{
    if (error){
      return response.status(500).send(error)
    }else{
      if(contato){
        return response.status(200).send("Contato excluído com sucesso")
      }
      return response.status(404).send("Contato não encontrado")
    }
  })  
}


module.exports = {
  getAll,
  add, 
  getByName,
  getById,
  deleteId
}
