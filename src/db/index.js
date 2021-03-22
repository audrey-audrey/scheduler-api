const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: true
});

client
  .connect()
  .catch(err => console.log(`Error connecting to Postgres server:\n${err}`));

module.exports = client;