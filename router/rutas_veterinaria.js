const express=require('express'),
router=express.Router(),
veterinaria=require('../controllers/controlerVeterinaria');
router.use('/veterinaria',veterinaria);
module.exports=router;