// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();

let fs      = require('fs'),
    path    = require('path'),
    async   = require('async');

// --- Config Express
// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser'),
    busboy     = require('connect-busboy'),
    helmet = require('helmet');

// -- Recommandation secu d'expressJs
app.use(helmet());
app.disabled('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(busboy());

// Connection base de donnée
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let database = mongoose.connect(
    "mongodb://mongo/demo",
    {
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// Charger le model
const PizzaModel = require('./Pizza');
const Pizza = mongoose.model('Pizza');
// toto
// ------------------------
// LIST ROUTE ou EndPoint
// ------------------------
// -- Listes des type de pizza
app.get('/pizzaType', function (req, res) {
    Salad.find({}).then((type)=>{
        res.status(200).json(type)
    },(err)=>{
        res.status(400).send(err)
    })
});

// -- Consulter une pizza
app.get('/pizza/:idPizza', function (req, res) {
    Pizza.findOne({id : req.params.idTypePizza}).then((pizza)=>{
        if(pizza){
            res.status(200).json(salad)
        }else{
            res.status(404).json({message : "Pizza type not found - "+req.params.idTypePizza})
        }
    },(err)=>{
        res.status(400).send(err)
    })
});
// -- Passer une commande 
app.post('/commande', function (req, res) {
   

    // -- Create Classique
    let myPizza = new Pizza(req.body);
    myPizza.id = mySalad._id;

    myPizza.save().then((pizza)=>{
        res.status(200).json(pizza)
    },(err)=>{
        res.status(400).send(err)
    })

   
});

// ------------------------
// START SERVER
// ------------------------

// -- Gestion 404
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});