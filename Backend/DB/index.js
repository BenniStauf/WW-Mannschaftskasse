import pg from 'pg';

// const pool = new pg.Pool();
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  // host: 'dpg-cml73an109ks73a6usf0-a.frankfurt-postgres.render.com',
  // user: 'wwuser',
  // database: 'wwdatabase',
  // password: '3xbtrNIJ38XVmfnnWxNCWOGsCydsBuNL',
  // port: 5432,
});

const query = (text, params) => pool.query(text, params);

export { query, pool };
