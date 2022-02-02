const animales = require('../models/animales');

var Animal=require('../models/animales'),
express=require('express'),
router=express.Router();

router.post('/',(req,res)=>{
  Animal.find({},(err,docs)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(docs)
  });
});
router.post('/crearanimales',(req,res)=>{
  var body=req.body;
  animales.insertMany({
    
    nombre:body.nombre,
    sexo:body.direccion,
    raza:body.responsable,
    edad:body.horario,
    ciudad:body.ciudad,
    
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });

});
// elminar 
router.post("/eliminaranimal",(req,res)=>{
  animales.remove({
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });
});

//metodo editar

router.post('editaranimal',(req,res)=>{
  var body = req.body;
  Veterinaria.updateMany({
    nombre: body.nombre
  },{
    $set:{
      nombre:body.nombre,
      sexo:body.direccion,
      raza:body.responsable,
      edad:body.horario,
      ciudad:body.ciudad,
    }
    
  },(err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });
});
module.exports=router;
