var mongoose=require('mongoose');
Schema=mongoose.Schema;

var  animalesSchema= new mongoose.Schema({

nombre:{type:String},
sexo:{type:String},
raza:{type:String},
edad:{type:Number},
ciudad:{type:String}

});
var animales= mongoose.model('animales',animalesSchema);
module.exports=animales;