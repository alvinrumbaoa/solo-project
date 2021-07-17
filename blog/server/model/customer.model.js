const mongoose = require("mongoose");


const CustomerSchema = new mongoose.Schema({
        name: {type: String },
        email: {type: String},
        phone: {type: String},
        message: {type: String},
        theme: {type: String, 
                enum: ["Wedding","Newborn","Birthdays","Events","Modeling"],
                required: [true, "Theme is Required"]
        }
},{timestamps: true});


module.exports = mongoose.model("Customer", CustomerSchema);