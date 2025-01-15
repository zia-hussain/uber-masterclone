const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (err) {
    next(err);
    console.log("req.query", req.query);
    res.status(400).json({ message: "Coordinates Not Found" });
  }
};
