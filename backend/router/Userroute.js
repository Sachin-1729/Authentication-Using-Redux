const express = require('express');
const router = express.Router();
const usercontroller = require("../controller/Usercontroller");

 
router.get('/',usercontroller.getuser); 
router.post('/signup' , usercontroller.signup); 
router.post('/signin' , usercontroller.signin);
 module.exports = router  