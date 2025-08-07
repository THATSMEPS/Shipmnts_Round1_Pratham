const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({

    itemName:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    isPremium:{
        type:Boolean,
        
        default:false
    },
    premiumChargeApplied:{
        type:Number,
        default:0
    }
    
}, {timestamps: true});

const orderSchema = new mongoose.Schema({

    store_location:{
        type:String,
        require:true,
    },
    items: [orderItemSchema],
    subTotal: {
        type:Number,
        require:true,
        default:0
    },
    taxAmount: {
        type:Number,
        require:true,
        default:0
    },
    totalPremiumCharge: {
        type:Number,
        require:true,
        default:0
    },
    finalAmount: {
        type:Number,
        require:true,
        default:0
    }

}, {timestamps: true});



module.exports = mongoose.model('Order', orderSchema);