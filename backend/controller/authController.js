import User from "../models/userModel.js";
import JWT from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v -password");
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};


//register
export const registerUser = async (req, res) => {
  try {
    if (
      (!req.body.firstName,
      !req.body.lastName,
      !req.body.userName,
      !req.body.password)
    ) {
      return res.status(400).send({
        message: "please Send all fields",
      });
    }
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: hashedPassword,
      
    };

    const users = await User.create(newUser);
    return res.status(201).send(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error creating user", error });
  }
};

//login
export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({
        message: "Username or password incorrect",
      });
    }

    // Compare the entered password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Username or password incorrect",
      });
    }

    const token = JWT.sign({ userdetails: user }, process.env.JWT_SECRET, {
      audience: "aud",
      issuer: "iss",
    });

    res.status(200).json({
      message: "User logged in successfully",
      token,
      role: user.role,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
