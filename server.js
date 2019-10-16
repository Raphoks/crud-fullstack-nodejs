const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const app = express()

const uri = "mongodb+srv://<User>: <Password> @cluster0-qbmse.mongodb.net/test" //Alterar User e Password

 app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index.ejs')
})
app.post('/show', (req,res) =>{
    console.log(req.body)
    db.collection('documents').insert(req.body, (err, result)=>{
        if (err) return console.log(err)
        console.log (result) 
        return res.render('success.ejs', {usuario: result.ops[0]})

    })
})
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}, (err, client)=>{
    if (err) return console.log(err)
    db = client.db('crud-nodejs')
    
    app.listen(3334, function() {
        console.log('server runing port 3334')
    })
})