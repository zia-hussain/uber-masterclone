const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),

    body("email").isEmail().withMessage("Invalid email"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),

    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),

    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),

    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be at least 1"),

    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "rikshaw"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.registerCaptain
);

module.exports = router;
