import { DataTypes } from "sequelize";
import sequelize from "../connectdb/connectDB.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 6,
    max: 255
  }
});

export default User;
