const express = require("express");
const router = express.Router();

router.get("/test", (request, response) => response.json({ msg: "This is the users route"}));

module.exports = router;