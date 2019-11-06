const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME
};
