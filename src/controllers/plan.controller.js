const Plan = require("../models/plan.model.js");
const Store = require("../models/store.model.js");

const createPlan = async (req,res) => {
    try {
        const {planId} = req.params;
        const {store_location, validFrom, validTo, items} = req.body;
        
        const storeExists = await Store.findOne({store_location});
        if (!storeExists) {
            return res.stats(400).json({message:"Store does not exist"});

        }
        const newPlan = new Plan({
            planId,
            store_location,
            validFrom,
            validTo,
            items
        });


        const savedPlan = await newPlan.save();

        res.status(201).json(savedPlan);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};

const getAllPlans = async (req,res) => {
    try {
        const plans = await Plan.find({});
        res.status(200).json(plans);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};
const getPlanById = async (req,res) => {
    try {
        const {planId} = req.params;
        const plans = await Plan.findById(planId);
        res.status(200).json(plans);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};

module.exports = {
    createPlan,
    getAllPlans,
    getPlanById
};