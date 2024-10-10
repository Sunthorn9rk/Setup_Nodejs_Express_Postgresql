const express = require("express");
const router = express.Router();

const {homepage} = require("../Controllers/page");

// const {auth, adminCheck} = require("../Middleware/auth");

// http://localhost:5000/api/user
router.get("/", homepage);

module.exports = router;
