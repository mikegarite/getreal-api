const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'getreal.cxgbtkv0eyak.us-west-2.rds.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'postgress',
    password: env.DB_PASSWORD || 'gomrgvgo!!77',
    database: env.DB_NAME || 'getreal',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;