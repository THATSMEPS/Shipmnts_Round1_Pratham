const express = require('express');
const router = express.Router();
const {createPlan,
    getAllPlans,
    getPlanById} = require('../controllers/plan.controller.js');

router.post('/', createPlan);
router.get('/', getAllPlans);
router.get('/:planId', getPlanById);

module.exports = router;
