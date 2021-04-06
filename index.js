const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const ColegaSchema = require('./public/js/colegaSchema')
const db_uri = require('./config/db')
const PORT = process.env.PORT || 3000

// config mongoDb
mongoose.Promise = global.Promise

mongoose.connect(db_uri.mongoURI).then(() => {
}).catch(() => {
    console.log('erro ao conectar com o banco...')
})

mongoose.model('colega', ColegaSchema)

const colegaBanco = mongoose.model('colega')

// config express
const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extend: true}))
app.use(express.json())

// config handlebars
app.engine('handlebars', handlebars({defaultLayout: null}))
app.set('view engine', 'handlebars')

// rotas
app.get('/', (request, response) => {
    response.render('home')
})

app.get('/helping-colleague', (request, response) => {
    response.render('cadastrar-dados')
})

app.post('/helping-colleague', (request, response) => {
    
    new colegaBanco({
        nome: request.body.nome,
        curso: request.body.curso,
        foto: request.body.foto,
        email: request.body.email,
        whatsapp: request.body.whatsapp,
        conteudo: request.body.conteudo,
        descricao: request.body.descricao
    }).save().then(() => {
        return response.redirect('/find-help')
    }).catch((error) => {
        return response.redirect('/error')
    })
})


app.get('/find-help', (request, response) => {
    
    colegaBanco.find().then((colegas) => {
        return response.render('listagem-completa', {
            colegas: colegas.map(colega => colega.toJSON())
        })
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.get('/details/:id', (request, response) => {
    
    colegaBanco.findOne({
        _id: request.params.id
    }).then((colega) => {
        return response.render('detalhes-dados', {
            colega: colega.toJSON()
        })
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.get('/export', (request, response) => {
    colegaBanco.find().then((colegas) => {
        return response.render('exportar-dados', {
            colegas: colegas.map(colega => colega.toJSON())
        })
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.get('/delete', (request, response) => {
    colegaBanco.find().then((colegas) => {
        return response.render('deletar-dados', {
            colegas: colegas.map(colega => colega.toJSON())
        })
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.get('/delete/:id', (request, response) => {
    colegaBanco.deleteOne({
        _id: request.params.id 
    }).then(() => {
        response.redirect('/delete')
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.get('/edit', (request, response) => {
    colegaBanco.find().then((colegas) => {
        return response.render('editar-dados', {
            colegas: colegas.map(colega => colega.toJSON())
        })
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.get('/edit/:id', (request, response) => {
    colegaBanco.findOne({
        _id: request.params.id
    }).then((colega) => {
        response.render('editar', {
            colega: colega.toJSON()
        })
    }).catch(() => {
        return response.redirect('/error')
    })
})

app.post('/edit-data', (request, response) => {
    colegaBanco.findOne({
        _id: request.body.id
    }).then((colega) => {
        colega.nome = request.body.nome
        colega.curso = request.body.curso
        colega.foto = request.body.foto
        colega.email = request.body.email
        colega.whatsapp = request.body.whatsapp
        colega.conteudo = request.body.conteudo
        colega.descricao = request.body.descricao

        colega.save().then(() => {
            return response.redirect('/find-help')
        }).catch(() => {
            return response.redirect('/error')
        })
    })
})

app.get('/error', (request, response) => {
    response.render('error')
})

app.listen(PORT, () => {
    console.log('Servidor Web executando na porta: ' + PORT)
})