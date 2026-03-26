import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));


export default sequelize;