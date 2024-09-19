// CREATE ROUTER

// Import Express library
const express = require("express");

// Create Express router object (groups related routes)
const router = express.Router();

// Import controller (containing logic for handling requests)
const inspirationController = require('../controllers/inspiration');

// Define routes that our API will respond to
router.get("/", inspirationController.getInspiration);

// Export router object (contains all route definitions)
module.exports = router;
