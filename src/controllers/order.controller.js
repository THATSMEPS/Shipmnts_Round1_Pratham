const Order = require("../models/order.model.js");
const Plan = require("../models/plan.model.js");
const Store = require("../models/store.model.js");

const createOrder = async (req,res) => {
    try {
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};


module.exports = {
    createOrder
};