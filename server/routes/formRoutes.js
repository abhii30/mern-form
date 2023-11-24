const express = require("express");
const { getForms, addForm } = require("../controllers/formControllers");
const router = express.Router();

router.route("/").get(getForms);
router.route("/").post(addForm);

module.exports = router;
