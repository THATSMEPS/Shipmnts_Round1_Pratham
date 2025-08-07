const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({

    store_location:{
        type:String,
        require:true,
        unique:true
    },
    currency:{
        type:String,
        require:true,
        default:'INR'
    },
    tax_percentage:{
        type:Number,
        require:true,
        default:0
    },
    premium_items:{
        type:[String],
        default: []
    },
    
}, {timestamps: true});

module.exports = mongoose.model('Store', storeSchema);