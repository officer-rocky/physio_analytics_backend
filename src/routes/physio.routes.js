const express = require("express");
const router = express.Router();

const controller = require("../controllers/physio.controller");

// Patient routes
router.post("/patients", controller.addPatient);
router.get("/patients", controller.getPatients);

// Session routes
router.post("/sessions", controller.addSession);
router.get("/sessions", controller.getSessions);

module.exports = router;
