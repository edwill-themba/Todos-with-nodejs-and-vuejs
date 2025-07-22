import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt; // cookie-parser
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await decode.userId;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized,invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { protect };
