const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Welcome to the API. Routes will be setup here." });
});

module.exports = router;
//Initial Boilerplate