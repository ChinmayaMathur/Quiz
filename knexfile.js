// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'Cluckr',
      username: 'chinmaya',
      password: '123Vardaan*'
    },
    migrations: { //make sure this object is inside of the "development" object
      tableName: "migrations",
      directory: "db/migrations" //tell knex that our migration files
    }

  },
};
