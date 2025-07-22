import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //checks if all fields are not empty
    if (!name || !email || !password) {
      res.status(400).json({ message: "all fields are required" });
    }
    // checks if user exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      res.status(400).json({ message: "the user is already registered" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword
      });
      if (user) {
        generateToken(res, user.id);
        res.status(201).json({ message: "user created succefully" });
      } else {
        res.status(400).json({ message: "user was not added to the database" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: "the email and password are required" });
    }
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      generateToken(res, user.id);
      res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: undefined
        }
      });
    } else {
      res.status(400).json({
        message: "Invalid credentials,enter a valid email and password"
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const signOut = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({ message: "user logged out" });
};
export { signUp, signIn, signOut };
