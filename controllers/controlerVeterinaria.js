const veterinaria = require('../models/veterinaria');

var Veterinaria=require('../models/veterinaria'),
express=require('express'),
router=express.Router();

router.post('/',(req,res)=>{
  Veterinaria.find({},(err,docs)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(docs)
  });
});
router.post('/crearveterinaria',(req,res)=>{
  var body=req.body;
  veterinaria.insertMany({
    nombre:body.nombre,
    direccion:body.direccion,
    responsable:body.responsable,
    horario:body.horario,
    ciudad:body.ciudad,
    
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });

});
// elminar peliculas
router.post("/eliminarveterinaria",(req,res)=>{
  veterinaria.remove({
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });
});

//metodo editar

router.post('editarveterinaria',(req,res)=>{
  var body = req.body;
  Veterinaria.updateMany({
    nombre: body.nombre
  },{
    $set:{
    direccion:body.direccion,
    responsable:body.responsable,
    horario:body.horario,
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
