import { Sequelize } from "sequelize";

const sequelize = new Sequelize("school_db", "root", "7893", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));


export default sequelize;