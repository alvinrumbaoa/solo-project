const mongoose = require("mongoose");


const ImagesSchema = new mongoose.Schema({
            imgURL: {type:String}
    
},{timestamps: true});


module.exports = mongoose.model("Images", ImagesSchema);