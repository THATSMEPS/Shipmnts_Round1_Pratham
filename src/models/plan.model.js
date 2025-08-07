const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    categoryName:{
        type:String,
        require:true,

    },
    itemName:{
        type:String,
        require:true,
        
    },
    halfPrice:{
        type:Number,
        require:true,
    },
    fullPrice:{
        type:Number,
        require:true,
    },
    extraCharge: {
        type:Number,
        default:0
    }
});
const planSchema = new mongoose.Schema({

    planId:{
        type:String,
        require:true,
        unique:true
    },
    store_location:{
        type:String,
        require:true,
        unique:true
    },
    validFrom:{
        type:Date,
        require:true,
        
    },
    validTo:{
        type:Date,
        require:true,

    },
    items: [itemSchema]
    
}, {timestamps: true});

module.exports = mongoose.model('Plan', planSchema);