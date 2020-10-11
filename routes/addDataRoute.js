const router = require('express').Router();
const addDataController = require("../controllers/addDataController");

router.route('/')
   .get(addDataController.addData);
   
module.exports = router;