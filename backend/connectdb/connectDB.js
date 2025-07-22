import mysql from "mysql2";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("tododb", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default sequelize;
