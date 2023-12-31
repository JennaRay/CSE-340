//Needed Resources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
const utilities = require("../utilities/")

//Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("../../inv/detail/:inventoryId", utilities.handleErrors(invController.buildByInventoryId));
router.get("/type/:footerPartial", utilities.handleErrors(invController.buildError));

module.exports = router;