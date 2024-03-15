const { config } = require("dotenv");

config();
const env = process.env.NODE_ENV;
config({ path: `.env.${env}`, override: true });

const Config = {
  https: process.env.HTTPS === "true",
  portApp: process.env.PORT_APP,
  /**Db */
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.PGPASSWORD,
  schemaOne: process.env.DB_SCHEMA_ONE,
  schemaTwo: process.env.DB_SCHEMA_TWO,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,

  /**jsonwebtokens */
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  /**crypt js */
  secretKeyEnCrypt: process.env.CRYPT_SECRET_KEY,
  env,
};

module.exports = Config;
