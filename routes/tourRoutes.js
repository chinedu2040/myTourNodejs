// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController'); // Import the controller
const authController = require('../controllers/authController')

router.get('/search', authController.protect, tourController.searchPlacesByType);

// Add more routes for other types of searches
router.get('/places/nearby/:type', authController.protect, tourController.searchNearbyPlacesByType);

module.exports = router;
