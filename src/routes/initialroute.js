const express = require('express');
const router = express.Router();
const {data, data2, etc, somefunction} = require('../controllers/boilerplatecontroller.js');

router.get('/', somefunction);

module.exports = router;
