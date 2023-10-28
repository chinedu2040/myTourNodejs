class TourModel {
  constructor(placeData) {
    this.placeData = placeData;
  }

  // You can add methods here to manipulate or format the place data if needed
  // For example, to extract specific details from the response

  toJSON() {
    return this.placeData;
  }
}

module.exports = TourModel; // Export the class using CommonJS module.exports
