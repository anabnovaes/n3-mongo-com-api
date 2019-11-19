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



  // let baseDados = contatosCollection.agenda.contatos


  // if (!contato.nome || !contato.dataNascimento || !contato.celular) {
  //   response.status(400).send("Dados inválidos");
  // } else {
  //   if (baseDados.find(dado => dado.nome === contato.nome)) {
  //     response.status(400).send("Contato já cadastrado")
  //   } else {
  //     contatosCollection.agenda.contatos.push(contato)
  //     response.status(201).send(contato)
  //   }
  // }

}

module.exports = {
  getAll,
  add
}
