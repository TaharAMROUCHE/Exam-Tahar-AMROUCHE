let mongoose = require('mongoose'),
    Schema	 	= mongoose.Schema;

//------------------------------------------- Resources Schema
let PizzaSchema = new Schema({
    id : String,
    nom : { type : String, required : true},
    description : String,
    motsCles : String,
    temps : Number
});

mongoose.model('Pizza', PizzaSchema);
