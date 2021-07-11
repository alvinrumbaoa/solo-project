const ImageController = require('../controller/image.controller');

module.exports = function(app) {
	// get all Images
	app.get("/api/images", ImageController.getAllImages);
	// create Image
	app.post("/api/images", ImageController.createImages);
	// get one Image
	// create a param variable called "id"
    app.get("/api/images/:id", ImageController.getOneImage);
		// update Image
	app.put("/api/images/:id", ImageController.updateImage);
		// delete Image
	app.delete("/api/images/:id",  ImageController.deleteImage);
	}
	
}
