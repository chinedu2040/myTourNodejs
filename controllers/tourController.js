const axios = require('axios');
const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const TourModel = require('../models/tourModel'); // Use require for importing

// Define the allowed place types
const allowedPlaceTypes = [
  'amusement_park',
  'art_gallery',
  'church',
  'city_hall',
  'mosque',
  'museum',
  'park',
  'restaurant',
  'university',
  'zoo',
];

// Function to search places by type and proximity
exports.searchPlacesByType = async (req, res) => {
  const { type, lat, lng, radius = 5000 } = req.query;

  if (!allowedPlaceTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid place type' });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=${type}&location=${lat},${lng}&radius=${radius}&key=${apiKey}`
    );

    // Create instances of TourModel for each place in the response
    const places = response.data.results.map(placeData => new TourModel(placeData));

    res.json(places.map(place => place.toJSON()));
  } catch (error) {
    console.error('Error in searchPlacesByType:', error); // Log the error details
    res.status(500).json({ error: 'Error fetching data from Google Maps API' });
  }
};

// Function to search nearby places by type
exports.searchNearbyPlacesByType = async (req, res) => {
  const { type, lat, lng, radius = 5000 } = req.query;

  if (!allowedPlaceTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid place type' });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=${type}&location=${lat},${lng}&radius=${radius}&key=${apiKey}`
    );

    // Create instances of TourModel for each place in the response
    const places = response.data.results.map(placeData => new TourModel(placeData));

    res.json(places.map(place => place.toJSON()));
  } catch (error) {
    console.error('Error in searchNearbyPlacesByType:', error); // Log the error details
    res.status(500).json({ error: 'Error fetching data from Google Maps API' });
  }
};
