const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ContatoSchema =  new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, // usando o tipo object ID
        auto: true, // é gerado automaticamente?
        required: true // é obrigatório?
    },
    nome :{
        type: String,
        require : true,
    
    },
    celular:{
        type: String,
        required: true
    },
    fotoPerfil:{
        required: false
    },
    dataNascimento: {
        type: Date,
        required: true
    }
    
})
// solicitando ao mongo para criar a collection para validação

const ContatosCollection = mongoose.model('contato', ContatoSchema);

// exportando a Schema para outros arquivos utlizarem

module.exports = ContatosCollection