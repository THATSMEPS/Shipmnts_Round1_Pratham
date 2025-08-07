const Store = require("../models/store.model.js");

const createStore = async (req,res) => {
    try {
        const {store_location, currency, tax_percentage, premium_items} = req.body;
        
        const storeExists = await Store.findOne({store_location});
        if (storeExists) {
            return res.stats(400).json({message:"Store already exists"});

        }

        const store = new Store({
            store_location,
            currency,
            tax_percentage,
            premium_items

        });


        const createdStore = await store.save();

        res.status(201).json(createdStore);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};

const updateStore = async (req,res) => {
    try {
        const {store_location} = req.params;
        const {currency, tax_percentage, premium_items} = req.body;
   
        const store = await Store.findOne({store_location});
        if (!store) {
            return res.stats(400).json({message:"Store does not exist"});

        }

        //update
            
            Store.currency = currency ?? Store.currency;
            Store.tax_percentage = tax_percentage ?? Store.tax_percentage;
            Store.premium_items = premium_items ?? Store.premium_items;        

        const updatedStore = await store.save();

        res.status(201).json(updatedStore);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};

module.exports = {
    createStore,
    updateStore
};