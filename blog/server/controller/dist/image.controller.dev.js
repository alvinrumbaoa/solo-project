"use strict";

var Images = require("../model/image.model");

module.exports.getAllImages = function (req, res) {
  console.log("get all Images");
  Images.find({}).then(function (allImages) {
    console.log(allImages);
    res.json(allImages);
  })["catch"](function (err) {
    console.log(err);
    res.json(err);
  });
};

module.exports.createImages = function (req, res) {
  console.log(require);
  Images.create(req.body).then(function (newImages) {
    console.log(newImages);
    res.json(newImages);
  })["catch"](function (err) {
    console.log(err);
    res.json(err);
  });
};

module.exports.getOneImage = function (req, res) {
  console.log("inside getOneImage");
  console.log(req.params.id);
  Images.findById(req.params.id).then(function (oneImage) {
    console.log(oneImage);
    res.json(oneImage);
  })["catch"](function (err) {
    console.log(err);
    res.json(err);
  });
};