import { DataSource } from 'typeorm';
import { Pool } from 'pg';

function createPGCLient() {
  const pgClient = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 9001,
  });
  return pgClient;
}

function createDataSource() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [],
    synchronize: false,
  });
  return dataSource;
}

async function initDB() {
  const pgClient = createPGCLient();
  const pgconn = await pgClient.connect();
  console.log(pgconn);
  const conn = await createDataSource().initialize();
  console.log(conn);
}

initDB();
