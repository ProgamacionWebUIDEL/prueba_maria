const express=require('express'),
router=express.Router(),
animales=require('../controllers/controlerAnimales');
router.use('/animales',animales);
module.exports=router;