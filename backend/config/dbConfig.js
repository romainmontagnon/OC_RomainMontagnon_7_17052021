// ----------------------------------------
// Databases configuration file

require('dotenv').config();
module.exports = {
    HOST: process.env.DB_HOST,
    DIALECT: process.env.DB_DIALECT,
    DATABASE: process.env.DB_DATABASE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD
};