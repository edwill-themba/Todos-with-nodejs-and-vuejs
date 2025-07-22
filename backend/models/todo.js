import { DataTypes } from "sequelize";
import sequelize from "../connectdb/connectDB.js";

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 4,
    max: 255
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  isLiked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

export default Todo;
