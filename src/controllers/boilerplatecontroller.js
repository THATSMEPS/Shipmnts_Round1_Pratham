const initial = require("../models/boilerplatemodel.js");

const somefunction = async (req,res) => {
    try {
        const {data, data2 , etc} = req.body;
        const newData = new initial({

        })

        const savedData = await newData.save();

        res.status(201).json(savedData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    
    }
};

module.exports = {
    somefunction
};