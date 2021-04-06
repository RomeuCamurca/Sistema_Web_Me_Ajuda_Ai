const colega = ({
    nome: {
        type: String,
        require: true
    },
    curso: {
        type: String,
        require: true
    },
    foto: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    whatsapp: {
        type: Number,
        require: true
    },
    conteudo: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    }
})

module.exports = colega;