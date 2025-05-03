import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "10d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;

    // Check if the user exists in the appropriate collection
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    // If user already exists, return an error
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create the user based on role
    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    } else if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    // Save the user to the database
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error, please try again",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;

    // Check for user in both collections in parallel
    const [patient, doctor] = await Promise.all([
      User.findOne({ email }),
      Doctor.findOne({ email }),
    ]);

    user = patient || doctor; // Use whichever user exists

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Destructure user data to avoid returning sensitive information like password
    const { password: userPassword, role, appointments, ...rest } = user._doc;

    // Return the response with token and user data
    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: false,
      message: "Failed to login",
    });
  }
};
