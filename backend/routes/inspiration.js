// CREATE ROUTER

// Import Express library
import express from 'express';

// Create Express router object (groups related routes)
const router = express.Router();

// Import controller (containing logic for handling requests)
import inspirationController from '../controllers/inspiration.js';

// Define routes that our API will respond to
router.post("/", inspirationController.getInspiration);

// Export router object (contains all route definitions)
export default router;
