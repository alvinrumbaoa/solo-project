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
