var mongoose=require('mongoose');
Schema=mongoose.Schema;

var  veterinariaSchema= new mongoose.Schema({

nombre:{type:String},
direccion:{type:String},
responsable:{type:String},
horario:{type:Number},
ciudad:{type:String}

});
var veterinaria= mongoose.model('veterinaria',veterinariaSchema);
module.exports=veterinaria;
