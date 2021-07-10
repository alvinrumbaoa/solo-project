const Images = require("../model/image.model");

module.exports.getAllImages =  (req, res)  => {
    console.log("get all Images");
    
        Images.find({ })
            .then((allImages)=>{
                    console.log(allImages);
                    res.json(allImages);
            })
            .catch((err) => {
                    console.log(err);
                    res.json(err);
            })
    }
    
    module.exports.createImages=(req, res) =>{
        console.log(require);
        Images.create(req.body)
            .then((newImages) => { 
                    console.log(newImages);
                    res.json(newImages);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneImage= (req, res) => {
        console.log("inside getOneImage");
        console.log(req.params.id);
    
        Images.findById(req.params.id)
            .then((oneImage) => {
                console.log(oneImage);
                res.json(oneImage);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };

    
    module.exports.updateImage = (req, res) => {
        console.log("inside updateImage");
        console.log(req.params.id);  // the document we need to update
        console.log(req.body);       // the data we will be updating with

        Images.findByIdAndUpdate(req.params.id, req.body, {
            new: true,    // return the updated document instead of the original
            runValidators: true  // validate the json data just like the create
        })
            .then((updatedCustomer) => {
                console.log(updatedCustomer);
                res.json(updatedCustomer);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Image
    module.exports.deleteImage = (req, res) => {
        console.log("inside deleteImage");
        console.log(req.params.id);
    
        Images.findByIdAndDelete(req.params.id)
            .then((deletedImage) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedImage);
                res.json(deletedImage);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    