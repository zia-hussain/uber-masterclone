const userModel = require("../models/user.model");
const userService = require("../services/user.sevice");
const { validationResult } = require("express-validator");

module.exports.registerUser = async function (req, res, next) {
  console.log("Incoming Request Body:", req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};
