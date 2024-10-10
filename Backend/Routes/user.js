const express = require("express");
const router = express.Router();

const {listuser, createuser} = require("../Controllers/user");

// const {auth, adminCheck} = require("../Middleware/auth");

// http://localhost:5000/api/user
router.get("/listuser", listuser);
router.post("/createuser", createuser);

module.exports = router;
