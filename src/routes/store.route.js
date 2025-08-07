const express = require('express');
const router = express.Router();
const {createStore,
    updateStore} = require('../controllers/store.controller.js');

router.post('/', createStore);
router.put('/:store_location', updateStore);

module.exports = router;
