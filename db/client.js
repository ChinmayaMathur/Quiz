//load the config of our knexfile.js
const config = require("../knexfile");

//load knex module
const knex = require("knex");

// export connection with the "development" configuration
// this will look for the configuration in the development object
module.exports = knex(config.development);
